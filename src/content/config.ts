import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { createPatternSchema } from '../schemas/pattern.js';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string().optional(),
  }),
});

const patterns = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/patterns' }),
  schema: createPatternSchema(z),
});

export const collections = { blog, patterns };
