import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  layout: string
  title: string
  date: string
  image?: string
  imageDescription?: string
  tags: Array<string>
  description: string
  draft?: boolean
}

export function sortDateDescending(arg: MarkdownInstance<Frontmatter>[]) {
  return arg.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  )
}

export function getAllUniqueTags(arg: MarkdownInstance<Frontmatter>[]) {
  return Array.from(new Set(arg.flatMap(e => e.frontmatter.tags)).values())
}

export function capitalizeString(arg: string) {
  return arg[0].toUpperCase() + arg.slice(1)
}
