<script setup lang="ts">
import { CodeIcon } from 'lucide-vue-next'
import { githubUrl, twitterUrl } from '~/types'
</script>

<template>
  <footer class="px-4 py-6 sm:py-2 text-white">
    <div class="container flex items-center p-0">
      <CodeIcon class="mr-2 size-6" />
      <p class="text-sm">
        Built by {{ " " }}
        <NuxtLink
          target="_blank"
          class="underline underline-offset-4"
          :to="twitterUrl"
        >
          thecodingmontana
        </NuxtLink>
        . Get the source code from {{ " " }}
        <NuxtLink
          target="_blank"
          class="underline underline-offset-4"
          :to="githubUrl"
        >
          GitHub
        </NuxtLink>
        .
      </p>
    </div>
  </footer>
</template>
