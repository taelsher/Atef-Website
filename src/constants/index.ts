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
//note that a lot of place holder url: "/" TODO fill in content wtih PDF assets.
export const links = [
  { title: "Home", label: "home", url: "/"},
  { title: "Personal", label: "", url: "/", subLinks: [
    {label: "curriculum viate", title: "Curriculum Vitae", url: "/assets/_00_Elsherbeni_CV_August_2024.pdf"}
  ] },

  { title: "Teaching", label: "teaching", url: "/", subLinks:[
    {label: "Undergraduate Courses", title: "Undergraduate Courses", url:"/assets/_12_Elsherbeni_UGRAD_COURSES_January_2025.pdf"},
    {label: "Graduate Courses", title: "Graduate Courses", url: "/assets/_13_Elsherbeni_GRAD_COURSES_January_2025.pdf"},
    {label: "Invited Presentations", title: "Invited Presentations", url: "/assets/_10_Elsherbeni_Invited_Presentations_January_2025.pdf"}
  ] },

  { title: "Research", label: "research", url: "/", subLinks: [
    {title: "Research Projects", label: "Research Projects", url: "/assets/_16_Elsherbeni_Research_Projects_January_2025.pdf"},
    {title: "Research Topics", label: "Research Topics", url:"/assets/_15_Elsherbeni_Research_Topics_January_2025.pdf"},
    {title: "Grants", label: "Grants", url: "/assets/_14_Elsherbeni_Grants_January_2025.pdf"}
  ] },

  { title: "Publications", label: "publication", url: "/", subLinks: [
    { label: 'journal publications', title: 'Journal Publications ', url: '/assets/_01_Elsherbeni_Journal_Articles_December_2024.pdf' },
    { label: 'books', title: 'Books', url: '/assets/_02_Elsherbeni_Books_Book_Chapters_September_2024.pdf' },
    {label: 'invited seminars', title: 'Invited Seminars', url: 'assets/_03_Elsherbeni_Invited_Seminars_December_2024.pdf' },
    {label: 'conference proceedings', title: 'Conference Proceedings', url: 'assets/_04_Elsherbeni_Conference_Proceedings_December_2024.pdf' },
    {label: 'conference abstracts', title: 'Conference Abstracts', url: 'assets/_05_Elsherbeni_Conference_Abstracts_December_2024.pdf' },
    {label: 'short courses', title: 'Short Courses', url: 'assets/_07_Elsherbeni_Short_Courses_December_2024.pdf' }
  ] },

  { title: "Advisees", label: "Advisees", url: "/",subLinks:[
    {label: "Graduate Advisees", title: "Graduate Advisees", url:"/assets/_11_Elsherbeni_Advisees_January_2025.pdf"}
  ]},

  { title: "Software", label: "software", url: "/", subLinks:[
    {title: "Software Packages", label:"software packages", url: "/assets/_06_Elsherbeni_Software_January_2025.pdf"}
  ] },
  // { title: 'Career', label: 'career', url: '/career' },
  // { title: 'Projects', label: 'projects', url: '/projects' }
];
