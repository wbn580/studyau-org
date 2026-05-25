import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    readingTime: z.number().optional(),
    description: z.string(),
    publishDate: z.string(),
    modDatetime: z.string(),
    pubDatetime: z.string(),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),

  },
});

export const collections = { articles };
