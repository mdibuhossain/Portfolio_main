import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const site = defineCollection({
  loader: file("src/content/site/config.json"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    location: z.string(),
    email: z.string().email(),
    phone: z.string(),
    availability: z.object({
      status: z.enum(["available", "booked", "open-to-chat"]),
      message: z.string(),
    }),
    bio: z.object({
      short: z.string(),
      long: z.string(),
      pullQuote: z.string().optional(),
    }),
    socials: z.array(
      z.object({
        label: z.string(),
        handle: z.string(),
        url: z.string().url(),
      })
    ),
    resumeUrl: z.string().optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
    }),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    url: z.string().url().optional(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    current: z.boolean().default(false),
    summary: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    year: z.string(),
    status: z.enum(["live", "archived", "wip"]).default("live"),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    liveUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    stack: z.array(z.string()),
    role: z.string(),
    cover: z.object({
      from: z.string(),
      to: z.string(),
      text: z.string(),
    }),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills/skills.json"),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/education" }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    note: z.string().optional(),
    order: z.number().default(0),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/achievements" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    year: z.string(),
    issuer: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { site, experience, projects, skills, education, achievements };
