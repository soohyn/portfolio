export const GITHUB_URL = "https://github.com/soohyn";
export const LINKEDIN_URL = "https://www.linkedin.com/in/soohyeonjo";
export const TISTORY_URL = "";
export const GMAIL_ADDR = "sooheyonjo@gmail.com";

export const PAGE_LIMIT = 4;

export const profile = {
  name: "Soohyeon Jo",
  nicknam: "Soohyn",
  job: "Frontend Developer",
  level: "Junior",
  github_url: GITHUB_URL,
  linkedin_url: LINKEDIN_URL,
  tistory_url: TISTORY_URL,
  mail_addr: GMAIL_ADDR,
};

export const skills: Skill[] = [
  { name: "ReactJS", image: "/images/reactjs.png" },
  { name: "NextJS", image: "/images/nextjs.png" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "TypeScript", image: "/images/typescript.png" },

  { name: "Supabase", image: "/images/supabase.svg" },
  { name: "Redux", image: "/images/redux.svg" },
];

export const styleSkill: Skill[] = [
  { name: "Styled Component", image: "images/styled-components.png" },
  { name: "Tailwind", image: "images/tailwindcss.svg" },
  { name: "Sass/Scss", image: "images/sass.png" },
];

export const studySkills: Skill[] = [
  { name: "React Native" },
  { name: "React Query" },
  { name: "AWS" },
  { name: "Recoil" },
  { name: "Solidity", image: "/images/solidity.svg" },
  { name: "Electron", image: "/images/electron.svg" },
    { name: "MongoDB", image: "/images/mongodb.png" },
  { name: "Firebase" },
  { name: "Express" },
  { name: "PWA" },
  { name: "NodeJS" },
  { name: "Computer Science" },
  { name: "Python" },
  { name: "C" },
  { name: "Java" },
  { name: "Kotlin" },
];

export const toolSkill: Skill[] = [
  { name: "Figma" },
  { name: "Git" },
  { name: "Slack" },
  { name: "Discord" },
  { name: "Notion" },
  { name: "Vercel" },
  { name: "Postman" },
];

export const certificate = [{ name: "정보처리기사" }];

export const career: Career[] = [
  {
    company: "마포구청",
    maskingName: "M사",
    level: "계약직",
    team: "개발팀",
    position: "frontend developer",
    startDate: "202103",
    endDate: "202108",
    jobs: ["웹 / 앱 프론트엔드 개발"],
    skills: ["Kotlin", "React", "Javascript", "Typescript"],
  },
  {
    company: "주식회사 왓섭",
    maskingName: "W사",
    level: "정규직",
    team: "개발팀",
    position: "frontend developer",
    startDate: "202108",
    endDate: "202310",
    jobs: [
      "웹 / 앱 프론트엔드 개발",
      "사내 어드민 관리 페이지 개발",
      "데이터 전처리 시스템 프론트엔드 개발",
    ],
    skills: ["ReactJS", "NextJS", "Javascript", "Typescript", "React Native"],
  },
  {
    company: "멋쟁이사자처럼",
    maskingName: "L사",
    level: "계약직",
    team: "부트캠프",
    position: "프론트엔드 보조강사",
    startDate: "202310",
    endDate: "202510",
    jobs: ["수업 모니터링","수업 질의응답","프로젝트 진행 시 보조"],
    skills: ["ReactJS", "NextJS", "Javascript", "Typescript", "Solidity"],
  },
];

export const projects: Project[] = [
  {
    name: "블로그",
    description: "마크다운 언어로 작성된 글을 보여주는 블로그입니다.",
    url: "https://next-blog-sooheyon.vercel.app/",
    deploy: "Vercel",
    skills: ["nextjs@14", "contentlayer"],
    thumbnail: "/images/icon.png",
    isTeam: false,
    isDone: true,
  },

  {
    name: "포트폴리오",
    description: "개발자 포트폴리오 입니다. 현재 보고있는 페이지 입니다",
    url: "https://soohyn.com",
    deploy: "Vercel",
    skills: ["nextjs@14", "tailwindcss", "supabase"],
    thumbnail: "/images/icon.png",
    isTeam: false,
    isDone: true,
  },
  {
    name: "청첩장",
    description:
      "로그인/회원가입 기능으로 직접 청첩장을 만들 수 있는 페이지 입니다.",
    url: "",
    deploy: "Vercel",
    skills: ["react", "styled-component", "react-redux"],
    thumbnail: "/images/icon.png",
    isTeam: false,
    isDone: false,
  },
  {
    name: "세모이 SEMOi",
    description: "스포츠센터 강사들의 후기를 작성하는 웹 앱 입니다.",
    url: "",
    deploy: "Vercel",
    skills: ["react", "styled-component", "tailwindcss", "pwa"],
    thumbnail: "/images/icon.png",
    isTeam: true,
    isDone: false,
  },
  {
    name: "NFT 슬롯머신",
    description: "랜덤 NFT 민팅 서비스",
    url: "",
    deploy: "Vercel",
    skills: ["React", "Vite", "React Router Dom", "Solidity"],
    thumbnail: "/images/icon.png",
    isTeam: true,
    isDone: false,
  },

  {
    name: "인생네컷",
    description: "데스크탑에서도 촬영하는 인생네컷",
    url: "",
    deploy: "Vercel",
    skills: ["react", "styled-component", "electron", "react-redux"],
    thumbnail: "/images/icon.png",
    isTeam: true,
    isDone: false,
  },
  {
    name: "띱 DDiv",
    description: "여행 경비 기록, 정산 앱",
    url: "",
    deploy: "",
    skills: ["React Native", "mongoDB"],
    thumbnail: "/images/icon.png",
    isTeam: false,
    isDone: false,
  },
];
