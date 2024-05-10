export interface AvatarProps {
  name: string
  initials: string
}

export interface AboutProps {
  title: string
  description: string
}

export interface LinksProps {
  title: string
  url: string
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
