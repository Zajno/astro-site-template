import { defineCollection, z } from 'astro:content';

// Empty placeholder collection to silence content-config warnings.
const placeholder = defineCollection({
    loader: () => [],
    schema: z.object({}),
});

export const collections = {
    placeholder,
};
