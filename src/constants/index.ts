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
  { title: "About", label: "about", url: "/" },
  { title: "Personal", label: "career", url: "/career" },
  { title: "Teaching", label: "career", url: "/projects" },
  { title: "Research", label: "career", url: "/career" },
  { title: "Publications", label: "publication", url: "/publication" },
  { title: "Activities", label: "career", url: "/career" },
  { title: "Software", label: "career", url: "/career" },
  // { title: 'Career', label: 'career', url: '/career' },
  // { title: 'Projects', label: 'projects', url: '/projects' }
];
