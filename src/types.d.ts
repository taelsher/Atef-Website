import { ImgHTMLAttributes } from "react"

export interface AvatarProps {
  name: string
  initials: string
}

export interface AboutProps {
  title: string
  description: string
  linkedinlink: string
  linkedin: string
  googlescholarlink: string
  googlescholar: string
}

export interface LinksProps {
  title: string
  url: string
  subLinks?:[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface CareerProps {
  company: string
  link?: string
  badges: string[]
  title: string
  start: string
  end: string
  description: string
}
export interface NewsProps {
  year:string
  start:string
  description:string
  bullet1:string
  bullet2:string
  bullet3:string
  image1?:string
  image2?:string
}
export interface PublicationProps {
  title: string
  link?: string
}
export interface TagsProps {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface ProjectLinkProps {
  github?: string
  preview?: string
}

export interface ProjectProps {
  title: string
  tags: TagsProps[]
  description: string
  link: ProjectLinkProps
  image?: string
  video?: string
}
