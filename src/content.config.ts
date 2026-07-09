import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

const blogCollection = defineCollection({
  loader: glob({ 
    pattern: '**/[^_]*.md', 
    base: "./src/content/blog",
    generateId: ({ entry }) => {
      const fileWithoutExt = entry.replace(/\.md$/, '');
      const parts = fileWithoutExt.split('/');
      return parts.map(part => slugify(part)).join('/');
    }
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default('Technical essay by Bê Acosta on product engineering, data pipelines, and AI search.'),
    date: z.coerce.date(),
    author: z.string().default('Bê Acosta'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};
