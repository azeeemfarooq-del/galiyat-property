import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Sparkles, CheckCheck, RefreshCw, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';
import { BUSINESS_INFO, FREQUENT_QUESTIONS } from '../data/mockData';

interface LiveChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: 'Assalam-o-Alaikum! Welcome to Galiyat Property Consultant.\n\nI am your instant property assistant. How can I assist you with plots, cottages, or investment opportunities in Nathia Gali, Ayubia, Murree, or surrounding Galiyat areas today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: 'Plots in Nathia Gali', action: 'Tell me about residential plots in Nathia Gali' },
        { label: 'Cottages in Ayubia', action: 'What are available cottages in Ayubia?' },
        { label: 'Property verification (Fard/Inteqal)', action: 'How to verify property documents in Galiyat?' },
        { label: 'Sell My Property', action: 'How can I sell my property through you?' },
      ],
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Comprehensive rule-based knowledge fallback matching Galiyat specifics
  const getKnowledgeResponse = (userText: string): string => {
    const text = userText.toLowerCase();

    if (text.includes('nathia') || text.includes('nathaigali')) {
      return `🏔️ **Nathia Gali (Nathaigali) Property Overview:**\n\n• **Popular Options:** 10 Marla to 1–2 Kanal scenic plots and custom wooden/stone cottages.\n• **Elevation:** ~8,200 ft with pristine pine forest trails (Mukshpuri & Miranjani).\n• **Key Considerations:** Highest prestige and demand in the region. Always verify Fard Malkiat and GDA zoning clearance.\n\nWould you like a direct consultation with our senior consultant on WhatsApp (03009881240)?`;
    }

    if (text.includes('ayubia')) {
      return `🌲 **Ayubia Property Overview:**\n\n• **Popular Options:** 5 Marla & 10 Marla family plots, scenic mountain chalets, and terraced land near the National Park border.\n• **Lifestyle:** Peaceful alpine atmosphere, famous chairlift, and Pipeline walking track connection.\n• **Due Diligence:** Ensure the land is private revenue land outside park reservation boundaries with verified Inteqal.\n\nConnect with our consultant at 03009881240 for available Ayubia listings.`;
    }

    if (text.includes('khanaspur') || text.includes('kalabagh')) {
      return `🌄 **Khanaspur & Kalabagh Opportunities:**\n\n• **Khanaspur:** Serene, less congested valley views, ideal for quiet family vacation retreats.\n• **Kalabagh:** High-altitude ridge facing panoramic mountain skylines with strong appreciation potential.\n• **Availability:** 5 Marla, 10 Marla, and 1 Kanal plots available with direct link road access.`;
    }

    if (text.includes('murree')) {
      return `🏢 **Murree vs Galiyat:**\n\n• **Murree:** 45-60 min from Islamabad via Expressway, higher commercial activity and rental demand.\n• **Galiyat (Nathia Gali / Ayubia):** Higher elevation, denser pine canopy, cooler summers, and more exclusive second-home tranquility.`;
    }

    if (text.includes('verify') || text.includes('fard') || text.includes('inteqal') || text.includes('document') || text.includes('legal')) {
      return `📋 **Property Due Diligence in Galiyat (KPK):**\n\n1. **Fard Malkiat:** Obtain original ownership certificate from the local Patwarkhana.\n2. **Inteqal (Mutation):** Cross-check computerized/manual revenue registers to confirm unbroken chain of ownership.\n3. **Aks Shajra (Revenue Map):** Physically verify the boundaries and road access width against the map.\n4. **GDA & Forest NOC:** Verify that the plot does not overlap reserved forest compartments.\n\nWe assist clients in coordinating complete independent verification before any transaction.`;
    }

    if (text.includes('sell') || text.includes('listing') || text.includes('list')) {
      return `🏡 **Selling Your Property with Us:**\n\nWe help property owners in Nathia Gali, Ayubia, Kalabagh, Murree, and across Galiyat present their properties to genuine buyers with accurate market positioning.\n\nYou can use our **"Sell Your Property"** form on the website or message details directly to WhatsApp: **03009881240**.`;
    }

    if (text.includes('price') || text.includes('rate') || text.includes('cost') || text.includes('budget')) {
      return `💰 **Price Factors in Galiyat:**\n\nMountain property prices vary widely depending on:\n1. Road access width & snow clearance feasibility.\n2. Slope gradient and retaining wall requirements.\n3. Frontage and unobstructed valley/sunset views.\n4. Proximity to main highway vs link roads.\n\nFor current quotes on specific sizes (e.g. 5 Marla, 10 Marla, 1 Kanal), please message us on WhatsApp at **03009881240**.`;
    }

    if (text.includes('marla') || text.includes('size')) {
      return `📐 **Plot Sizes in Galiyat (KPK):**\n\nIn Abbottabad District / Galiyat, revenue Marla calculation commonly ranges around 225 sq ft or 272 sq ft depending on the revenue mauza.\n• 1 Kanal = 20 Marlas.\nWe always specify the exact square footage and physical boundary dimensions on site.`;
    }

    return `Thank you for your question. At Galiyat Property Consultant, our priority is providing accurate, transparent on-ground guidance for plots, cottages, and investments across Nathia Gali, Ayubia, Khanaspur, Kalabagh, and Murree.\n\nWould you like our senior consultant to share current options or schedule a site visit? You can also message directly on WhatsApp: **03009881240**.`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    try {
      // Try backend /api/chat endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-4).map((m) => ({ role: m.sender, content: m.text })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: 'Chat with Senior Consultant', action: 'Connect on WhatsApp' },
            { label: 'View Latest Listings', action: 'Show available properties' },
          ],
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        throw new Error('Fallback response');
      }
    } catch {
      // Automatic knowledge response
      setTimeout(() => {
        const replyText = getKnowledgeResponse(query);
        const assistantMsg: ChatMessage = {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: 'Chat on WhatsApp', action: 'Connect on WhatsApp' },
            { label: 'Explore Locations', action: 'Tell me more about Galiyat locations' },
          ],
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setIsTyping(false);
      }, 700);
      return;
    }

    setIsTyping(false);
  };

  const handleActionClick = (action: string) => {
    if (action === 'Connect on WhatsApp') {
      window.open(BUSINESS_INFO.whatsappUrl, '_blank');
      return;
    }
    handleSendMessage(action);
  };

  if (!isOpen) return null;

  return (
    <div
      id="live-chat-modal"
      className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[420px] sm:max-h-[640px] h-full sm:h-[88vh] bg-white sm:rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-fadeIn"
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-[#173F2A] via-[#2D5F3F] to-[#173F2A] p-4 text-white flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#C9A227]/40 flex items-center justify-center relative">
            <Bot className="w-5 h-5 text-[#C9A227]" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#173F2A]" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
              <span>Galiyat Property Assistant</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            </h3>
            <p className="text-[11px] text-emerald-200 flex items-center gap-1">
              <span>Auto-Responder Active</span>
              <span>•</span>
              <span className="text-[#C9A227] font-semibold">{BUSINESS_INFO.whatsappDisplay}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setMessages([messages[0]]);
            }}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset Chat"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* WhatsApp Escalation Bar */}
      <div className="bg-[#25D366]/10 px-4 py-2 border-b border-[#25D366]/20 flex items-center justify-between text-xs text-[#173F2A]">
        <div className="flex items-center gap-1.5 font-medium">
          <Phone className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
          <span>Direct Consultant: <strong>{BUSINESS_INFO.whatsappDisplay}</strong></span>
        </div>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#173F2A] hover:underline font-bold text-[11px] flex items-center gap-0.5"
        >
          <span>WhatsApp</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F8F5]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} text-left`}
          >
            <div className="flex items-start gap-2 max-w-[88%]">
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-[#2D5F3F] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Bot className="w-4 h-4 text-[#C9A227]" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-[#2D5F3F] text-white rounded-tr-xs'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-xs'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>

            <span className="text-[10px] text-stone-600 mt-1 px-1 flex items-center gap-1 font-mono">
              <span>{msg.timestamp}</span>
              {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#2D5F3F]" />}
            </span>

            {/* Quick Action Chips attached to message */}
            {msg.suggestedActions && msg.suggestedActions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                {msg.suggestedActions.map((act, i) => (
                  <button
                    key={i}
                    onClick={() => handleActionClick(act.action)}
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#173F2A] border border-emerald-200 text-xs font-semibold transition-all text-left flex items-center gap-1"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#2D5F3F]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing Animation */}
        {isTyping && (
          <div className="flex items-center gap-2 text-stone-600 text-xs">
            <div className="w-7 h-7 rounded-lg bg-[#2D5F3F] text-white flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#C9A227]" />
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl py-2 px-3.5 flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5F3F] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5F3F] animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5F3F] animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about plots, cottages, prices, or Galiyat areas..."
          className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || isTyping}
          className="bg-[#2D5F3F] hover:bg-[#173F2A] disabled:opacity-50 text-white p-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4 text-[#C9A227]" />
        </button>
      </form>
    </div>
  );
};
