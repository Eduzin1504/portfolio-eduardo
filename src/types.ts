export interface Tool {
  id: string;
  name: string;
  category: string;
  indexCode: string; // e.g. [00], [01]
  iconName: string; // Lucide icon identifier
}

export interface Project {
  id: string;
  title: string;
  status: 'active' | 'deployed' | 'development' | 'archived';
  description: string;
  runLabel?: string;
  executableUrl?: string; // simulation link
  techStack: string[];
}

export interface CareerRole {
  title: string;
  type: string; // e.g., 'Full-time' or 'Part-time' 
  period: string; // e.g., 'May 2026 - Present'
  description?: string;
}

export interface CareerItem {
  company: string;
  duration?: string; // string representing overall tenure e.g., "4 mos" or "3 yrs 8 mos"
  roles: CareerRole[];
}

export interface TerminalLog {
  timestamp: string;
  type: 'system' | 'user' | 'success' | 'error' | 'info';
  message: string;
}
