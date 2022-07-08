import { defineStore } from 'pinia'

import { PostsStore } from '@/interface/posts.interface'

export const usePosts = defineStore<string, PostsStore>('posts', {
  state: () => ({
    posts: []
  }),

  getters: {},

  actions: {}
})
