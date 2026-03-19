import { defineContentConfig, defineCollection, defineCollectionSource } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/**',
    }),
  },
})
