import imgLeave1 from '../assets/projects/leave-absence-1.png';
import imgLeave2 from '../assets/projects/leave-absence-2.png';
import imgSolutions1 from '../assets/projects/solutions-portal-1.png';
import imgSolutions2 from '../assets/projects/solutions-portal-2.png';
import imgObservability1 from '../assets/projects/observability-1.png';
import imgObservability2 from '../assets/projects/observability-2.png';
import imgEmbeddedFinance1 from '../assets/projects/embedded-finance-1.png';
import imgEmbeddedFinance2 from '../assets/projects/embedded-finance-2.png';
import imgIAM1 from '../assets/projects/iam-1.png';
import imgIAM2 from '../assets/projects/iam-2.png';
import imgDataModeling1 from '../assets/projects/data-modeling-1.png';
import imgDataModeling2 from '../assets/projects/data-modeling-2.png';
import imgClinicalQuality1 from '../assets/projects/clinical-quality-1.png';
import imgClinicalQuality2 from '../assets/projects/clinical-quality-2.png';
import imgMedicalRecord1 from '../assets/projects/medical-record-1.png';
import imgMedicalRecord2 from '../assets/projects/medical-record-2.png';
import imgSalesforce1 from '../assets/projects/salesforce-ppa-1.png';
import imgSalesforce2 from '../assets/projects/salesforce-ppa-2.png';
import imgClinicalTrial1 from '../assets/projects/clinical-trial-1.png';
import imgClinicalTrial2 from '../assets/projects/clinical-trial-2.png';
import imgEharmony1 from '../assets/projects/eharmony-1.png';
import imgEharmony2 from '../assets/projects/eharmony-2.png';
import imgGetcraft1 from '../assets/projects/getcraft-1.png';
import imgGetcraft2 from '../assets/projects/getcraft-2.png';
import imgNinjaVan1 from '../assets/projects/ninja-van-1.png';
import imgNinjaVan2 from '../assets/projects/ninja-van-2.png';
import imgURLogin1 from '../assets/projects/united-rentals-login-1.png';
import imgURLogin2 from '../assets/projects/united-rentals-login-2.png';
import imgURCheckout1 from '../assets/projects/united-rentals-checkout-1.png';
import imgURCheckout2 from '../assets/projects/united-rentals-checkout-2.png';

export const industries = [
  'All',
  'Healthcare',
  'Financial Services',
  'Insurance',
  'Equipment Rental',
  'Logistics',
  'Online Marketplace',
  'Pharma',
  'Consumer',
  'Internal Tools',
];

export const categories = [
  'All',
  'UX Strategy',
  'UX Design',
  'UX Research',
  'Product Design',
  'UX Architecture',
];

export const projects = [
  {
    id: 1,
    images: [imgLeave1, imgLeave2],
    title: 'Modernizing the Leave of Absence Member Experience',
    industry: 'Insurance',
    categories: ['UX Design', 'Product Design'],
    role: 'UX Designer',
    summary:
      'Partnered with product, business, and operation teams to redesign the Leave of Absence experience for employees managing disability, Paid Family Medical Leave, and workplace absence programs.',
    details: [
      'Led UX design for leave requests, time tracking, status updates, payments, and return-to-work flows',
      'Simplified complex claims and leave workflows into a clearer, more connected member experience',
      'Worked closely with product, business, and ops teams to align user needs and technical constraints',
      'Created scalable UI patterns and experience frameworks supporting multiple insurance and absence products',
      'Designed intuitive, user-friendly workflows for highly regulated and operationally complex experiences',
    ],
    approach:
      'Used a design-first approach with AI-accelerated prototyping to clarify requirements early, simplify complex workflows, and deliver scalable solutions within tight timelines.',
    metrics: [],
  },
  {
    id: 2,
    images: [imgSolutions1, imgSolutions2],
    title: 'Bridging Visibility, Governance, and Speed for Client-Ready Solutions',
    industry: 'Internal Tools',
    categories: ['UX Design', 'UX Strategy'],
    role: 'UX / UI Designer',
    summary:
      'Designed a modern, governed Solutions Portal that centralizes content, improves freshness, and enables account leads to prep for client conversations quickly and confidently.',
    details: [
      'Replaced a buried library and manual tracker with a modern portal with featured solutions and instant industry filtering',
      'Cleaned and validated the solution inventory, added ownership, and tied assets to version-controlled sources',
      'Account leads can now pull relevant, client-specific solutions in minutes with concise summaries and quick links',
      'Added SME tagging, comments, and cross-solution linking to improve alignment and accelerate reuse',
    ],
    approach:
      'Led experience strategy, defined the vision and structure, architected intuitive industry filters, detail pages, and scalable UI patterns.',
    metrics: [],
  },
  {
    id: 3,
    images: [imgObservability1, imgObservability2],
    title: 'Bridging Observability and Reliability Gap for Error Free Applications',
    industry: 'Financial Services',
    categories: ['UX Strategy', 'UX Architecture'],
    role: 'UX Strategy & UX Architect',
    summary:
      'Elevated an engineering resiliency platform to unify system observability and application reliability. Built for insight seekers and builder-fixers, delivering a seamless, user-centric experience.',
    details: [
      'Launched weekly design office hours, driving developer adoption of UX/UI best practices',
      'Led design discovery with tech leads to simplify workflows and prevent scope creep',
      'Built a collaborative design roadmap to align teams on strategic goals',
      'Co-led user empathy interviews, providing insights that shaped design decisions',
      'Contributed to standardized design patterns ensuring consistent UX across platforms',
    ],
    approach:
      'Drove adoption and consistency through weekly office hours and standardized patterns, while streamlining delivery through design discovery with tech leads.',
    metrics: [
      { value: '+104%', label: 'Lift in Unique Users' },
      { value: '6 → 35', label: 'Risks Closed' },
    ],
  },
  {
    id: 4,
    images: [imgEmbeddedFinance1, imgEmbeddedFinance2],
    title: 'Embedded Finance: Strategic Product Discovery & User Onboarding',
    industry: 'Financial Services',
    categories: ['UX Strategy', 'UX Architecture'],
    role: 'UX Strategy & UX Architect',
    summary:
      'Undertaken in Product Discovery for an early-stage Card Commercialization project, establishing an embedded finance platform for external eCommerce merchants.',
    details: [
      'Delivered an End-to-End API integration process flow from Enterprise sandbox to Production',
      'Provided Archetypes, Journey Maps, and process flows to guide proof of concept direction',
      'Used design stimuli in stakeholder interviews to solidify the proof of concept',
      'Proof of concept using user flows, illustrative design, journey maps, and interactive prototypes',
    ],
    approach:
      'Partnered with product executives, business analysts, and technical product owners to assess product-market fit through various assessment and research activities.',
    metrics: [],
  },
  {
    id: 5,
    images: [imgIAM1, imgIAM2],
    title: 'Embedded Finance: Identity & Access Management (IAM)',
    industry: 'Financial Services',
    categories: ['UX Strategy', 'Product Design'],
    role: 'UX Strategy & Product Designer',
    summary:
      'Focused on identity, access, and authentication — defining how merchants securely register, verify their identity, and interact with the platform under enterprise security constraints.',
    details: [
      'Defined end-to-end IAM User Flows mapping merchant identification and platform onboarding',
      'Architected a structured Authentication Information Architecture for pre- and post-login boundaries',
      'Reduced onboarding friction by enabling recovery instead of re-registration',
      'Prevented duplicate accounts through early identity detection',
      'Developed a high-fidelity Security Component Library for trust-centric authentication tasks',
    ],
    approach:
      'Led end-to-end IAM experience design, partnering with Product to define authentication rules, states, and edge cases. Collaborated with Security, Risk, and Compliance for regulatory alignment.',
    metrics: [],
  },
  {
    id: 6,
    images: [imgDataModeling1, imgDataModeling2],
    title: 'Optimizing Data Modeling Experience',
    industry: 'Financial Services',
    categories: ['UX Research', 'UX Design'],
    role: 'UX Research & UX Design',
    summary:
      'Improved an existing Data Modeling platform used by Data Analysts and Modelers, aiming to provide reliable data output and reduce reliance on a third-party platform.',
    details: [
      'Optimized the Data Modeling Hub based on usability interview insights from data analysts, modelers, and SMEs',
      'Addressed key pain points by simplifying data attribute reviews and modification for modelers',
      'Streamlined new attribute requests for analysts',
      'Conducted end-to-end usability research from planning, interviews with eight stakeholders, synthesizing and ideating',
    ],
    approach:
      'Ensured alignment in understanding business context, product requirements, and user needs by reviewing prior research and service blueprints. Developed high-fidelity wires grounded from previous research for usability testing.',
    metrics: [],
  },
  {
    id: 7,
    images: [imgClinicalQuality1, imgClinicalQuality2],
    title: 'Enhanced Efficiency by Revamping the Clinical Quality Tool Experience',
    industry: 'Healthcare',
    categories: ['UX Architecture', 'UX Design'],
    role: 'Lead UX Architect',
    summary:
      'Transformed the Clinical Quality team\'s work by eliminating manual, time-consuming processes and introducing a streamlined digital solution powered by automation and a modern web experience.',
    details: [
      'Operated under Large-Scale-Scrum (LeSS) model',
      'Assessed current state and engaged stakeholders to identify processes, challenges, and opportunities',
      'Reframed user and system processes using service blueprints to guide design strategy',
      'Designed screens with existing design system and contributed new standardized components',
      'Applied lean UX method and conducted frequent user-testing in 2-week cycles',
    ],
    approach:
      'Grounded in systems thinking and deeply involved in product discovery, regularly engaging with business stakeholders and applying Lean UX principles to continuously test and refine designs with end users.',
    metrics: [
      { value: '85%+', label: 'Reduction in Case Intake Time' },
      { value: '5+', label: 'Ease of Use Rating' },
    ],
  },
  {
    id: 8,
    images: [imgMedicalRecord1, imgMedicalRecord2],
    title: 'Improving Turnaround Time: Streamlining Medical Record Submission',
    industry: 'Healthcare',
    categories: ['UX Design', 'UX Strategy'],
    role: 'Lead UX Designer',
    summary:
      'Revolutionized how Clinical Quality and Data Control teams manage medical records, addressing inefficiencies and offering a streamlined, digital solution.',
    details: [
      'Assessed current state and engaged stakeholders to identify challenges and opportunities',
      'Reframed user and system processes using service blueprints to guide design strategy',
      'Designed screens with existing design system and contributed new standardized components',
      'Collaborated cross-functionally with product and tech teams to enhance discovery and delivery',
    ],
    approach:
      'Conducted research and design to meet a 30-day turnaround time for case completion, reducing the average from 14 days for receiving records.',
    metrics: [
      { value: '13%', label: 'Adoption Rate' },
      { value: '25k', label: 'Pages Processed' },
      { value: '3-day', label: 'Reduction in Completion Time' },
    ],
  },
  {
    id: 9,
    images: [imgSalesforce1, imgSalesforce2],
    title: 'Salesforce: Pricing Process Automation',
    industry: 'Equipment Rental',
    categories: ['UX Architecture', 'UX Strategy'],
    role: 'UX Architect & UX Strategy',
    summary:
      'Designed the Pricing Process Automation tool shift from legacy platform to Salesforce, focusing on Price Renewal, Extension, and Cancelation for Sales teams, Managers, and Admins.',
    details: [
      'Optimized price renewal and extension workflows for sales team editing and submission',
      'Improved notifications and approval steps for managers with comprehensive admin overview',
      'Refined design concept using functional flows to foster cross-functional team alignment',
      'Balanced out-of-the-box Salesforce standards with custom solutions within tight deadlines',
    ],
    approach:
      'Spent time immersing in internal documentation, developed User-Task Flows, wireframes, and prototypes, while maintaining proactive weekly meetings with development team and SMEs.',
    metrics: [],
  },
  {
    id: 10,
    images: [imgClinicalTrial1, imgClinicalTrial2],
    title: 'Building an End-to-End Digital Clinical Trial Recruitment Platform',
    industry: 'Pharma',
    categories: ['UX Design', 'UX Architecture'],
    role: 'UX Architect & UX Strategy',
    summary:
      'Created a single digital platform for clinical trial participants, merging multiple online resources to make it easy for info seekers to find relevant trials and sign up.',
    details: [
      'Streamlined trial discovery with modern search, filter, and sign-up approach across multiple pages',
      'Revamped educational content blending videos, images, illustrations, and interactive elements',
      'Enhanced user experience with distinct visual story and branding, setting it apart from competitors',
      'Developed proto-personas and journey maps to guide the MVP roadmap',
      'Designed user flows and interactive prototypes to support usability interviews with 20 participants',
    ],
    approach:
      'Collaborated with SMEs and Marketing Stakeholders, building upon extensive existing research as a baseline to build a feature roadmap.',
    metrics: [
      { value: '23%', label: 'Avg Page View' },
      { value: '60%', label: 'Click-Thru Rate' },
    ],
  },
  {
    id: 11,
    images: [imgEharmony1, imgEharmony2],
    title: 'Reimagining First Connections: "Makes and Breaks" Chat Feature',
    industry: 'Consumer',
    categories: ['UX Design', 'Product Design'],
    role: 'UX/UI Designer',
    summary:
      'Designed a chat feature that helps users accelerate compatibility discovery by surfacing key values and preferences early in the conversation through structured yet playful prompts.',
    details: [
      'Partnered closely with product and design peers to align on goals and success metrics',
      'Ran a competitor audit and mapped current user flows to identify friction points',
      'Designed and iterated wireframes from low- to high-fidelity, following mobile-first principles',
      'Delivered segmented designs for A/B testing to compare performance of old vs. new user experience',
    ],
    approach:
      'Worked with the product manager and design team to rethink early-stage conversations, helping users quickly find shared values or dealbreakers — making it easier to decide whether to move forward or move on.',
    metrics: [],
  },
  {
    id: 12,
    images: [imgGetcraft1, imgGetcraft2],
    title: 'Simplifying Creative Collaboration: Chat Feature for GetCraft',
    industry: 'Online Marketplace',
    categories: ['UX Design', 'Product Design'],
    role: 'Lead UX Designer',
    summary:
      'Built a premium marketplace chat tool to streamline communication, feedback, and work submissions between clients and freelance creators — all within the platform.',
    details: [
      'Facilitated Design Sprint with Product, Tech and Design',
      'Partnered closely with one of the founders to align the feature with business goals and long-term vision',
      'Collaborated with the product manager and UX designer to shape the experience and define key flows',
      'Ran usability testing with real users to validate assumptions and uncover pain points',
    ],
    approach:
      'Led the design for a new chat feature aimed at improving collaboration between clients and freelance creators. The goal was to streamline communication, enable quicker feedback loops, and support project delivery.',
    metrics: [],
  },
  {
    id: 13,
    images: [imgNinjaVan1, imgNinjaVan2],
    title: "Optimized Delivery Driver's Experience for Parcel Pick up and Drop Off",
    industry: 'Logistics',
    categories: ['UX Research', 'UX Design'],
    role: 'UX Research & UX Design',
    summary:
      'Partnered with a ride-sharing delivery app to guarantee a seamless pick-up and drop-off experience for a same-day delivery pilot, identifying potential issues before initial release.',
    details: [
      'Secured partnerships where smooth delivery played a significant role in collaboration success',
      'Detected usability issues through driver participation in mock parcel pick-up and drop-off scenarios',
      'Developed usage metrics for tracking usability improvements and facilitating a smoother experience',
      'Used contextual inquiry to identify usability issues within the driver mobile app interfaces',
    ],
    approach:
      'Collaborated closely with Product Owners and drivers to conduct in-person feature tests and mock parcel pickup and drop-off scenarios, utilizing Contextual Inquiry methods for UX Research.',
    metrics: [],
  },
  {
    id: 14,
    images: [imgURLogin1, imgURLogin2],
    title: 'Boosting User Engagement: Amplifying Login & Registration Modal',
    industry: 'Equipment Rental',
    categories: ['UX Design', 'Product Design'],
    role: 'UX/UI Design',
    summary:
      'Redesigned the legacy sign-in and registration modal to highlight precise location and equipment availability, aiming to reduce catalog page drop-offs for newcomers.',
    details: [
      'Revamped the legacy sign-in/registration modal, accentuating benefits and facilitating simpler user interaction',
      'Achieved a notable boost in loading performance below 2.5 seconds on mobile (LCP metric)',
      'Saw an increase in modal utilization and sign-ups after about 2 months',
      'Initiated early dialogues with data analysts to analyze drop rates and identify affected pages',
    ],
    approach:
      'Collaborated closely with the product owner and analytics team to grasp context requirements and analyze existing data, laying a solid foundation for the successful revamp.',
    metrics: [
      { value: '2.3s', label: 'Load Speed on Mobile (LCP)' },
    ],
  },
  {
    id: 15,
    images: [imgURCheckout1, imgURCheckout2],
    title: 'Online Checkout Experience Competitive Analysis',
    industry: 'Equipment Rental',
    categories: ['UX Research', 'UX Strategy'],
    role: 'UX Research',
    summary:
      'Conducted a comprehensive competitive analysis to optimize the online checkout experience, including opportunities for insurance, repair services, and discounted equipment purchases.',
    details: [
      'Effectively pinpointed strategies employed to enhance upselling opportunities during checkout',
      'Recognized impactful checkout features that streamline the process and boost conversion rates',
      'Findings serve as a valuable benchmark for shaping future roadmaps and backlogs',
      'Conducted thorough secondary research and audit on previous qualitative research',
    ],
    approach:
      'Partnered with product stakeholders to understand business needs and conducted a comprehensive analysis of direct and non-direct competitors, focusing on their checkout experience.',
    metrics: [],
  },
];
