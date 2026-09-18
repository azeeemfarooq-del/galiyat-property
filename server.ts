import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI Client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Automatic response endpoint for customer inquiries
app.post('/api/inquiry-auto-reply', async (req, res) => {
  try {
    const { name, whatsapp, preferredLocation, propertyType, budget, requirement } = req.body;

    const loc = preferredLocation || 'Galiyat region';
    const type = propertyType || 'Plot / Cottage';
    const bud = budget || 'Consultant guidance required';
    const reqDetail = requirement || 'General mountain property inquiry';

    const prompt = `You are the Senior Property Consultant at "Galiyat Property Consultant" (Tagline: "Your Trust, Our Priority", WhatsApp: 03009881240), specializing in Nathia Gali, Ayubia, Khanaspur, Kalabagh, Murree, Dunga Gali, and Abbottabad District hill stations.

A client has submitted an inquiry:
- Name: ${name}
- WhatsApp: ${whatsapp}
- Preferred Location: ${loc}
- Property Type: ${type}
- Budget Range: ${bud}
- Specific Requirement: ${reqDetail}

Generate a professional, warm, concise, and structured automated response acknowledging their inquiry:
1. Greet them respectfully (Assalam-o-Alaikum ${name}).
2. Provide immediate preliminary insight regarding ${loc} and ${type} (mentioning key considerations like road access, pine canopy, elevation, or winter viability).
3. Mention that for their budget (${bud}), we will shortlist verified options with clean revenue records (Fard Malkiat and Inteqal mutation).
4. Highlight that our consultant will also reach out on WhatsApp (${whatsapp}) or they can message us directly at 03009881240.
5. Keep it trustworthy, factual, and strictly under 150 words. Do not invent fake legal guarantees.`;

    const ai = getGeminiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      if (response.text) {
        return res.json({ autoResponse: response.text });
      }
    }

    // Fallback response if no API key or generation failed
    const fallbackResponse = `Assalam-o-Alaikum ${name},\n\nThank you for contacting Galiyat Property Consultant regarding ${type} opportunities in ${loc}.\n\n✅ **Instant Preliminary Guidance:**\n• **Location Insights:** ${loc} is a prime destination for ${type.toLowerCase()} investments with healthy seasonal appreciation.\n• **Budget & Feasibility:** For your budget (${bud}), we evaluate properties featuring direct motorable access, reliable spring/pipeline water, and valid electricity connections.\n• **Due Diligence Priority:** We verify original Fard Malkiat, Inteqal registers, and Aks Shajra maps before recommending any parcel.\n\nOur senior consultant at 03009881240 is reviewing matching options for you right now.`;

    return res.json({ autoResponse: fallbackResponse });
  } catch (error) {
    console.error('Inquiry auto-reply error:', error);
    return res.status(500).json({ error: 'Failed to generate auto-response' });
  }
});

// Live Chat assistant endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    const systemInstruction = `You are the official AI Property Assistant for "Galiyat Property Consultant", Pakistan's premier local real estate consultancy for Galiyat (Nathia Gali, Ayubia, Khanaspur, Kalabagh, Dunga Gali, Changla Gali, Khairagali, and Murree).

Key Business Information:
- Brand: Galiyat Property Consultant
- Tagline: "Your Trust, Our Priority"
- WhatsApp / Phone: 03009881240
- Address: Main Bazar Nathia Gali & Ayubia Road, Galiyat, Khyber Pakhtunkhwa, Pakistan
- Core Business: Buying, Selling, Investment Advisory, Topography Analysis, and Document Due Diligence for Plots, Cottages, Villas, and Land.
- NOTE: This is NOT a hotel booking or vacation rental platform. Do not talk about nightly room rates or check-in dates.

Tone: Professional, hospitable, realistic, knowledgeable about mountain terrain, road access, winter snowfall, GDA zoning, and revenue records (Fard Malkiat & Inteqal). Keep answers concise (under 120 words), structured with bullet points where appropriate, and suggest connecting with the Senior Consultant on WhatsApp (03009881240) for site visits or current off-market listings.`;

    const ai = getGeminiClient();
    if (ai) {
      const formattedContents = [
        { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${message}` }] },
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: formattedContents,
      });

      if (response.text) {
        return res.json({ reply: response.text });
      }
    }

    return res.status(500).json({ error: 'API key not configured or generation failed' });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({ error: 'Chat service error' });
  }
});

// Setup Vite middleware in dev or serve static dist in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Galiyat Property Consultant server listening on port ${PORT}`);
  });
}

startServer();
