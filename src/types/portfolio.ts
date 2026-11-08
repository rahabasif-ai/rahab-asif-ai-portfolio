export type ProjectStatus = 'In Progress' | 'Completed' | 'Planned Exploration';

export interface Project {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  techStack: string[];
  status: ProjectStatus;
  statusColor: string;
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDetails: {
    problemStatement: string;
    aiApproach: string;
    dataPipeline: string;
    systemDesign: string[];
  };
  sampleInteraction?: {
    type: 'study-assistant' | 'chatbot' | 'construction' | 'agriculture';
    title: string;
    description: string;
  };
}

export interface AIExplorationItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  practicalApplications: string[];
  icon: string;
  gradient: string;
}

export type SkillCategory = 'Programming' | 'AI and Machine Learning' | 'Web Development' | 'Developer Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  familiarity: 'Core Focus' | 'Proficient' | 'Active Exploration';
  description: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  keyFocusAreas: string[];
  plannedTech: string[];
  potentialImpact: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institutionOrContext: string;
  description: string;
  focusHighlights: string[];
  active?: boolean;
}

export interface TechTool {
  name: string;
  category: string;
  role: string;
  description: string;
  iconName: string;
}
