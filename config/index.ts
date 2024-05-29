export const GITHUB_URL = "https://github.com/soohyn";
export const LINKEDIN_URL = "https://www.linkedin.com/in/soohyeonjo";
export const TISTORY_URL = "";
export const GMAIL_ADDR = "sooheyonjo@gmail.com";

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

export const skill = [
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "MongoDB" },
];

export const studyTech = [
  { name: "React Native" },
  { name: "Supabase" },
  { name: "Firebase" },
  { name: "Express" },
  { name: "Prisma" },
  { name: "PWA" },
  { name: "Planet Scale" },
  { name: "Python" },
  { name: "NodeJS" },
  { name: "C" },
  { name: "Electron" },
  { name: "Java" },
  { name: "Computer Science" },
  { name: "Solidity" },
];

export const career: Career[] = [
  {
    company: "주식회사 왓섭",
    maskingName:"W사",
    level: "정규직",
    startDate: "202108",
    endDate: "202310",
    jos: [
      "웹 / 앱 프론트엔드 개발",
      "사내 어드민 관리 페이지 개발",
      "데이터 전처리 시스템 프론트엔드 개발",
    ],
    skills: ["ReactJS", "NextJS", "Javascript", "Typescript", "React Native"],
  },
  {
    company: "멋쟁이사자처럼",
    maskingName:"L사",
    level: "계약직",
    startDate: "202310",
    endDate: "202408",
    jos: [
      "블록체인 개발 부트캠프 보조 강사, 프론트엔드 담당",
    ],
    skills: ["ReactJS", "NextJS", "Javascript", "Typescript", "Solidity"],
  },
];

export const projects: Project[] = [
  {
    name: "게시판",
    description: "로그인/회원가입, 댓글 기능이 구현되어 있는 게시판입니다.",
    url: "https://express-react-board-pi.vercel.app/",
    deploy: "Vercel",
    tech: ["express", "react", "prisma", "planet scale", "tailwindcss"],
    thumbnail: "",
    isTeamProject: false,
  },
  {
    name: "블로그",
    description: "마크다운 언어로 작성된 글을 보여주는 블로그입니다.",
    url: "https://soohyn.github.io",
    deploy: "Github pages",
    tech: ["nextjs@14", "contentlayer"],
    thumbnail: "",
    isTeamProject: false,
  },
  {
    name: "청첩장",
    description:
      "로그인/회원가입 기능으로 직접 청첩장을 만들 수 있는 페이지 입니다.",
    url: "",
    deploy: "Vercel",
    tech: ["react", "styled-component", "react-redux"],
    thumbnail: "",
    isTeamProject: false,
  },
  {
    name: "포트폴리오",
    description: "개발자 포트폴리오 입니다. 현재 보고있는 페이지 입니다",
    url: "https://soohyn.com",
    deploy: "Vercel",
    tech: ["nextjs@14", "tailwindcss"],
    thumbnail: "",
    isTeamProject: true,
  },
  {
    name: "세모이 SEMOi",
    description: "스포츠센터 강사들의 후기를 작성하는 웹 앱 입니다.",
    url: "",
    deploy: "Vercel",
    tech: ["react", "styled-component", "tailwindcss", "pwa"],
    thumbnail: "",
    isTeamProject: true,
  },
  {
    name: "인생네컷",
    description: "데스크탑에서도 촬영하는 인생네컷",
    url: "",
    deploy: "Vercel",
    tech: ["react", "styled-component", "electron", "react-redux"],
    thumbnail: "",
    isTeamProject: false,
  },
];
