import { AVATAR, ABOUT, LINKS, CAREER, PROJECTS, PUBLICATION, NEWS } from "@/data";
import type {
  AvatarProps,
  AboutProps,
  LinksProps,
  CareerProps,
  ProjectProps,
  PublicationProps,
  NewsProps,
} from "@/types";

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[],
  publication: PUBLICATION as PublicationProps[],
  projects: PROJECTS as ProjectProps[],
  news: NEWS as NewsProps[],
};

export const links = [
  { title: "About", label: "about", url: "/"},
  { title: "Personal", label: "career", url: "/career", subLinks: [
    {label: "curriculum viate", title: "Curriculum Vitae", url: "/assets/_00_Elsherbeni_CV_August_2024.pdf"}
  ] },
  { title: "Teaching", label: "teaching", url: "/projects" },
  { title: "Research", label: "research", url: "/career" },
  { title: "Publications", label: "publication", url: "/publication", subLinks: [
    { label: 'journal publications', title: 'Journal Publications ', url: '/assets/_01_Elsherbeni_Journal_Articles_August_2024.pdf' },
    { label: 'books', title: 'Books', url: '/assets/_02_Elsherbeni_Books_Book_Chapters_September_2024.pdf' },
    {label: 'invited seminars', title: 'Invited Seminars', url: 'assets/_03_Elsherbeni_Invited_Seminars_September_2024.pdf' },
    {label: 'conference proceedings', title: 'Conference Proceedings', url: 'assets/_04_Elsherbeni_Conference_Proceedings_September_2024.pdf' },
    {label: 'conference abstracts', title: 'Conference Abstracts', url: 'assets/_05_Elsherbeni_Conference_Abstracts_September_2024.pdf' },
    {label: 'software packages', title: 'Software Packages', url: 'public/assets/_06_Elsherbeni_Software_September_2024.pdf' },
    {label: 'short courses', title: 'Short Courses', url: 'assets/_07_Elsherbeni_Short_Courses_September_2024.pdf' }
  ] },//TODO add sub url functionality
  { title: "Activities", label: "activities", url: "/career" },
  { title: "Software", label: "career", url: "assets/_06_Elsherbeni_Software_September_2024.pdf" },
  // { title: 'Career', label: 'career', url: '/career' },
  // { title: 'Projects', label: 'projects', url: '/projects' }
];
