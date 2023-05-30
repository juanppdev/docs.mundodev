import { defineCollection, z } from 'astro:content';

const mysqlCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const discordCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const mongodbCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const javascriptCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const htmlCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const cssCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const pythonCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

const javaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt:z.string()
    }),
  tag: z.string()
  })
});

export const Collections = {
  mysql: mysqlCollection,
  discord: discordCollection,
  mongodb: mongodbCollection,
  javascript: javascriptCollection,
  html: htmlCollection,
  css: cssCollection,
  python: pythonCollection,
  java: javaCollection,
};