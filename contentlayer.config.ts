import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Experience = defineDocumentType(() => ({
  name: 'Experience',
  filePathPattern: `experience/**/*.md`,
  fields: {
    company: { type: 'string', required: true },
    role: { type: 'string', required: true },
    startDate: { type: 'string', required: true },
    endDate: { type: 'string' },
    location: { type: 'string' },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tech: { type: 'list', of: { type: 'string' } },
    github: { type: 'string' },
    demo: { type: 'string' },
    featured: { type: 'boolean', default: false },
  },
}))

export const Hero = defineDocumentType(() => ({
  name: 'Hero',
  filePathPattern: `hero.md`,
  isSingleton: true,
  fields: {
    name: { type: 'string', required: true },
    title: { type: 'string', required: true },
    bio: { type: 'string', required: true },
    email: { type: 'string', required: true },
    github: { type: 'string' },
    linkedin: { type: 'string' },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Experience, Project, Hero],
})