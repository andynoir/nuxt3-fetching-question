<template>
  <main class="main">
    <h1>will not work page</h1>
    <hr>

    <nuxt-link to="/">
      index page
    </nuxt-link>

    <hr>

    <nuxt-link to="/will-work">
      will work page
    </nuxt-link>
  </main>
</template>

<script setup lang="ts">
import { usePosts } from '@/stores/posts'
import { Post } from '@/interface/posts.interface'

definePageMeta({
  layout: 'will-not-work'
})

const { data } = await useFetch(() => 'https://jsonplaceholder.typicode.com/posts', { transform: (data: Post[]) => data.slice(0, 10) })

const posts = usePosts()
posts.posts = data.value
</script>
