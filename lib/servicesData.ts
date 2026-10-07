export interface IncludedSolution {
  number: string;
  title: string;
  description: string;
  icon: string;
  faIcon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  faIcon: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  highlights: string[];
  includedTitle: string;
  includedSubtitle: string;
  solutions: IncludedSolution[];
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];
  whyChooseUsTitle: string;
  whyChooseUsSubtitle: string;
  whyChooseUsPoints: string[];
  heroImage: string;
  mainImage: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "furniture-decor-selection": {
    slug: "furniture-decor-selection",
    title: "Furniture & Decor Selection",
    subtitle: "What We Do",
    heading: "Create Beautiful Spaces with Carefully Curated Furniture & Decor",
    description:
      "Selecting furniture and decorative elements can be overwhelming. Our Furniture & Decor Selection service simplifies the process by helping you choose pieces that perfectly complement your lifestyle, architectural style, and functional requirements. From statement furniture and lighting fixtures to artwork, rugs, and accessories, we curate every detail to ensure your space feels cohesive, elegant, and uniquely yours.",
    highlights: [
      "Personalized furniture sourcing",
      "Decor styling & curation",
      "Color and material selection",
      "Space planning consultation",
      "Budget-conscious recommendations",
      "Vendor coordination",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Comprehensive Furniture & Decor Solutions",
    solutions: [
      {
        number: "01",
        title: "Furniture Selection",
        description: "Carefully curated furniture pieces that combine comfort, functionality, and timeless design.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-couch",
      },
      {
        number: "02",
        title: "Color & Material Curation",
        description: "Harmonious combinations of colors, fabrics, textures, and finishes to elevate your interior.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "03",
        title: "Lighting & Accessories",
        description: "Thoughtfully selected lighting, artwork, rugs, and decorative accents that complete the space.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-lightbulb",
      },
      {
        number: "04",
        title: "Space Planning",
        description: "Strategic furniture layouts that maximize flow, comfort, and functionality throughout the room.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-ruler-combined",
      },
      {
        number: "05",
        title: "Vendor Sourcing",
        description: "Access to trusted suppliers and premium brands to ensure quality, value, and reliability.",
        icon: "icofont-store",
        faIcon: "fa-solid fa-store",
      },
      {
        number: "06",
        title: "Final Styling",
        description: "Professional styling and finishing touches that create a polished, cohesive, and inviting atmosphere.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-star",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "From Vision to Beautifully Styled Spaces",
    processSteps: [
      {
        number: "01",
        title: "Consultation",
        description: "We discuss your style preferences, functional needs, lifestyle, and budget requirements.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-comments",
      },
      {
        number: "02",
        title: "Design Curation",
        description: "Our designers develop a cohesive furniture, color, material, and decor concept for your space.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "03",
        title: "Selection & Sourcing",
        description: "We carefully source furniture, lighting, artwork, textiles, and accessories from trusted suppliers.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-couch",
      },
      {
        number: "04",
        title: "Styling & Completion",
        description: "Final placement and styling bring every element together to create a polished interior.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-house",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Design Expertise Meets Practical Living",
    whyChooseUsPoints: [
      "Save time and avoid costly purchasing mistakes",
      "Access trusted furniture and decor suppliers",
      "Create a cohesive and professionally designed look",
      "Optimize comfort and functionality",
      "Achieve a timeless and personalized interior",
    ],
    heroImage: "/images/renders/render_010.jpg",
    mainImage: "/images/renders/render_012.jpg",
  },

  "concept-development": {
    slug: "concept-development",
    title: "Concept Development",
    subtitle: "What We Do",
    heading: "Transform Your Ideas into Inspiring Interior Design Concepts",
    description:
      "Concept Development is the starting point for creating exceptional spaces. We interpret your desires, lifestyle, and aesthetic preferences into a distinct design concept. Through spatial storytelling, visual mood boards, material swatches, and initial spatial layouts, we define the creative direction before moving into technical design and execution.",
    highlights: [
      "Custom mood board curation",
      "Spatial identity & design narrative",
      "Color scheme & material exploration",
      "Architectural style alignment",
      "Initial 3D conceptual visuals",
      "Comprehensive design strategy roadmap",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Tailored Concept Development Solutions",
    solutions: [
      {
        number: "01",
        title: "Visual Mood Boards",
        description: "Curated imagery, textures, and color samples defining the mood and aesthetic tone.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "02",
        title: "Spatial Narrative",
        description: "Defining a clear design identity that connects every room with visual harmony.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-lightbulb",
      },
      {
        number: "03",
        title: "Color Palette Strategy",
        description: "Selected color pairings and contrast schemes to evoke the desired atmosphere.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-eye",
      },
      {
        number: "04",
        title: "Material Exploration",
        description: "Tactile sample selections including woods, stones, metals, and luxury fabrics.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-layer-group",
      },
      {
        number: "05",
        title: "Concept 3D Previews",
        description: "Early-stage 3D renderings illustrating light, scale, and spatial relationships.",
        icon: "icofont-cube",
        faIcon: "fa-solid fa-cube",
      },
      {
        number: "06",
        title: "Design Roadmap",
        description: "A structured plan outlining priorities, specifications, and project milestones.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-list",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "Building a Solid Foundation for Your Space",
    processSteps: [
      {
        number: "01",
        title: "Discovery & Briefing",
        description: "Understanding your lifestyle, taste, functional goals, and architectural space.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-comments",
      },
      {
        number: "02",
        title: "Idea Generation",
        description: "Brainstorming themes, material palettes, and spatial arrangements.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "03",
        title: "Concept Presentation",
        description: "Presenting mood boards, material samples, and 3D visual concepts for your feedback.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-desktop",
      },
      {
        number: "04",
        title: "Refinement & Finalization",
        description: "Finetuning the approved concept into actionable guidelines for execution.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-house",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Strategic Vision Meets Creative Excellence",
    whyChooseUsPoints: [
      "Establish a clear visual direction before investing in materials",
      "Ensure seamless continuity across all interior spaces",
      "Blend functional space planning with inspiring aesthetics",
      "Avoid costly re-designs through early visualization",
      "Tailor every detail to your personal story and taste",
    ],
    heroImage: "/images/renders/render_020.jpg",
    mainImage: "/images/renders/render_025.jpg",
  },

  "renovation-space-planning": {
    slug: "renovation-space-planning",
    title: "Renovation & Space Planning",
    subtitle: "What We Do",
    heading: "Maximize Functionality & Spatial Flow with Expert Renovation Planning",
    description:
      "Effective space planning is essential for maximizing comfort, usability, and property value. Our Renovation & Space Planning service re-evaluates existing layouts, eliminates awkward proportions, and creates smart structural flow. Whether updating a single floor plan or overseeing a complete interior gut renovation, we optimize every square meter.",
    highlights: [
      "Architectural layout optimization",
      "Traffic flow & ergonomic analysis",
      "Custom cabinetry & storage design",
      "Structural alteration feasibility",
      "Electrical & lighting placement plans",
      "Turnkey renovation management",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Comprehensive Renovation & Planning Solutions",
    solutions: [
      {
        number: "01",
        title: "Layout Redesign",
        description: "Re-imagining room configurations to improve natural light, open flow, and accessibility.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-ruler-combined",
      },
      {
        number: "02",
        title: "Ergonomic Planning",
        description: "Designing functional pathways and comfortable clearances for daily living.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-couch",
      },
      {
        number: "03",
        title: "Custom Storage Systems",
        description: "Integrated wardrobes, built-in shelving, and concealed storage optimization.",
        icon: "icofont-box",
        faIcon: "fa-solid fa-box",
      },
      {
        number: "04",
        title: "Structural Feasibility",
        description: "Assessing wall removals, ceiling heights, and doorway expansions with engineers.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-building",
      },
      {
        number: "05",
        title: "Lighting & Electrical Plans",
        description: "Strategic placement of recessed lights, switches, fixtures, and power points.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-lightbulb",
      },
      {
        number: "06",
        title: "Renovation Execution",
        description: "Coordinating contractors, tradespeople, timelines, and quality oversight.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-wrench",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "Structured Renovation from Blueprint to Reality",
    processSteps: [
      {
        number: "01",
        title: "Site Survey & Measurement",
        description: "Laser-accurate measurements and structural assessment of existing conditions.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-ruler",
      },
      {
        number: "02",
        title: "Layout Options",
        description: "Developing multiple floor plan configurations tailored to your lifestyle.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "03",
        title: "Detailed Specs & Working Drawings",
        description: "Producing precise technical drawings for plumbing, electrical, and carpentry.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-ruler-pencil",
      },
      {
        number: "04",
        title: "On-Site Supervision",
        description: "Overseeing trade execution to ensure flawless adherence to design plans.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-house",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Optimize Every Meter for Premium Living",
    whyChooseUsPoints: [
      "Eliminate wasted space and improve room proportions",
      "Enhance natural light and indoor air circulation",
      "Seamlessly blend historical charm with modern convenience",
      "Ensure structural safety and building code compliance",
      "Increase total usable square footage and property value",
    ],
    heroImage: "/images/renders/render_040.jpg",
    mainImage: "/images/renders/render_045.jpg",
  },

  "residential-interior-design": {
    slug: "residential-interior-design",
    title: "Residential Interior Design",
    subtitle: "What We Do",
    heading: "Crafting Personal Sanctuaries Combining Comfort, Elegance & Function",
    description:
      "Your home is an extension of your life and personality. Our Residential Interior Design service delivers luxury interiors crafted around your daily routines, aesthetic desires, and comfort. From modern minimalist apartments to sprawling countryside villas, we provide end-to-end design, custom furnishings, and immaculate finishing touches.",
    highlights: [
      "Full-home interior design & styling",
      "Bespoke furniture & millwork design",
      "Luxury kitchen & bathroom design",
      "Custom window treatments & textiles",
      "Lighting design & ambiance creation",
      "Turnkey white-glove project delivery",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Complete Residential Interior Design Solutions",
    solutions: [
      {
        number: "01",
        title: "Living & Bedroom Interiors",
        description: "Relaxing, sophisticated living spaces tailored for rest, entertainment, and family life.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-bed",
      },
      {
        number: "02",
        title: "Gourmet Kitchen Design",
        description: "High-end cabinetry, stone countertops, ergonomic layouts, and premium appliances.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-utensils",
      },
      {
        number: "03",
        title: "Spa-Inspired Bathrooms",
        description: "Luxurious vanities, custom tilework, frameless glass showers, and ambient lighting.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-bath",
      },
      {
        number: "04",
        title: "Bespoke Millwork & Joinery",
        description: "Custom walk-in closets, feature wall paneling, built-in bars, and media units.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-hammer",
      },
      {
        number: "05",
        title: "Textiles & Soft Furnishings",
        description: "Custom drapery, velvet upholstery, area rugs, and accent cushions.",
        icon: "icofont-layers",
        faIcon: "fa-solid fa-layer-group",
      },
      {
        number: "06",
        title: "Turnkey Installation",
        description: "Complete white-glove installation, placement, styling, and final handover.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-key",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "Bespoke Design Journey Tailored to Your Family",
    processSteps: [
      {
        number: "01",
        title: "Consultation & Lifestyle Assessment",
        description: "Understanding your habits, aesthetic tastes, family dynamics, and budget.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-comments",
      },
      {
        number: "02",
        title: "Schematic Design & 3D Visualization",
        description: "Creating spatial layouts, mood boards, and photorealistic 3D room renders.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-cube",
      },
      {
        number: "03",
        title: "Sourcing & Procurement",
        description: "Ordering custom furniture, lighting, tiles, fixtures, and imported decor.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-couch",
      },
      {
        number: "04",
        title: "White-Glove Setup",
        description: "Delivering, placing, and styling every piece to perfection for move-in readiness.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-house",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Uncompromising Quality & Personalized Elegance",
    whyChooseUsPoints: [
      "Custom designs crafted uniquely for your taste—never template-based",
      "Access to exclusive European and global luxury furniture makers",
      "Seamless management of contractors, vendors, and schedules",
      "Uncompromising attention to detail in joinery and finishes",
      "Stress-free turnkey experience from initial sketch to final pillow",
    ],
    heroImage: "/images/renders/render_060.jpg",
    mainImage: "/images/renders/render_068.jpg",
  },

  "visual-design-rendering": {
    slug: "visual-design-rendering",
    title: "Visual Design Rendering",
    subtitle: "What We Do",
    heading: "Photorealistic 3D Visualizations Bringing Future Spaces to Life",
    description:
      "Visualize your interior project with crystal clarity before making financial commitments. Our Visual Design Rendering service creates true-to-life 3D renders, material representations, and lighting simulations. Experience how light, color, scale, and texture interact in your room before ordering materials or beginning construction.",
    highlights: [
      "Photorealistic 3D interior renders",
      "Material texture & finish mapping",
      "Natural & artificial lighting studies",
      "360-degree virtual room walkthroughs",
      "Furniture & decor spatial preview",
      "High-definition presentation imagery",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Advanced 3D Visualization Solutions",
    solutions: [
      {
        number: "01",
        title: "3D Architectural Modeling",
        description: "Precision 3D digital replicas of room geometry, doors, windows, and features.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-cube",
      },
      {
        number: "02",
        title: "Material & Texture Mapping",
        description: "Accurate physical rendering of wood grains, polished marble, glass, and fabrics.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-layer-group",
      },
      {
        number: "03",
        title: "Lighting Simulation",
        description: "Simulating daylight orientation, sunset warmth, and artificial lamp illumination.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-sun",
      },
      {
        number: "04",
        title: "Virtual 360 Walkthroughs",
        description: "Interactive panoramic views allowing full exploration of spatial relationships.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-video",
      },
      {
        number: "05",
        title: "Furniture Layout Testing",
        description: "Swapping furniture configurations, scales, and finishes in real-time visuals.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-couch",
      },
      {
        number: "06",
        title: "High-Res Presentation Graphics",
        description: "Publication-grade renders suitable for investor, client, or personal review.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-image",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "Precision 3D Rendering Pipeline",
    processSteps: [
      {
        number: "01",
        title: "Floor Plan & CAD Import",
        description: "Importing architectural blueprints, elevation plans, and dimensions into 3D software.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-file-code",
      },
      {
        number: "02",
        title: "Digital Geometry & Modeling",
        description: "Building 3D structures, custom joinery, doors, windows, and architectural moldings.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-cube",
      },
      {
        number: "03",
        title: "Texturing & Light Setup",
        description: "Applying high-resolution physical material maps and configuring lighting fixtures.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-lightbulb",
      },
      {
        number: "04",
        title: "High-Def Raytrace Render",
        description: "Rendering high-resolution final images with global illumination and post-processing.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-camera",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Confidence Through Ultra-Realistic Previews",
    whyChooseUsPoints: [
      "Eliminate design uncertainty before purchasing materials",
      "Experiment with bold color and material options risk-free",
      "Ensure precise furniture scale and room clearances",
      "Streamline contractor communication with clear visual targets",
      "Accelerate decision-making and project approval cycles",
    ],
    heroImage: "/images/renders/render_100.jpg",
    mainImage: "/images/renders/render_102.jpg",
  },

  "commercial-interior-design": {
    slug: "commercial-interior-design",
    title: "Commercial Interior Design",
    subtitle: "What We Do",
    heading: "High-Performance Commercial Spaces Built for Brand Impact & Productivity",
    description:
      "Commercial interior design shapes how customers experience your brand and how teams collaborate. Our Commercial Interior Design service creates strategic, durable, and visually captivating environments. From modern corporate headquarters and tech offices to boutique retail showrooms and luxury hospitality venues, we blend brand identity with functionality.",
    highlights: [
      "Corporate office layout & space strategy",
      "Retail store & boutique interior design",
      "Hospitality, cafe & restaurant design",
      "Ergonomic workplace & acoustic planning",
      "Durable commercial-grade material selection",
      "Building compliance & accessibility coordination",
    ],
    includedSubtitle: "What's Included",
    includedTitle: "Strategic Commercial Design Solutions",
    solutions: [
      {
        number: "01",
        title: "Corporate Workspaces",
        description: "Flexible office layouts featuring open collaboration zones, private pods, and boardrooms.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-building",
      },
      {
        number: "02",
        title: "Retail & Showroom Interiors",
        description: "Immersive customer journeys, strategic product displays, and branded lighting.",
        icon: "icofont-store",
        faIcon: "fa-solid fa-store",
      },
      {
        number: "03",
        title: "Hospitality & Dining Venues",
        description: "Atmospheric dining spaces, custom bar setups, and durable seating solutions.",
        icon: "icofont-lamp-light",
        faIcon: "fa-solid fa-utensils",
      },
      {
        number: "04",
        title: "Acoustic & Lighting Control",
        description: "Acoustic wall paneling, sound-dampening ceilings, and glare-free task lighting.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-volume-high",
      },
      {
        number: "05",
        title: "Commercial Material Selection",
        description: "High-traffic floorings, stain-resistant fabrics, and fire-rated wall finishes.",
        icon: "icofont-ruler-pencil",
        faIcon: "fa-solid fa-shield",
      },
      {
        number: "06",
        title: "Compliance & Safety",
        description: "Ensuring layout compliance with fire safety, ADA accessibility, and egress codes.",
        icon: "icofont-star",
        faIcon: "fa-solid fa-file-contract",
      },
    ],
    processSubtitle: "Our Process",
    processTitle: "Results-Driven Commercial Project Management",
    processSteps: [
      {
        number: "01",
        title: "Brand & Operational Briefing",
        description: "Analyzing your business goals, brand values, employee workflow, and target clients.",
        icon: "icofont-speech-comments",
        faIcon: "fa-solid fa-comments",
      },
      {
        number: "02",
        title: "Space Strategy & Test Fits",
        description: "Developing floor plans, occupancy calculations, and zone allocations.",
        icon: "icofont-paint-brush",
        faIcon: "fa-solid fa-palette",
      },
      {
        number: "03",
        title: "Commercial Specs & Bidding",
        description: "Preparing comprehensive tender documentation, finishes schedules, and specs.",
        icon: "icofont-chair",
        faIcon: "fa-solid fa-file-invoice",
      },
      {
        number: "04",
        title: "Fitout Supervision & Handover",
        description: "Managing contractors to ensure on-time, on-budget delivery and flawless finish.",
        icon: "icofont-home",
        faIcon: "fa-solid fa-house",
      },
    ],
    whyChooseUsSubtitle: "Why Choose Us",
    whyChooseUsTitle: "Transform Spaces into Powerful Business Assets",
    whyChooseUsPoints: [
      "Enhance workplace productivity, employee retention, and well-being",
      "Reinforce brand identity through physical interior architecture",
      "Optimize customer conversion in retail and hospitality spaces",
      "Select commercial-grade materials built for intense daily traffic",
      "Deliver projects strictly on time and within agreed budget parameters",
    ],
    heroImage: "/images/renders/render_140.jpg",
    mainImage: "/images/renders/render_150.jpg",
  },
};
