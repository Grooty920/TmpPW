import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    category: z.string().default("随笔"),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
