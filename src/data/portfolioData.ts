import { Project, AIExplorationItem, Skill, RoadmapItem, JourneyMilestone, TechTool } from '../types/portfolio';

// Vite-compatible direct image imports for production builds
import prepwiseImg from '../assets/images/prepwise_ai_study_1793984810402.jpg';
import uniassistImg from '../assets/images/uniassist_nlp_vectors_1793984810328.jpg';
import buildtrackImg from '../assets/images/buildtrack_ai_structure_1793984811278.jpg';
import agroflowImg from '../assets/images/agroflow_ai_biosystem_1793984811053.jpg';
import heroNeuralCoreImg from '../assets/images/hero_neural_core_1793984808273.jpg';
import rahabPortraitImg from '../assets/images/rahab_portrait.jpg';

export const PERSONAL_INFO = {
  name: 'RAHAB ASIF',
  role: 'AI ENGINEER | PYTHON DEVELOPER',
  tagline: 'Building Intelligent Solutions. Creating Impact Through AI.',
  bioLead:
    'I am Rahab Asif, an AI Engineer and Python Developer focused on understanding intelligent systems and building practical AI-powered solutions.',
  bioExtended:
    'Currently pursuing a BS in Artificial Intelligence, I channel my enthusiasm into rigorous hands-on software development, machine learning architectures, and generative AI systems. Rather than viewing artificial intelligence merely as theoretical algorithms, I approach it as an engineering discipline dedicated to solving concrete problems, optimizing real-world workflows, and creating intuitive user experiences.',
  education: 'BS in Artificial Intelligence (In Progress)',
  socials: {
    linkedin: 'https://www.linkedin.com/in/rahab-asif-026a80433/',
    github: 'https://github.com/rahabasif-ai',
    email: 'rahabasif789@gmail.com',
  },
  heroImage: heroNeuralCoreImg,
  portraitImage: rahabPortraitImg,
};

export const AI_EXPLORATION_AREAS: AIExplorationItem[] = [
  {
    id: 'ai-fundamentals',
    title: 'Artificial Intelligence',
    tagline: 'Building systems that perform intelligent tasks.',
    description:
      'Designing algorithmic frameworks capable of reasoning, pattern recognition, and autonomous problem-solving across structured and unstructured domains.',
    practicalApplications: [
      'Heuristic search & optimization',
      'Knowledge representation',
      'Autonomous decision agents',
    ],
    icon: 'Brain',
    gradient: 'from-[#3987FF] to-[#35D9E8]',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    tagline: 'Exploring how systems learn from data.',
    description:
      'Developing statistical predictive models, supervised/unsupervised pipelines, and neural network foundations that extract predictive insights from complex datasets.',
    practicalApplications: [
      'Supervised regression & classification',
      'Feature engineering & dimensionality reduction',
      'Model validation & performance tuning',
    ],
    icon: 'Cpu',
    gradient: 'from-[#8957FF] to-[#3987FF]',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    tagline: 'Exploring AI systems that generate useful content.',
    description:
      'Harnessing state-of-the-art diffusion, transformer, and multimodal models to synthesize structured text, code, visual assets, and synthetic training data.',
    practicalApplications: [
      'Context-aware text synthesis',
      'Automated code generation & refactoring',
      'Multimodal content generation',
    ],
    icon: 'Sparkles',
    gradient: 'from-[#35D9E8] to-[#8957FF]',
  },
  {
    id: 'llm',
    title: 'Large Language Models',
    tagline: 'Understanding language-based AI applications.',
    description:
      'Architecting applications powered by foundational LLMs, employing prompt engineering strategies, token efficiency optimization, and structured output parsing.',
    practicalApplications: [
      'System prompt engineering & zero-shot pipelines',
      'Structured JSON schema extraction',
      'Retrieval-Augmented Generation (RAG)',
    ],
    icon: 'MessageSquareCode',
    gradient: 'from-[#3987FF] to-[#8957FF]',
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    tagline: 'Developing systems that understand human language.',
    description:
      'Tokenization, entity recognition, semantic similarity matching, sentiment analysis, and vector embeddings for semantic document querying.',
    practicalApplications: [
      'Vector space similarity search',
      'Named Entity Recognition (NER)',
      'Document summarization & synthesis',
    ],
    icon: 'Binary',
    gradient: 'from-[#8957FF] to-[#35D9E8]',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    tagline: 'Exploring intelligent image and visual analysis.',
    description:
      'Leveraging convolutional architectures and vision transformers for automated object detection, spatial segmentation, and visual quality inspection.',
    practicalApplications: [
      'Convolutional neural networks (CNNs)',
      'Visual object detection & classification',
      'Image preprocessing & feature extraction',
    ],
    icon: 'Eye',
    gradient: 'from-[#35D9E8] to-[#3987FF]',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Exploring systems that can perform multi-step tasks.',
    description:
      'Architecting goal-directed agent loops that decompose high-level directives into verifiable tool invocations, memory storage, and external API calls.',
    practicalApplications: [
      'Multi-step reasoning & tool calling',
      'Autonomous planning loops',
      'Long-term and short-term agent memory',
    ],
    icon: 'Bot',
    gradient: 'from-[#3987FF] to-[#35D9E8]',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Using intelligent systems to improve workflows.',
    description:
      'Eliminating repetitive manual bottlenecks by embedding intelligent classification, data extraction, and event-driven microservices into software workflows.',
    practicalApplications: [
      'Intelligent document processing',
      'Workflow orchestration & ETL pipelines',
      'Real-time automated incident triage',
    ],
    icon: 'Workflow',
    gradient: 'from-[#8957FF] to-[#3987FF]',
  },
];

export const INITIAL_SKILLS: Skill[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    level: 92,
    familiarity: 'Core Focus',
    description: 'Primary language for machine learning, data engineering, backend APIs, and automation scripts.',
  },
  {
    name: 'C++',
    category: 'Programming',
    level: 78,
    familiarity: 'Proficient',
    description: 'Object-oriented programming, data structures, algorithm efficiency, and systems programming.',
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    level: 80,
    familiarity: 'Proficient',
    description: 'Modern asynchronous programming, DOM scripting, and dynamic interactive client logic.',
  },

  // AI and Machine Learning
  {
    name: 'Artificial Intelligence Fundamentals',
    category: 'AI and Machine Learning',
    level: 88,
    familiarity: 'Core Focus',
    description: 'State-space search, heuristic algorithms, logic agents, and algorithmic problem formulation.',
  },
  {
    name: 'Machine Learning Fundamentals',
    category: 'AI and Machine Learning',
    level: 85,
    familiarity: 'Core Focus',
    description: 'Supervised/unsupervised algorithms, gradient descent, loss functions, and evaluation metrics.',
  },
  {
    name: 'Generative AI',
    category: 'AI and Machine Learning',
    level: 86,
    familiarity: 'Core Focus',
    description: 'Transformer architectures, latent representations, multimodal synthesis, and diffusion concepts.',
  },
  {
    name: 'Prompt Engineering',
    category: 'AI and Machine Learning',
    level: 90,
    familiarity: 'Core Focus',
    description: 'Few-shot prompting, chain-of-thought elicitation, guardrail constraints, and structured output formatting.',
  },
  {
    name: 'AI Chatbot Development',
    category: 'AI and Machine Learning',
    level: 84,
    familiarity: 'Proficient',
    description: 'Conversational memory management, intent recognition, retrieval-augmented grounding, and contextual dialog.',
  },

  // Web Development
  {
    name: 'HTML',
    category: 'Web Development',
    level: 90,
    familiarity: 'Proficient',
    description: 'Semantic markup, accessibility standards, document hierarchy, and clean structure.',
  },
  {
    name: 'CSS',
    category: 'Web Development',
    level: 86,
    familiarity: 'Proficient',
    description: 'Tailwind CSS, flexbox, CSS grid, glassmorphism, responsive design, and CSS animations.',
  },
  {
    name: 'JavaScript (Web)',
    category: 'Web Development',
    level: 82,
    familiarity: 'Proficient',
    description: 'Single-page web applications, API integrations, event handling, and state management.',
  },
  {
    name: 'Responsive UI Design',
    category: 'Web Development',
    level: 85,
    familiarity: 'Proficient',
    description: 'Mobile-first breakpoints, accessible contrast, fluid typography, and viewport harmony.',
  },

  // Developer Tools
  {
    name: 'Git',
    category: 'Developer Tools',
    level: 85,
    familiarity: 'Core Focus',
    description: 'Version control, atomic commits, branch workflows, and merge conflict resolution.',
  },
  {
    name: 'GitHub',
    category: 'Developer Tools',
    level: 88,
    familiarity: 'Core Focus',
    description: 'Remote repository management, issue tracking, continuous integration, and open-source collaboration.',
  },
  {
    name: 'VS Code',
    category: 'Developer Tools',
    level: 90,
    familiarity: 'Core Focus',
    description: 'Configured development environment, debugging Python/C++/JS, linting, and terminal automation.',
  },
  {
    name: 'Google AI Studio',
    category: 'Developer Tools',
    level: 88,
    familiarity: 'Core Focus',
    description: 'Prototyping Gemini models, prompt optimization, parameter tuning, and API experimentation.',
  },
  {
    name: 'Hugging Face',
    category: 'Developer Tools',
    level: 80,
    familiarity: 'Active Exploration',
    description: 'Model hub exploration, open-source transformer pipelines, datasets, and lightweight deployment.',
  },
  {
    name: 'Vercel',
    category: 'Developer Tools',
    level: 78,
    familiarity: 'Active Exploration',
    description: 'Frontend cloud hosting, serverless edge functions, preview deployments, and CI/CD linking.',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'prepwise-ai',
    name: 'PrepWise AI',
    category: 'Intelligent Education Assistant',
    shortDescription:
      'An AI-powered study assistant that transforms raw lecture notes and documents into structured revision materials, instant quizzes, and conceptual summaries.',
    fullDescription:
      'PrepWise AI addresses the cognitive overload students face when preparing for examinations. By ingesting study notes and academic texts, it utilizes natural language processing and prompt engineering pipelines to extract core principles, produce verified multiple-choice questions (MCQs) with reasoning explanations, and provide an interactive AI study companion for real-time clarification.',
    keyFeatures: [
      'Upload study notes and unstructured documents',
      'Generate conceptual MCQs and mock exam questions with detailed answers',
      'Extract important concepts and terminology definitions',
      'Create high-level executive summaries and flashcard decks',
      'Provide an on-demand AI-powered study assistant for clarification',
    ],
    techStack: ['Python', 'FastAPI', 'Google AI Studio / Gemini API', 'NLP Pipelines', 'Tailwind CSS', 'React'],
    status: 'In Progress',
    statusColor: 'text-[#35D9E8] border-[#35D9E8]/30 bg-[#35D9E8]/10',
    image: prepwiseImg,
    githubUrl: 'https://github.com/rahabasif-ai/prepwise-ai',
    liveDemoUrl: '#demo-prepwise',
    architectureDetails: {
      problemStatement:
        'Students spend excessive time manually formulating practice questions and summarizing dense textbook chapters rather than active learning.',
      aiApproach:
        'Employs structured prompt chains and semantic extraction to isolate key entities, formulate distractors for multiple-choice questions, and synthesize hierarchical topic summaries.',
      dataPipeline:
        'Text extraction -> Chunking with overlap -> Semantic entity tagging -> Prompt template injection -> JSON schema verification -> Quiz generation.',
      systemDesign: [
        'Modular Python backend with FastAPI endpoint routing',
        'Gemini API with strict structured JSON schema enforcement',
        'Client-side responsive flashcard and quiz testing engine',
      ],
    },
    sampleInteraction: {
      type: 'study-assistant',
      title: 'Interactive Study Concept Simulator',
      description: 'Test the note-to-quiz synthesis pipeline by entering a sample academic concept.',
    },
  },
  {
    id: 'uniassist-chatbot',
    name: 'UniAssist – University Chatbot',
    category: 'Conversational Information Assistant',
    shortDescription:
      'An intelligent university assistant providing instant, 24/7 conversational guidance for academic inquiries, campus facilities, and admissions.',
    fullDescription:
      'UniAssist is an intelligent conversational agent engineered to navigate complex university administrative ecosystems. Trained on university guidelines, academic program catalogs, and campus procedures, UniAssist provides students with prompt, accurate answers without requiring them to sift through extensive administrative portals.',
    keyFeatures: [
      'Answer common university questions with contextual precision',
      'Provide detailed information about academic degree programs and prerequisites',
      'Help students navigate campus offices, academic calendars, and services',
      'Offer rapid answers through an intuitive conversational interface',
      'Graceful intent fallback with routing to official contact points',
    ],
    techStack: ['Python', 'Chatbot Architectures', 'Dialog Management', 'NLP', 'JavaScript', 'Tailwind CSS'],
    status: 'Completed',
    statusColor: 'text-[#3987FF] border-[#3987FF]/30 bg-[#3987FF]/10',
    image: uniassistImg,
    githubUrl: 'https://github.com/rahabasif-ai/uniassist-chatbot',
    liveDemoUrl: '#demo-uniassist',
    architectureDetails: {
      problemStatement:
        'University websites often have fragmented navigation, causing repetitive administrative burdens for academic departments and confusing new students.',
      aiApproach:
        'Utilizes intent classification paired with semantic similarity matching against a curated knowledge base of university policies and course syllabi.',
      dataPipeline:
        'Student query -> Preprocessing & Tokenization -> Intent matching & entity slot filling -> Contextual prompt synthesis -> Response generation with citations.',
      systemDesign: [
        'Python conversational backend handling session memory',
        'Vector similarity search for fast policy retrieval',
        'Lightweight web client with real-time streaming dialogue',
      ],
    },
    sampleInteraction: {
      type: 'chatbot',
      title: 'Interactive Chatbot Query Simulator',
      description: 'Try sample university inquiries to test the response dispatch and intent classification.',
    },
  },
  {
    id: 'buildtrack-ai',
    name: 'BuildTrack AI',
    category: 'Industrial AI & Operations',
    shortDescription:
      'An AI-supported construction project management concept designed to monitor expenditures, forecast timeline risks, and synthesize site logs.',
    fullDescription:
      'BuildTrack AI explores the fusion of construction operations with predictive intelligence. Designed to track material expenses, subcontractor schedules, and site milestone velocity, the system aggregates operational logs to provide project engineers with early anomaly detection and intelligent budget variance insights.',
    keyFeatures: [
      'Manage multiple construction project phases and contractor milestones',
      'Record budgets, line-item expenses, and material purchase orders',
      'Track project completion velocity against planned Gantt baselines',
      'Organize site safety reports and inspection documentation',
      'Explore AI-powered project insights and risk flags before delays occur',
    ],
    techStack: ['Python', 'Data Analytics', 'Predictive Modeling', 'Responsive UI', 'REST APIs'],
    status: 'In Progress',
    statusColor: 'text-[#35D9E8] border-[#35D9E8]/30 bg-[#35D9E8]/10',
    image: buildtrackImg,
    githubUrl: 'https://github.com/rahabasif-ai/buildtrack-ai',
    liveDemoUrl: '#demo-buildtrack',
    architectureDetails: {
      problemStatement:
        'Construction projects routinely suffer budget overruns and schedule slippages due to delayed operational feedback between job sites and project managers.',
      aiApproach:
        'Synthesizes daily contractor logs with financial ledger entries to compute variance anomalies and forecast completion likelihoods.',
      dataPipeline:
        'Raw site logs & expense tables -> Data normalization -> Heuristic anomaly detection -> LLM narrative synthesis -> Risk radar visualization.',
      systemDesign: [
        'Data ingestion engine written in Python',
        'Algorithmic milestone progression tracking',
        'Clean executive dashboard for real-time risk visibility',
      ],
    },
    sampleInteraction: {
      type: 'construction',
      title: 'Construction Risk & Budget Analysis Preview',
      description: 'Explore live metric synthesis and AI risk diagnosis on sample project data.',
    },
  },
  {
    id: 'agroflow-ai',
    name: 'AgroFlow AI',
    category: 'Agritech & Precision Systems',
    shortDescription:
      'An AI-powered agriculture management concept engineered to optimize crop health monitoring, irrigation scheduling, and soil telemetry.',
    fullDescription:
      'AgroFlow AI is a forward-looking agritech conceptual platform designed for modern agricultural businesses. By integrating environmental sensor feeds, crop cycle histories, and weather forecasts, it investigates machine learning recommendations for water conservation, fertilization schedules, and pest mitigation.',
    keyFeatures: [
      'Organize farm acreage, plot classifications, and crop varieties',
      'Track historical agricultural activities, seeding dates, and yields',
      'Explore intelligent agricultural recommendations for irrigation and pest control',
      'Support data-driven decision-making for sustainable agribusiness operations',
      'Synthesize regional climate forecasts into practical field action checklists',
    ],
    techStack: ['Python', 'Environmental Telemetry Modeling', 'Predictive Heuristics', 'HTML/CSS/JS'],
    status: 'Planned Exploration',
    statusColor: 'text-[#8957FF] border-[#8957FF]/30 bg-[#8957FF]/10',
    image: agroflowImg,
    githubUrl: 'https://github.com/rahabasif-ai/agroflow-ai',
    liveDemoUrl: '#demo-agroflow',
    architectureDetails: {
      problemStatement:
        'Small and medium agricultural producers face volatile weather and resource costs without access to high-end enterprise agritech software.',
      aiApproach:
        'Proposes rule-based and predictive models combining soil moisture telemetry, historical evapotranspiration curves, and crop phonology stages.',
      dataPipeline:
        'Simulated IoT telemetry -> Parameter bounds checking -> Soil moisture deficit modeling -> Prescriptive recommendation generation.',
      systemDesign: [
        'Python analytical core for telemetry processing',
        'Modular rule engine for crop protection advisories',
        'Accessible, high-contrast field interface designed for mobile tablets',
      ],
    },
    sampleInteraction: {
      type: 'agriculture',
      title: 'Precision Agritech Diagnostic Preview',
      description: 'Preview crop telemetry parameters and simulated agronomic recommendations.',
    },
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'rag-knowledge-assistant',
    title: 'RAG-Based AI Knowledge Assistant',
    tag: 'Knowledge Retrieval',
    description:
      'An AI assistant capable of answering complex domain-specific questions with cited references using uploaded documents and vector embeddings.',
    keyFocusAreas: [
      'Hybrid semantic & keyword retrieval',
      'Document chunking strategies and citation grounding',
      'Low-latency vector similarity indexing',
    ],
    plannedTech: ['Python', 'ChromaDB / FAISS', 'LangChain / LlamaIndex', 'FastAPI'],
    potentialImpact: 'Eliminates document hallucination and delivers auditable research answers.',
  },
  {
    id: 'ai-research-assistant',
    title: 'AI Research Assistant',
    tag: 'Academic Synthesis',
    description:
      'A specialized tool engineered to parse, organize, cross-reference, and summarize dense academic research papers and literature reviews.',
    keyFocusAreas: [
      'ArXiv & scientific paper PDF parsing',
      'Cross-paper methodology comparison tables',
      'Automated LaTeX citation generation',
    ],
    plannedTech: ['Python', 'PyPDF', 'Gemini Multimodal API', 'Streamlit / React'],
    potentialImpact: 'Accelerates scientific discovery and literature review synthesis for students and engineers.',
  },
  {
    id: 'career-guidance-system',
    title: 'Intelligent Career Guidance System',
    tag: 'Adaptive Learning',
    description:
      'An adaptive recommendation system that evaluates a student’s technical aptitudes, goals, and coursework to generate personalized learning paths.',
    keyFocusAreas: [
      'Skill gap graph analysis',
      'Curriculum pathway recommendation algorithms',
      'Industry benchmark matching against current job market trends',
    ],
    plannedTech: ['Python', 'Graph Data Structures', 'Scikit-Learn', 'Interactive UI'],
    potentialImpact: 'Provides transparent, individualized roadmaps for aspiring technology professionals.',
  },
  {
    id: 'business-analytics-ai',
    title: 'AI-Powered Business Analytics',
    tag: 'Data Intelligence',
    description:
      'An autonomous analytical tool that allows non-technical business operators to query complex tabular datasets using natural conversational language.',
    keyFocusAreas: [
      'Text-to-SQL / Text-to-Pandas translation pipelines',
      'Automatic chart generation and trend anomaly detection',
      'Executive summary generation from raw CSV spreadsheets',
    ],
    plannedTech: ['Python', 'Pandas / Polars', 'DuckDB', 'Vega-Lite / Chart.js'],
    potentialImpact: 'Democratizes complex business intelligence and eliminates SQL bottlenecks.',
  },
  {
    id: 'workflow-automation-agent',
    title: 'AI Agent for Workflow Automation',
    tag: 'Autonomous Systems',
    description:
      'A goal-directed multi-step autonomous agent designed to streamline repetitive digital workflows, document handling, and web actions.',
    keyFocusAreas: [
      'ReAct prompting frameworks and state machines',
      'Verifiable API tool execution with rollback fallbacks',
      'Human-in-the-loop approval checkpoints',
    ],
    plannedTech: ['Python', 'Asyncio', 'Pydantic AI / CrewAI', 'Docker'],
    potentialImpact: 'Frees knowledge workers from mundane repetitive tasks through dependable agentic execution.',
  },
];

export const PROFESSIONAL_JOURNEY: JourneyMilestone[] = [
  {
    period: '2025 – Present',
    title: 'BS in Artificial Intelligence',
    institutionOrContext: 'Academic Degree Program',
    description:
      'Enrolled in formal degree program pursuing a Bachelor of Science in Artificial Intelligence. Rigorous focus on computational mathematics, linear algebra, discrete algorithms, data structures, and computer science foundations.',
    focusHighlights: [
      'Data Structures & Algorithm Design',
      'Linear Algebra & Calculus for Machine Learning',
      'Core Computer Science & Systems Theory',
    ],
    active: true,
  },
  {
    period: '2026',
    title: 'Programming and Python Development',
    institutionOrContext: 'Core Engineering Foundations',
    description:
      'Built a robust software engineering baseline centered on Python, C++, and object-oriented architectures. Developed modular software practices, clean code conventions, and algorithmic problem-solving.',
    focusHighlights: [
      'Object-Oriented Design in Python & C++',
      'Algorithmic Complexity & Optimization',
      'Modular code design & version control with Git',
    ],
  },
  {
    period: '2026',
    title: 'AI Learning and Machine Learning Foundations',
    institutionOrContext: 'Theoretical & Practical Modeling',
    description:
      'Transitioned from baseline programming to supervised and unsupervised learning algorithms. Explored gradient descent, feature selection, evaluation matrices, regression, and neural network architectures.',
    focusHighlights: [
      'Supervised / Unsupervised ML models',
      'Model validation, loss surfaces, and metrics',
      'Dataset cleaning, exploratory data analysis',
    ],
  },
  {
    period: '2026 – Present',
    title: 'Exploring Generative AI',
    institutionOrContext: 'Modern AI Paradigms',
    description:
      'Investigated transformer mechanisms, attention layers, prompt engineering strategies, and Large Language Model architectures using Google AI Studio and modern APIs.',
    focusHighlights: [
      'Prompt orchestration & structured JSON outputs',
      'Conversational memory & dialogue state modeling',
      'Exploration of open-source models via Hugging Face',
    ],
    active: true,
  },
  {
    period: '2026 – Present',
    title: 'Developing Real-World AI Solutions',
    institutionOrContext: 'Applied Engineering Direction',
    description:
      'Currently designing end-to-end intelligent systems like PrepWise AI, BuildTrack AI, and UniAssist. Dedicated to architecting reliable, production-ready AI solutions with clean system boundaries.',
    focusHighlights: [
      'PrepWise AI & UniAssist development',
      'Retrieval-Augmented Generation (RAG) experiments',
      'Continuous technical growth and collaborative software engineering',
    ],
    active: true,
  },
];

export const TECH_ECOSYSTEM: TechTool[] = [
  {
    name: 'Python',
    category: 'Core Language',
    role: 'Primary language for ML, APIs, scripting & data manipulation',
    description:
      'Leveraged daily as the foundational programming language for algorithmic implementations, data processing pipelines, and AI system design.',
    iconName: 'Terminal',
  },
  {
    name: 'C++',
    category: 'Systems Language',
    role: 'Performance computing & algorithmic efficiency',
    description:
      'Applied for building an appreciation of memory management, low-level data structure optimization, and computational mechanics.',
    iconName: 'Binary',
  },
  {
    name: 'Google AI Studio',
    category: 'AI Platform',
    role: 'Rapid LLM prototyping & prompt optimization',
    description:
      'Used to test and tune prompt strategies against Gemini models, test temperature curves, and inspect system prompt edge cases.',
    iconName: 'Sparkles',
  },
  {
    name: 'Hugging Face',
    category: 'Open AI Community',
    role: 'Model research, datasets & transformer hubs',
    description:
      'Platform for discovering state-of-the-art open weights, exploring specialized tokenizers, and referencing modern AI research implementations.',
    iconName: 'Layers',
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    role: 'Source management, collaboration & CI pipelines',
    description:
      'Central home for managing project codebases, tracking development issues, organizing release milestones, and publishing open-source projects.',
    iconName: 'GitBranch',
  },
  {
    name: 'VS Code',
    category: 'IDE / Editor',
    role: 'Primary integrated development environment',
    description:
      'Configured with language servers, Python virtual environments, Git integration, and terminal orchestration for friction-free engineering.',
    iconName: 'Code',
  },
  {
    name: 'JavaScript',
    category: 'Web Technology',
    role: 'Client-side interactivity & dynamic interfaces',
    description:
      'Used to construct intuitive interfaces that bring backend machine learning logic to life through asynchronous client interactions.',
    iconName: 'FileCode2',
  },
  {
    name: 'HTML & CSS',
    category: 'Web Standards',
    role: 'Semantic structure, layout & modern design systems',
    description:
      'Combined with modern Tailwind CSS to engineer accessible, aesthetic, and responsive web experiences across all screen viewports.',
    iconName: 'Layout',
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    role: 'Edge cloud hosting & automated deployment',
    description:
      'Utilized for instantaneous preview deployments, global edge delivery, and production hosting of client-facing web applications.',
    iconName: 'Cloud',
  },
];
