<template>
  <header class="the-header">
    <div class="the-header__posts">
      <p v-for="(post, index) in posts.posts" :key="index" class="the-header__post">
        {{ post.title }}
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { usePosts } from '@/stores/posts'

const posts = usePosts()

</script>
