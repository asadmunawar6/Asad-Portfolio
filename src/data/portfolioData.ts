/**
 * Centralized Portfolio Content Configuration for Asad Munawar
 * All content, career history, links, and contact details are consolidated here.
 * Easy to update or customize without editing React components.
 */

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  keyAreas: string[];
}

export interface AcquisitionChannel {
  id: 'upwork' | 'fiverr' | 'linkedin' | 'email';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  workflowStages: {
    number: string;
    label: string;
    detail: string;
  }[];
  tools?: string[];
  url?: string;
}

export interface ApproachPhase {
  phase: string;
  title: string;
  description: string;
  focus: string;
}

export interface CampaignProject {
  id: string;
  number: string;
  title: string;
  category: string;
  overview: string;
  responsibilities: string[];
  tools: string[];
  qualitativeSummary: string;
  accent: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  isContract?: boolean;
  overlapNote?: string;
  summary: string;
  responsibilities: string[];
  toolsUsed: string[];
}

export interface ToolCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    purpose: string;
  }[];
}

export interface FreelanceProfile {
  id: string;
  title: string;
  platform: 'Upwork' | 'Freelancer.com' | 'Fiverr';
  platformIconKey: 'upwork' | 'freelancer' | 'fiverr';
  accountName: string;
  role: string;
  category: string;
  profileUrl: string;
  screenshotUrl?: string;
  screenshotCaption?: string;
  badge?: string;
  ratingBadge?: string;
  growthHighlight?: string;
  description: string;
  highlights: string[];
  skillsAndServices: string[];
  metricsNote: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    primaryRole: string;
    specialization: string;
    location: string;
    email: string;
    phone: string;
    headline: {
      line1: string;
      line2: string;
      line3: string;
    };
    heroBio: string;
    aboutParagraphs: string[];
  };
  highlights: {
    metric: string;
    isNumeric: boolean;
    numericValue?: number;
    suffix?: string;
    label: string;
    caption: string;
  }[];
  capabilities: CapabilityItem[];
  channels: AcquisitionChannel[];
  approach: ApproachPhase[];
  projects: CampaignProject[];
  freelanceProfiles: FreelanceProfile[];
  experience: ExperienceItem[];
  tools: ToolCategory[];
  education: {
    degree: string;
    institution: string;
    year: string;
    note: string;
  };
  links: {
    linkedInUrl?: string; // Optional: Only displayed if a verified URL is provided
    upworkUrl?: string;   // Optional
    fiverrUrl?: string;   // Optional
    resumePdfUrl?: string; // Optional: Only displayed if PDF exists
    portraitImageUrl?: string; // Optional: defaults to editorial placeholder
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Asad Munawar",
    monogram: "AM",
    primaryRole: "Business Development Manager",
    specialization: "B2B Business Development, Technology Sales, Outbound Lead Generation, Client Acquisition, and Strategic Business Growth",
    location: "Lahore, Pakistan",
    email: "asadmunawar366@gmail.com",
    phone: "+92 3496506231",
    headline: {
      line1: "Building Relationships.",
      line2: "Creating Opportunities.",
      line3: "Driving Growth."
    },
    heroBio: "I'm Asad Munawar, a Business Development Manager with 4.5+ years of experience in B2B client acquisition, strategic outreach, and technology-focused business growth. I connect business opportunities with the right solutions through targeted outreach, relationship building, and a structured approach to sales.",
    aboutParagraphs: [
      "I have built my career around identifying business opportunities, developing meaningful professional relationships, and helping technology-focused organizations expand their client acquisition efforts.",
      "My experience spans B2B outbound sales, LinkedIn outreach, email marketing, freelancing platforms, and business development strategy across software, AI, cloud, and digital services.",
      "From developing tailored proposals to managing outreach initiatives and leading a business development team, my focus has remained on understanding client needs, communicating value, and building lasting business relationships."
    ]
  },

  highlights: [
    {
      metric: "4.5+",
      isNumeric: true,
      numericValue: 4.5,
      suffix: "+",
      label: "Years of Experience",
      caption: "B2B Client Acquisition & Technology Sales"
    },
    {
      metric: "5",
      isNumeric: true,
      numericValue: 5,
      suffix: "",
      label: "BD Professionals Led",
      caption: "Cross-Channel Strategy & Pipeline Direction"
    },
    {
      metric: "AI & Cloud",
      isNumeric: false,
      label: "Tech Sector Focus",
      caption: "Enterprise Solution Selling & Commercial Growth"
    }
  ],

  capabilities: [
    {
      id: "b2b-bd",
      number: "01",
      title: "B2B Business Development",
      description: "Building structured approaches to identify business opportunities, engage prospective clients, support sales conversations, and develop commercial relationships.",
      keyAreas: ["Opportunity Discovery", "Pipeline Architecture", "Commercial Engagement", "Partner Ecosystems"]
    },
    {
      id: "lead-gen",
      number: "02",
      title: "Strategic Lead Generation",
      description: "Researching target markets, identifying relevant prospects, qualifying opportunities, and organizing lead generation activities around business objectives.",
      keyAreas: ["Market Segmentation", "ICP Profiling", "Data Verification", "Outbound Campaigning"]
    },
    {
      id: "sales-strategy",
      number: "03",
      title: "Sales Strategy & Negotiation",
      description: "Developing tailored proposals, positioning technology services, supporting commercial negotiations, and nurturing opportunities through the sales process.",
      keyAreas: ["Proposal Engineering", "Value-Proposition Framing", "Commercial Negotiation", "Contract Closure"]
    },
    {
      id: "solution-selling",
      number: "04",
      title: "Technology Solution Selling",
      description: "Communicating the business value of AI, automation, cloud, software development, and related technology services in collaboration with technical teams.",
      keyAreas: ["AI & Cloud Solutions", "SaaS & Full Stack", "Scope Articulation", "Cross-Functional Alignment"]
    },
    {
      id: "crm-pipeline",
      number: "05",
      title: "CRM & Pipeline Management",
      description: "Using CRM tools and structured follow-up processes to organize prospects, maintain visibility, and support relationship management.",
      keyAreas: ["Salesforce & HubSpot", "Sequence Automation", "Funnel Tracking", "Follow-Up Cadence"]
    },
    {
      id: "team-leadership",
      number: "06",
      title: "Team Leadership",
      description: "Leading a business development team, coordinating outreach activities, and supporting alignment between business development and technical stakeholders.",
      keyAreas: ["Team Mentorship (5 BDs)", "Workflow Standardization", "KPI Monitoring", "Technical Sync"]
    }
  ],

  channels: [
    {
      id: "upwork",
      title: "Upwork",
      subtitle: "Strategic Project Acquisition",
      tagline: "High-Intent Enterprise & Technical Bidding",
      description: "Experience in identifying relevant opportunities, preparing tailored proposals, coordinating project requirements, and converting prospective conversations into meaningful client relationships.",
      responsibilities: [
        "Relevant project opportunity research & market filtering",
        "Tailored proposal drafting addressing specific client pain points",
        "Strategic bidding on technical, SaaS, and AI/Cloud requirements",
        "Translating client briefs into actionable scope with engineers",
        "Structured interview coordination and relationship nurturing"
      ],
      workflowStages: [
        { number: "01", label: "Opportunity Discovery", detail: "Filtering verified briefs and high-ticket technical tenders" },
        { number: "02", label: "Tailored Proposal", detail: "Writing custom value propositions mapped to client objectives" },
        { number: "03", label: "Client Conversation", detail: "Consultative discovery calls and requirement qualification" },
        { number: "04", label: "Project Scoping", detail: "Syncing with engineering leads for milestones and delivery" },
        { number: "05", label: "Relationship Growth", detail: "Securing long-term repeat business and ongoing contracts" }
      ]
    },
    {
      id: "fiverr",
      title: "Fiverr",
      subtitle: "Service Discovery & Client Engagement",
      tagline: "Positioning & Direct Service Inquiries",
      description: "Experience using Fiverr to identify project opportunities, support service positioning, maintain relevant gig listings, respond to client inquiries, and support long-term client acquisition.",
      responsibilities: [
        "Gig listing optimization and strategic service positioning",
        "Rapid, professional inquiry responses and consultative triage",
        "Custom offer preparation reflecting technical scope and milestones",
        "Client relationship management and milestone sign-offs",
        "Coordinating with development teams to ensure scope accuracy"
      ],
      workflowStages: [
        { number: "01", label: "Service Visibility", detail: "Positioning specialized capabilities for inbound search" },
        { number: "02", label: "Client Inquiry", detail: "Prompt diagnostic intake assessing scope and feasibility" },
        { number: "03", label: "Requirement Discussion", detail: "Aligning technical expectations and timeline budgets" },
        { number: "04", label: "Business Opportunity", detail: "Issuing tailored custom scopes and closing engagements" }
      ]
    },
    {
      id: "linkedin",
      title: "LinkedIn Outreach",
      subtitle: "Connecting With Key Decision-Makers",
      tagline: "Account-Based Enterprise Networking",
      description: "Experience developing personalized B2B LinkedIn outreach strategies, researching decision-makers through Sales Navigator, and supporting client acquisition for technical solutions, including Google Cloud Platform services.",
      responsibilities: [
        "In-depth prospect research using LinkedIn Sales Navigator filters",
        "Targeting C-suite, VP, and Director-level technical leaders",
        "Crafting non-spammy, highly contextualized connection messages",
        "Positioning cloud architecture, scalability, and cost optimization",
        "Structured follow-up cadences and relationship nurturing"
      ],
      workflowStages: [
        { number: "01", label: "Account Research", detail: "Mapping ICP companies investing in cloud and digital services" },
        { number: "02", label: "Decision-Maker Identification", detail: "Filtering CTOs, VPs of Engineering, and Founders via Sales Nav" },
        { number: "03", label: "Personalized Outreach", detail: "Drafting relevant, peer-level conversation starters" },
        { number: "04", label: "Strategic Connection", detail: "Building consultative rapport without hard-selling" },
        { number: "05", label: "Structured Follow-Up", detail: "Nurturing interest into scheduled discovery discussions" }
      ]
    },
    {
      id: "email",
      title: "Email Outreach",
      subtitle: "Personalized, Structured & Intentional",
      tagline: "Multi-Touch Cold Inbound Pipeline",
      description: "Experience planning and optimizing B2B email campaigns through prospect segmentation, personalized email sequences, automation, A/B testing, and campaign performance review.",
      responsibilities: [
        "Prospect sourcing with Apollo and list verification via MillionVerifier",
        "Multi-step sequence automation using Instantly and Airscale",
        "Deep segmentation based on company tech stack and industry vertical",
        "Rigorous A/B testing on subject lines, angles, and calls to action",
        "CRM data enrichment and pipeline coordination in HubSpot"
      ],
      tools: ["Apollo", "Instantly", "Airscale", "MillionVerifier", "HubSpot", "Mailchimp"],
      workflowStages: [
        { number: "01", label: "Prospect Research", detail: "Curating verified B2B lists aligned with target criteria" },
        { number: "02", label: "Data Quality Check", detail: "Zero-bounce hygiene through verifier tools before sending" },
        { number: "03", label: "Personalization", detail: "Injecting relevant company triggers and custom value angles" },
        { number: "04", label: "Sequence Launch", detail: "Automated staggered cadence across warming inboxes" },
        { number: "05", label: "Follow-Up Cadence", detail: "Value-add follow-ups sharing insights and relevance" },
        { number: "06", label: "Optimization", detail: "Iterative refinement based on qualitative response signals" }
      ]
    }
  ],

  approach: [
    {
      phase: "01",
      title: "Understand the Market",
      description: "Research potential industries, customer needs, relevant opportunities, and competitive conditions before launching any outreach.",
      focus: "Market Analysis & Needs Assessment"
    },
    {
      phase: "02",
      title: "Identify the Right Prospects",
      description: "Use prospecting platforms, industry intelligence, and business research to pinpoint companies and relevant decision-makers.",
      focus: "ICP Definition & Decision-Maker Mapping"
    },
    {
      phase: "03",
      title: "Develop Personalized Outreach",
      description: "Create tailored messaging for different business needs, industries, and outreach channels without generic templates.",
      focus: "Value-Driven Message Architecture"
    },
    {
      phase: "04",
      title: "Start Meaningful Conversations",
      description: "Engage prospects respectfully across LinkedIn, email, and freelancing platforms focusing on dialogue over pitches.",
      focus: "Multi-Channel Consultative Dialogue"
    },
    {
      phase: "05",
      title: "Align Business Needs With Technical Solutions",
      description: "Collaborate closely with technical teams to understand client requirements and communicate relevant service offerings.",
      focus: "Technical Scoping & Solution Mapping"
    },
    {
      phase: "06",
      title: "Nurture the Relationship",
      description: "Maintain transparent communication, organize systematic follow-ups, and support longer-term business partnerships.",
      focus: "Ongoing Partnership & Client Retention"
    }
  ],

  projects: [
    {
      id: "project-email-ai-cloud",
      number: "01",
      title: "Email Marketing for AI & Cloud Solutions",
      category: "B2B Email Outreach / AI & Cloud Services",
      overview: "A targeted email outreach initiative focused on generating business opportunities for AI and cloud solutions through personalized messaging, automated sequences, and structured campaign optimization.",
      responsibilities: [
        "Developing end-to-end email outreach strategies tailored to enterprise tech buyers",
        "Using Apollo and Instantly for granular prospecting, list building, and delivery",
        "Preparing personalized email sequences highlighting relevant cloud and AI capabilities",
        "Segmenting lead lists by technical maturity, company size, and legacy infrastructure",
        "Conducting structured A/B testing on email content, value angles, and subject lines",
        "Tracking campaign engagement metrics and adjusting deliverability practices",
        "Reviewing qualitative responses to iteratively refine positioning and objection handling"
      ],
      tools: ["Apollo", "Instantly", "HubSpot", "Mailchimp"],
      qualitativeSummary: "Built an intentional outbound architecture communicating complex technical offerings (AI integration, cloud migration, data engineering) to senior executives through peer-level consultation rather than transactional sales pitches.",
      accent: "#C7A773"
    },
    {
      id: "project-linkedin-gcp",
      number: "02",
      title: "LinkedIn Outreach for Cloud Solutions",
      category: "LinkedIn Prospecting / Google Cloud Platform",
      overview: "A LinkedIn-based business development initiative focused on connecting with enterprise decision-makers and presenting Google Cloud Platform-related solutions.",
      responsibilities: [
        "Identifying relevant decision-makers using advanced LinkedIn Sales Navigator filters",
        "Developing personalized outreach messaging contextualized to corporate initiatives",
        "Communicating GCP-related business value, including scalability and operational agility",
        "Highlighting strategic themes such as infrastructure modernization and AI/ML workflows",
        "Managing multi-touch messaging sequences while maintaining human-first interactions",
        "Reviewing prospect engagement patterns to optimize message timing and tone",
        "Refining outreach approaches based on feedback from preliminary technical discussions"
      ],
      tools: ["LinkedIn Sales Navigator", "Outreach Automation Tools"],
      qualitativeSummary: "Established direct conversational bridges with technology stakeholders, translating intricate Google Cloud capabilities into clear commercial outcomes, infrastructure cost optimization, and strategic readiness.",
      accent: "#DFC498"
    }
  ],

  freelanceProfiles: [
    {
      id: "upwork-hassaniqbal-cms",
      title: "CRO & Growth Focused CMS Developer",
      platform: "Upwork",
      platformIconKey: "upwork",
      accountName: "Hassan I. · Upwork Profile",
      role: "Lead Business Developer & Client Acquisition",
      category: "CMS Development · Webflow · Shopify · WordPress · UI/UX",
      profileUrl: "https://upwork.com/freelancers/hassaniqbal?mp_source=share",
      screenshotUrl: "./assets/profiles/upwork_hassaniqbal.png",
      screenshotCaption: "Upwork Top Rated Plus Profile in CMS Development — Scaled from scratch to $80K+ in client revenue.",
      badge: "Top Rated Plus",
      ratingBadge: "100% Job Success",
      growthHighlight: "Scaled from $0 to $80K+",
      description: "Spearheaded full-cycle client acquisition, high-ticket proposal bidding, and commercial expansion for this CMS development profile on Upwork, scaling it from scratch ($0) to $80,000+ in booked client revenue. Positioned conversion-rate-optimized (CRO) and growth-driven CMS solutions across Webflow, Shopify, WordPress, and Figma UI/UX, securing top-tier contracts and earning Upwork's elite Top Rated Plus status (top 3% on the platform).",
      highlights: [
        "Earned Upwork's prestigious Top Rated Plus badge (top 3% on Upwork) with 100% Job Success",
        "Built and scaled account revenue from scratch ($0) to $80,000+ across 100+ projects",
        "Positioned specialized CMS development: Webflow, Shopify, WordPress & UI/UX Design",
        "Targeted US brands, venture-funded startups, and enterprise teams seeking revenue-focused websites",
        "Formulated tailored technical proposals and structured high-value milestone agreements"
      ],
      skillsAndServices: ["Webflow CMS", "Shopify Stores", "WordPress Development", "CRO Strategy", "UI/UX Design", "Enterprise Scoping"],
      metricsNote: "Top Rated Plus (Top 3% on Upwork) · 100% Job Success · Scaled from $0 to $80K+"
    },
    {
      id: "freelancer-webchapters",
      title: "Complete Solutions: Development, Design, Marketing",
      platform: "Freelancer.com",
      platformIconKey: "freelancer",
      accountName: "Muhammad Azeem @WebChapters",
      role: "Lead Business Developer & Account Growth",
      category: "Web Development · CMS Platforms · E-Commerce · UI/UX & SEO",
      profileUrl: "https://www.freelancer.com/u/webchapters",
      screenshotUrl: "./assets/profiles/freelancer_webchapters.png",
      screenshotCaption: "Freelancer.com Preferred Freelancer Account — 5.0★ Rating, 600 Reviews, Built from scratch to Top Tier.",
      badge: "Preferred Freelancer",
      ratingBadge: "5.0 ★ (600 Reviews)",
      growthHighlight: "Built from Scratch to 600+ Reviews",
      description: "Spearheaded full-cycle project acquisition, client negotiations, and commercial scaling for this profile on Freelancer.com from scratch. Positioned comprehensive end-to-end technical solutions spanning custom web development (PHP, Laravel, JS), CMS customization (WordPress, Shopify, Wix), e-commerce platforms, UI/UX design, and SEO services, earning the elite Preferred Freelancer badge and maintaining a flawless 5.0-star rating across 600 reviews.",
      highlights: [
        "Built and scaled the profile from scratch to an elite Preferred Freelancer program member",
        "Maintained a flawless 5.0 Star rating across 600 client reviews with 99% on-time delivery",
        "Positioned full-stack services: PHP/Laravel, WordPress, Shopify, Wix, Figma UI/UX & Website SEO",
        "Handled competitive tender bidding, client scope discovery, and milestone-based project awards",
        "Achieved 100% on-budget delivery and high repeat hire client loyalty"
      ],
      skillsAndServices: [
        "Responsive Web Dev",
        "WordPress & Shopify",
        "Laravel / PHP",
        "UI/UX Design",
        "Website SEO",
        "Tender Bidding",
        "Milestone Scoping"
      ],
      metricsNote: "Preferred Freelancer · 5.0★ Rating (600 Reviews) · Built from Scratch"
    },
    {
      id: "upwork-omara-ai",
      title: "AI & Machine Learning Automation Profile",
      platform: "Upwork",
      platformIconKey: "upwork",
      accountName: "Omar A. · Upwork Profile",
      role: "Lead Business Developer & Client Acquisition",
      category: "AI Automation · AI Agents · Chatbots · n8n · RAG · Voice AI",
      profileUrl: "https://upwork.com/freelancers/omara416?mp_source=share",
      screenshotUrl: "./assets/profiles/upwork_omara416.png",
      screenshotCaption: "Upwork Top Rated Profile in AI & Machine Learning — Scaled from scratch to $30K+ in booked contracts.",
      badge: "Top Rated",
      ratingBadge: "90% Job Success",
      growthHighlight: "Scaled from $0 to $30K+",
      description: "Spearheaded business development and client acquisition for this AI Automation profile on Upwork, building the account from scratch ($0) to $30,000+ in client revenue. Targeted enterprise clients seeking autonomous AI agents, voice AI solutions (Retell/ElevenLabs), RAG pipelines, and n8n workflow automations, earning Upwork's prestigious Top Rated badge.",
      highlights: [
        "Earned Upwork's prestigious Top Rated badge with a 90% Job Success Score",
        "Scaled account revenue from scratch ($0) to $30,000+ through strategic bidding",
        "Specialized in AI/ML solutions: AI Agents, Voice AI, Chatbots, RAG Pipelines & n8n",
        "Crafted high-converting technical proposals and led consultative discovery calls"
      ],
      skillsAndServices: ["AI Agents", "Voice AI", "RAG Pipelines", "n8n Automation", "Consultative Bidding", "Enterprise Scoping"],
      metricsNote: "Top Rated Status · Scaled from scratch to $30K+"
    },
    {
      id: "upwork-hassanabid-video",
      title: "Video Editor | Events · YouTube · Reels · TikTok · Podcasts",
      platform: "Upwork",
      platformIconKey: "upwork",
      accountName: "Hassan A. · Upwork Profile",
      role: "Lead Business Developer & Account Growth",
      category: "Video Editing · Post-Production · YouTube & Reels · Podcasts & Events",
      profileUrl: "https://www.upwork.com/freelancers/hassanabid?mp_source=share",
      screenshotUrl: "./assets/profiles/upwork_hassanabid.png",
      screenshotCaption: "Upwork Top Rated Profile in Video Editing — Scaled from zero to $10K+ with 100% Job Success across 33 jobs.",
      badge: "Top Rated",
      ratingBadge: "100% Job Success",
      growthHighlight: "Scaled from $0 to $10K+",
      description: "Spearheaded full-cycle client acquisition, proposal engineering, and account growth for this video editing profile on Upwork, scaling it from scratch ($0) to $10,000+ in booked client contracts. Positioned retention-focused, scroll-stopping video post-production across YouTube long-form, viral TikTok/Reels/Shorts, podcasts, and corporate events, earning Upwork's Top Rated badge with a flawless 100% Job Success Score across 33 completed projects.",
      highlights: [
        "Earned Upwork's prestigious Top Rated badge with a flawless 100% Job Success Score",
        "Scaled account revenue from zero ($0) to $10,000+ across 33 completed client projects",
        "Positioned end-to-end video editing: YouTube, TikTok/Reels, podcasts, webinars & wedding/events",
        "Formulated high-converting proposals emphasizing retention hooks, dynamic pacing, and visual storytelling",
        "Built strong repeat client relationships and secured consistent 5-star contract reviews"
      ],
      skillsAndServices: ["Video Editing", "YouTube & Socials", "TikTok & Reels", "Podcast Editing", "Retention Pacing", "Color & Audio FX"],
      metricsNote: "Top Rated Status · 100% Job Success · Scaled from $0 to $10K+ (33 Jobs)"
    }
  ],

  experience: [
    {
      id: "exp-visionerds",
      company: "Visionerds",
      role: "Business Developer Manager",
      period: "September 2024 — Present",
      isCurrent: true,
      summary: "Directing business development operations, managing a dedicated team of BD specialists, and architecting multi-channel acquisition funnels for technical and AI solutions.",
      responsibilities: [
        "Leading and mentoring a team of five business development professionals across daily operations",
        "Developing and executing comprehensive B2B sales and outreach strategies",
        "Driving business development for specialized AI, Machine Learning, and Cloud solutions",
        "Identifying strategic partnership opportunities and enterprise commercial engagements",
        "Overseeing multi-channel lead generation across LinkedIn, email marketing, and freelance platforms",
        "Deploying and optimizing sales tech stack: Apollo, Instantly, Sales Navigator, Airscale, MillionVerifier, and Salesforce",
        "Managing high-tier opportunities on Upwork and Fiverr with custom technical proposals",
        "Coordinating continuously with engineering and technical teams to ensure scope fidelity"
      ],
      toolsUsed: ["Apollo", "Instantly", "LinkedIn Sales Navigator", "Airscale", "MillionVerifier", "Salesforce", "Upwork", "Fiverr"]
    },
    {
      id: "exp-e1soi",
      company: "E1SOI",
      role: "Business Development Specialist (Contract)",
      period: "March 2024 — August 2024",
      isContract: true,
      overlapNote: "Concurrent contract engagement alongside Vital Steer focused specifically on CMS and outbound expansion",
      summary: "Contract-based engagement focused on CMS service acquisition, targeted email marketing campaigns, and platform opportunity development.",
      responsibilities: [
        "Leading targeted lead generation initiatives focused on Content Management Systems (CMS) and web platforms",
        "Planning and executing specialized email marketing campaigns to enterprise prospects",
        "Developing structured outreach strategies tailored to e-commerce and CMS clients",
        "Monitoring response rates and conducting ongoing campaign optimization",
        "Identifying and qualifying prospective opportunities across Upwork and Fiverr",
        "Collaborating closely with internal sales and technical teams for smooth hand-offs"
      ],
      toolsUsed: ["Email Outreach Platforms", "Upwork", "Fiverr", "CRM Systems"]
    },
    {
      id: "exp-vitalsteer",
      company: "Vital Steer",
      role: "Business Developer",
      period: "June 2023 — July 2024",
      summary: "Spearheaded Google Cloud Platform lead generation, multi-channel executive prospecting, and technical solution alignment.",
      responsibilities: [
        "Driving targeted lead generation specifically for Google Cloud Platform (GCP) solutions",
        "Conducting executive-level LinkedIn outreach and account-based relationship building",
        "Implementing email marketing and sequence automation for cloud migration prospects",
        "Executing strategic bidding and proposal drafting on Upwork for high-ticket contracts",
        "Fostering long-term client relationships and recurring project engagements",
        "Collaborating with cloud architects and technical leads to structure accurate scopes",
        "Conducting in-depth market and competitor research across cloud consulting spaces"
      ],
      toolsUsed: ["LinkedIn Sales Navigator", "Upwork", "Email Automation", "Market Research Tools"]
    },
    {
      id: "exp-wondercrafts",
      company: "WonderCrafts",
      role: "Associate Business Developer",
      period: "November 2021 — May 2023",
      summary: "Managed prospective client acquisition across freelance ecosystems, proposal generation, and technical delivery coordination for web and mobile development.",
      responsibilities: [
        "Active prospecting and lead identification across Upwork, Fiverr, and Freelancer",
        "Evaluating and identifying prospective web and mobile application development projects",
        "Drafting customized, technical proposals addressing specific client requirements",
        "Supporting service listing optimization and gig ranking strategies",
        "Managing client inquiries, initial discovery questions, and prompt response times",
        "Coordinating with engineering teams to confirm technical feasibility and delivery timelines",
        "Maintaining ongoing client communication to ensure satisfaction and repeat business"
      ],
      toolsUsed: ["Upwork", "Fiverr", "Freelancer", "Proposal Drafting", "Client Management"]
    }
  ],

  tools: [
    {
      category: "Prospecting & Lead Intelligence",
      description: "Target market research, ICP filtering, data enrichment, and email deliverability verification.",
      tools: [
        { name: "Apollo", purpose: "B2B database search, contact discovery, and account enrichment" },
        { name: "LinkedIn Sales Navigator", purpose: "Senior decision-maker mapping, Boolean searches, and intent signals" },
        { name: "Airscale", purpose: "Lead data extraction and prospecting workflow integration" },
        { name: "MillionVerifier", purpose: "Zero-bounce email hygiene and domain reputation protection" }
      ]
    },
    {
      category: "Outreach & Email Marketing",
      description: "Automated sequence delivery, warmups, multi-step cadences, and content A/B testing.",
      tools: [
        { name: "Instantly", purpose: "Multi-inbox cold outreach automation and warmup management" },
        { name: "HubSpot", purpose: "Inbound campaign workflows, contact tracking, and lifecycle stages" },
        { name: "Mailchimp", purpose: "Targeted broadcast newsletters and marketing communications" },
        { name: "LinkedIn Automation", purpose: "Touchpoint scheduling and structured connection workflows" }
      ]
    },
    {
      category: "Freelancing & Project Acquisition",
      description: "Global marketplace client acquisition, consultative proposal submission, and milestone management.",
      tools: [
        { name: "Upwork", purpose: "High-ticket project search, tailored proposal drafting, and client scoping" },
        { name: "Fiverr", purpose: "Service positioning, gig listing optimization, and custom offer negotiations" },
        { name: "Freelancer", purpose: "Project discovery and mobile/web development tender bidding" }
      ]
    },
    {
      category: "CRM & Pipeline Management",
      description: "Deal stage tracking, lead scoring, conversation logs, and cross-functional team alignment.",
      tools: [
        { name: "Salesforce", purpose: "Enterprise pipeline tracking, account history, and opportunity stages" },
        { name: "HubSpot CRM", purpose: "Contact management, activity logging, and follow-up alerts" }
      ]
    }
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of South Asia",
    year: "2023",
    note: "A computer science academic background that complements professional experience in business development across software and technology services."
  },

  links: {
    // Fill in verified URLs when provided. If left empty, buttons/links adapt gracefully.
    linkedInUrl: "",
    upworkUrl: "",
    fiverrUrl: "",
    resumePdfUrl: "",
    portraitImageUrl: "./assets/portrait_asad.png"
  }
};
