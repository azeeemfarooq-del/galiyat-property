import { Property, LocationGuide, GuideArticle } from '../types';

export const BUSINESS_INFO = {
  name: 'Galiyat Property Consultant',
  tagline: 'Your Trust, Our Priority',
  whatsappNumber: '03009881240',
  whatsappDisplay: '03009881240',
  whatsappIntl: '+92 300 9881240',
  whatsappUrl: 'https://wa.me/923009881240',
  email: 'info@galiyatproperty.pk',
  address: 'Main Murree-Nathiagali Road, Near Galiyat Development Authority (GDA), Nathia Gali, KPK, Pakistan',
  officeHours: 'Monday – Sunday: 9:00 AM – 9:00 PM (Direct WhatsApp 24/7)',
  socialLinks: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    twitter: 'https://x.com',
  },
  defaultWhatsAppMessage: 'Assalam-o-Alaikum, I am interested in property opportunities in Galiyat. Please share available options.',
};

export const LOCATIONS_DATA: LocationGuide[] = [
  {
    id: 'galiyat-main',
    name: 'Galiyat',
    subtitle: 'The Heart of Northern Hill Stations',
    description: 'Mountain beauty, peaceful surroundings and diverse property opportunities spanning lush pine forests and panoramic valley views.',
    elevation: '7,000 – 8,200 ft',
    distanceFromMurreeOrIslamabad: 'approx. 65–85 km from Islamabad',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Lush pine canopy', 'Year-round pleasant climate', 'High tourist & second-home demand', 'GDA regulated region'],
    keyPropertyTypes: ['Residential Plots', 'Private Cottages', 'Commercial Land'],
  },
  {
    id: 'nathia-gali',
    name: 'Nathia Gali',
    subtitle: 'Premier Hill Station & Lifestyle Hub',
    description: 'One of the most popular and prestigious destinations in the Galiyat region (also searched as Nathaigali) known for luxury cottages and serene trails.',
    elevation: '8,200 ft',
    distanceFromMurreeOrIslamabad: '32 km from Murree / 80 km from Islamabad',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Prime central market & facilities', 'Highest appreciation track record', 'Mukshpuri & Miranjani hiking trails', 'Exclusive cottage communities'],
    keyPropertyTypes: ['Luxury Mountain Cottages', 'Scenic Plots (10 Marla – 2 Kanal)', 'Boutique Hospitality Land'],
  },
  {
    id: 'ayubia',
    name: 'Ayubia',
    subtitle: 'National Park & Alpine Pine Escapes',
    description: 'A beautiful forested mountain destination with strong lifestyle appeal, famous chairlift attractions, and tranquil natural surroundings.',
    elevation: '8,000 ft',
    distanceFromMurreeOrIslamabad: '26 km from Murree / 75 km from Islamabad',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Ayubia National Park boundary', 'Pipeline walking track connection', 'Dense pine forests', 'Ideal for family vacation homes'],
    keyPropertyTypes: ['Residential Plots', 'Wooden Style Cottages', 'Terraced Land'],
  },
  {
    id: 'khanaspur',
    name: 'Khanaspur',
    subtitle: 'Tranquil Mountain Living & Valley Vistas',
    description: 'Peaceful surroundings and scenic mountain views, offering peaceful retreat living away from tourist congestion while remaining easily accessible.',
    elevation: '7,500 ft',
    distanceFromMurreeOrIslamabad: 'Near Ayubia, 28 km from Murree',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Serene, low-density atmosphere', 'Expansive panoramic sunrise views', 'Good road connectivity', 'Growing investment interest'],
    keyPropertyTypes: ['10 Marla Plots', 'Vacation Chalets', 'Agricultural & Scenic Acreage'],
  },
  {
    id: 'kalabagh',
    name: 'Kalabagh',
    subtitle: 'Panoramic Ridge & High-Potential Enclave',
    description: 'A beautiful hill location with residential and investment potential, overlooking pristine valleys with elevated vantage points.',
    elevation: '8,100 ft',
    distanceFromMurreeOrIslamabad: 'Adjacent to Nathia Gali',
    imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Clear mountain skyline vistas', 'Close proximity to Nathia Gali center', 'High-elevation crisp air', 'Attractive long-term potential'],
    keyPropertyTypes: ['View-facing Plots', 'Modern Hillside Villas', 'Investment Parcels'],
  },
  {
    id: 'murree',
    name: 'Murree',
    subtitle: 'Major Tourism Hub & Gateway Market',
    description: 'A major nearby tourism and property market offering rapid highway access from Islamabad and high commercial activity.',
    elevation: '7,200 ft',
    distanceFromMurreeOrIslamabad: '55 km from Islamabad via Expressway',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Direct 4-lane expressway connectivity', 'High commercial footfall', 'Extensive utilities & medical access', 'Active resale & rental market'],
    keyPropertyTypes: ['Apartments & Suites', 'Commercial Plots', 'Residential Houses'],
  },
];

export const ADDITIONAL_LOCATIONS = ['Dunga Gali', 'Changla Gali', 'Khairagali'];

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Mountain View Residential Plot',
    location: 'Ayubia',
    type: 'Plot',
    size: '10 Marla',
    price: 'Contact for Current Price',
    status: 'Available',
    description: 'Elevated residential plot with direct pine valley views, clear road access, and serene surroundings ideal for building a vacation home.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    features: ['Direct Road Access', 'Pine Forest Surroundings', 'Sunny South-Facing Aspect', 'Clear Boundary Demarcation'],
    isFeatured: true,
    isSampleListing: true,
    elevation: '7,950 ft',
    roadAccess: '18 ft paved link road',
    view: 'Deep pine valley & mountain sunset view',
  },
  {
    id: 'prop-2',
    title: 'Scenic Pine Forest Cottage',
    location: 'Nathia Gali',
    type: 'Cottage',
    size: '1 Kanal (3-Bed Luxury Cottage)',
    price: 'Contact for Current Price',
    status: 'Available',
    description: 'Custom-designed alpine style cottage featuring natural wood cladding, stone fireplace, spacious terrace, and panoramic forest outlook in premier Nathaigali.',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    features: ['3 En-suite Bedrooms', 'Natural Wood Finishing', 'Fireplace & Central Heating provision', 'Lawn & Car Parking'],
    isFeatured: true,
    isSampleListing: true,
    elevation: '8,150 ft',
    roadAccess: 'Main metalled road connection',
    view: 'Dense pine tree canopy & valley clouds',
  },
  {
    id: 'prop-3',
    title: 'Valley Facing Residential Land',
    location: 'Kalabagh',
    type: 'Plot',
    size: '1 Kanal Plot',
    price: 'Contact for Current Price',
    status: 'Under Discussion',
    description: 'Prime hillside plot in peaceful Kalabagh ridge with unhindered panoramic views, suitable for private family villa or high-end retreat.',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80',
    features: ['Panoramic Ridge View', 'Electricity Available Nearby', 'Gentle Slope Layout', 'Quiet Neighborhood'],
    isFeatured: true,
    isSampleListing: true,
    elevation: '8,050 ft',
    roadAccess: 'Paved road',
    view: 'Unobstructed mountain ridge vista',
  },
  {
    id: 'prop-4',
    title: 'High-Altitude Boutique Villa',
    location: 'Dunga Gali',
    type: 'Villa',
    size: '1.5 Kanal (4-Bed Villa)',
    price: 'Contact for Current Price',
    status: 'Available',
    description: 'Modern hill station residence situated near the famous pipeline track route, featuring insulated glass windows and private garden.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    features: ['4 Bedrooms + Servant Quarter', 'Insulated Double Glazed Glass', 'Private Water Storage', 'Terrace Barbecue Area'],
    isFeatured: true,
    isSampleListing: true,
    elevation: '8,200 ft',
    roadAccess: 'All-weather access road',
    view: 'Mukshpuri peak & valley landscape',
  },
  {
    id: 'prop-5',
    title: 'Peaceful Retreat Plot',
    location: 'Khanaspur',
    type: 'Plot',
    size: '5 Marla Plot',
    price: 'Contact for Current Price',
    status: 'Available',
    description: 'Compact and economical residential plot in Khanaspur, excellent for a cozy weekend cabin or budget-friendly mountain retreat.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    features: ['Budget-Friendly Entry', 'Peaceful Atmosphere', 'Water Supply Nearby', 'Ready for Planning'],
    isFeatured: false,
    isSampleListing: true,
    elevation: '7,600 ft',
    roadAccess: 'Link road',
    view: 'Green hillside & village terraced fields',
  },
  {
    id: 'prop-6',
    title: 'Commercial Tourism Land Parcel',
    location: 'Galiyat',
    type: 'Commercial Property',
    size: '2 Kanal Commercial Land',
    price: 'Contact for Current Price',
    status: 'Under Discussion',
    description: 'Main road front commercial land parcel suitable for boutique hotel, guest house, or high-traffic mountain cafe with parking space.',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
    features: ['Main Road Frontage', 'High Tourism Footfall', 'Commercial Feasibility', 'Heavy Vehicle Access'],
    isFeatured: false,
    isSampleListing: true,
    elevation: '7,800 ft',
    roadAccess: 'Direct Murree-Abbottabad Highway',
    view: 'Front highway & rear valley view',
  },
  {
    id: 'prop-7',
    title: 'Scenic Hill Cottage with Garden',
    location: 'Changla Gali',
    type: 'House',
    size: '10 Marla (3-Bed House)',
    price: 'Contact for Current Price',
    status: 'Sold',
    description: 'Recently transferred 3-bedroom family holiday house surrounded by tall deodar and pine trees with easy winter access.',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1000&q=80',
    features: ['Sold / Sample Archive', 'Full Title Registry Verified', 'Stone & Timber Architecture', 'Private Driveway'],
    isFeatured: false,
    isSampleListing: true,
    elevation: '7,700 ft',
    roadAccess: 'Highway adjacent',
    view: 'Pine forest canopy',
  },
  {
    id: 'prop-8',
    title: 'Investment Plot Parcel',
    location: 'Khairagali',
    type: 'Investment Opportunity',
    size: '4 Kanal Scenic Parcel',
    price: 'Contact for Current Price',
    status: 'Available',
    description: 'Spacious scenic mountain land parcel with potential for sub-division into private chalets or a long-term capital appreciation asset.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    features: ['Sub-division Potential', 'Pure Natural Setting', 'Clear Revenue Record', 'Panoramic Mountain Horizon'],
    isFeatured: false,
    isSampleListing: true,
    elevation: '7,500 ft',
    roadAccess: '16 ft track',
    view: '360 degree panoramic valley',
  },
];

export const TRUST_BADGES = [
  {
    number: '01',
    title: 'Local Expertise',
    description: 'Focused knowledge of Galiyat, Nathia Gali, Ayubia, Murree, and surrounding hill station locations.',
  },
  {
    number: '02',
    title: 'Property Guidance',
    description: 'Professional, unbiased assistance throughout your property search, site visits, and evaluation.',
  },
  {
    number: '03',
    title: 'Transparent Communication',
    description: 'Clear information, straightforward dealings, and no unsupported or exaggerated return claims.',
  },
  {
    number: '04',
    title: 'Direct Support',
    description: 'Contact us directly through WhatsApp at 03009881240 for prompt, personalized property inquiries.',
  },
];

export const WHY_GALIYAT_BENEFITS = [
  {
    title: 'Natural Beauty',
    description: 'Towering pine and deodar forests, cool misty valleys, and crisp mountain air offering refuge from urban heat.',
  },
  {
    title: 'Peaceful Lifestyle',
    description: 'A serene setting for family holidays, weekend retreats, and private second homes surrounded by nature.',
  },
  {
    title: 'Tourism Appeal',
    description: 'One of Pakistan’s most visited hill corridors, ensuring vibrant seasonal demand and hospitality interest.',
  },
  {
    title: 'Property Potential',
    description: 'Strict topographical limits on developable land create enduring desirability for well-located mountain plots and cottages.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Local Understanding',
    description: 'We live and operate in the Galiyat region, giving you authentic on-ground insights into access roads, terrain, and local norms.',
  },
  {
    title: 'Location Guidance',
    description: 'Helping clients understand the unique characteristics, elevations, winter accessibility, and atmospheres of each Gali.',
  },
  {
    title: 'Buyer Support',
    description: 'Assisting buyers to identify properties matching their specific budget, preferred slope, water availability, and intended use.',
  },
  {
    title: 'Seller Support',
    description: 'Helping property owners accurately position and present their mountain plots and cottages to genuine, qualified buyers.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us Your Requirement',
    description: 'Share your preferred location (Nathia Gali, Ayubia, Murree, etc.), property type, plot size, and budget.',
  },
  {
    step: '02',
    title: 'Explore Opportunities',
    description: 'Review shortlisted properties and plots that closely match your criteria with realistic photos and site specs.',
  },
  {
    step: '03',
    title: 'Visit & Evaluate',
    description: 'Coordinate an on-site visit to inspect the topography, road access, utilities, and independently examine documentation.',
  },
  {
    step: '04',
    title: 'Move Forward',
    description: 'Proceed with complete confidence only after satisfactory verification, due diligence, and mutually agreed terms.',
  },
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'best-areas-to-buy-galiyat',
    title: 'Best Areas to Buy Property in Galiyat',
    slug: 'best-areas-to-buy-property-in-galiyat',
    category: 'Location Guide',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    summary: 'An overview of prime sectors across Nathia Gali, Ayubia, Khanaspur, and Kalabagh to help you choose the right hill station.',
    content: [
      'Galiyat is not a single town, but a scenic mountain corridor stretching between Murree and Abbottabad. Choosing the right area depends heavily on your lifestyle goals and winter accessibility preferences.',
      'Nathia Gali (Nathaigali) is the commercial and social heart with premium cottages and dining, while Ayubia offers direct access to pine nature trails and chairlifts.',
      'Khanaspur and Kalabagh provide quieter residential environments with dramatic valley vistas and less traffic during peak summer weekends.',
      'Always consider road gradient, winter snowfall clearance, and water reservoir provisions when selecting a location.'
    ]
  },
  {
    id: 'property-for-sale-ayubia',
    title: 'Property for Sale in Ayubia: What You Should Know',
    slug: 'property-for-sale-in-ayubia',
    category: 'Market Spotlight',
    readTime: '3 min read',
    publishedDate: 'August 2026',
    summary: 'Key considerations for purchasing residential plots and vacation cottages near Ayubia National Park.',
    content: [
      'Ayubia sits at approximately 8,000 feet elevation and is celebrated for its lush pine forests and cool summer climate.',
      'Plots here range from 5 Marla and 10 Marla family plots to larger 1 to 2 Kanal parcels suitable for alpine chalets.',
      'Because parts of Ayubia border the protected National Park, it is crucial to verify boundary demarcations and ensure that the land is private revenue land with clear ownership records.',
      'Water access typically relies on natural springs (chashma) or private storage tanks, making storage capacity a key factor for any cottage build.'
    ]
  },
  {
    id: 'property-nathia-gali',
    title: 'Property Opportunities in Nathia Gali (Nathaigali)',
    slug: 'property-opportunities-in-nathia-gali',
    category: 'Premium Insights',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    summary: 'Why Nathia Gali remains the most sought-after mountain address in Pakistan for private cottages and boutique properties.',
    content: [
      'Nathia Gali represents the benchmark for prestige mountain real estate in Pakistan. With its central bazar, Governor House heritage, and hiking peaks (Mukshpuri and Miranjani), demand has consistently remained strong.',
      'Properties in central Nathia Gali are limited due to geographical constraints and conservation zones, making available plots highly sought after.',
      'Buyers should look closely at title clarity (Fard, Inteqal / Mutation, and Galiyat Development Authority guidelines) before executing any purchase.',
      'Building in Nathia Gali requires compliance with local structural guidelines suited for seismic and high snowfall conditions.'
    ]
  },
  {
    id: 'things-to-check-before-buying',
    title: 'Things to Check Before Buying Property in Galiyat',
    slug: 'things-to-check-before-buying-property-in-galiyat',
    category: 'Buyer Guide',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    summary: 'A practical due diligence checklist covering revenue records (Fard, Inteqal), access roads, water, and terrain slopes.',
    content: [
      '1. Revenue Document Verification: Always verify the Fard Malkiat (ownership record), Aks Shajra (revenue map), and ensure that the Inteqal (mutation) is up to date in the local Patwarkhana.',
      '2. Physical Boundary Verification: Mountain plots often have steep gradients. Ensure physical demarcation matches the revenue map to avoid neighbor disputes.',
      '3. Road and Snow Access: Check if the access road is metalled, public, or private right-of-way, and how accessible it is during heavy snowfall months (December to February).',
      '4. Water & Electricity: Confirm connection viability with WAPDA/PESCO and assess ground water / spring access.',
      '5. Soil & Retaining Walls: Factor in the cost of retaining walls and hillside stabilization during your budget planning.'
    ]
  },
  {
    id: 'galiyat-vs-murree',
    title: 'Galiyat vs Murree — Property & Lifestyle Comparison',
    slug: 'galiyat-vs-murree-property-lifestyle',
    category: 'Comparative Analysis',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    summary: 'Comparing travel distance, climate, commercial density, and second-home tranquility between Murree and the Galiyat hills.',
    content: [
      'While Murree is only a 45–60 minute drive from Islamabad via the Expressway and offers dense commercial amenities, it is also subject to heavy tourist congestion during peak holidays.',
      'In contrast, Galiyat (spanning Dunga Gali, Nathia Gali, Ayubia, and Khanaspur) offers significantly more dense pine forest coverage, higher average elevation (cooler summer temperatures), and a quieter, more exclusive lifestyle.',
      'Buyers seeking quick weekend access and commercial rental yields often consider Murree, while those seeking a tranquil, scenic mountain sanctuary prioritize Nathia Gali and Ayubia.'
    ]
  },
  {
    id: 'investment-opportunities-galiyat',
    title: 'Investment Opportunities in Galiyat: Realistic Perspectives',
    slug: 'investment-opportunities-in-galiyat',
    category: 'Investment Advisory',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    summary: 'Understanding value drivers, scarcity of developable land, and honest considerations for mountain property investment.',
    content: [
      'Unlike sprawling flatland housing schemes where supply can continually expand, mountain land in Galiyat is naturally finite and strictly bounded by topography and forests.',
      'This natural supply constraint provides long-term preservation of desirability for genuine, prime-access properties.',
      'However, responsible consultants avoid making speculative claims like "guaranteed 100% returns". Real estate appreciation in hill stations is driven by road infrastructure improvements, growing domestic tourism, and scarcity.',
      'The best approach is to invest with a dual objective: personal family enjoyment as a vacation retreat combined with long-term capital preservation.'
    ]
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'How can I verify property ownership in Galiyat?',
    a: 'Property verification in KPK Galiyat requires inspecting the Fard Malkiat from the local revenue patwari, cross-checking the Inteqal (mutation) record, verifying Aks Shajra (revenue map), and ensuring no encumbrance with GDA (Galiyat Development Authority). We assist you in coordinating thorough independent verification.'
  },
  {
    q: 'What is the standard Marla size in Galiyat (KPK)?',
    a: 'In Khyber Pakhtunkhwa (including Abbottabad district & Galiyat), a standard revenue Marla is commonly calculated as 225 sq ft or 272 sq ft depending on the revenue mauza. We always specify the exact square footage of any land plot.'
  },
  {
    q: 'Are properties accessible during winter snowfall?',
    a: 'Main highways (Murree-Nathia Gali-Abbottabad) are regularly cleared of snow by local administration machinery. For secondary link roads, accessibility depends on gradient and distance from the main road. We guide you transparently on winter accessibility for every property.'
  },
  {
    q: 'Can I build a wooden cottage or brick/concrete house?',
    a: 'Both traditional timber/stone cottages and reinforced concrete framing with wood panelling are popular. We recommend using insulation, double-glazed windows, and sloped pitched roofs to handle mountain weather and snow loads.'
  },
  {
    q: 'How do I start an inquiry?',
    a: 'Simply click "Chat on WhatsApp" or message 03009881240 with your preferred location (e.g. Nathia Gali or Ayubia), property type, and budget. Our consultant will personally respond with relevant options.'
  }
];
