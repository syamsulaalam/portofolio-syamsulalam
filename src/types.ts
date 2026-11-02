export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  category: string;
  date: string;
  scope: string;
  methodology: string;
  keyPoints: string[];
  cliSnippet: {
    command: string;
    output: string[];
  };
  mockPreview: {
    type: 'browser' | 'dashboard' | 'cafe' | 'school';
    caption: string;
  };
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerOrg: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  description: string;
  verificationUrl?: string;
  certificateUrl?: string;
  certificateFileName?: string;
  certificateType: 'security' | 'networking' | 'certification' | 'data-science' | 'artificial-intelligence';
}
