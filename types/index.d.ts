interface Project {
  name: string;
  description: string;
  url: string;
  deploy: string;
  skills: string[];
  thumbnail: string;
  isTeam: boolean;
  isDone: boolean;
}

interface Career {
  company: string;
  maskingName: string;
  level: string;
  startDate: string;
  endDate: string;
  jobs: string[];
  skills: string[];
  position: string;
  team: string;
}

interface Skill {
  name: string;
  image?: string;
}

interface Guest {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  password: string;
  message: string;
  is_secret: boolean;
}
