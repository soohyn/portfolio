interface Project {
  name: string;
  description: string;
  url: string;
  deploy: string;
  tech: string[];
  thumbnail: string;
  isTeam: boolean;
}

interface Career {
  company: string;
  maskingName: string;
  level: string;
  startDate: string;
  endDate: string;
  jobs: string[];
  skills: string[];
}

interface Skill {
  name: string;
  image?: string;
}
