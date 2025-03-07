import { z, defineCollection } from "astro:content";

const providerSchema = z.object({
  name: z.string(),
  url: z.string(),
});

// IPv6 Prefixes
const prefixes = defineCollection({
  type: "content",
  schema: z.object({
    prefix: z.string(),
    uri: z.string(),
    type: z.enum(["pa", "pi"]),
    rir: z.enum(["arin", "ripe"]),
    provider: providerSchema,
  }),
});

// Points of Presence
const pops = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    serverName: z.string(),
    location: z.string(),
    type: z.enum(["vps", "colo"]),
    provider: providerSchema,
  }),
});

export const collections = {
  prefix: prefixes,
  pop: pops,
};
