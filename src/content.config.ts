import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*/index.yaml', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedDate: z.string().optional(),
    author: z.string().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
