<script setup lang="ts">
import Footer from '~/components/shared/Footer.vue'

useHead({
  meta: [
    { property: 'og:title', content: `Swiper Carousel` },
    {
      name: 'description',
      content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.',
    },
    {
      property: 'og:description',
      content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.',
    },
    { property: 'og:url', content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.' },
    { name: 'twitter:title', content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.' },
    {
      name: 'twitter:description',
      content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.',
    },
    { name: 'twitter:site', content: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.' },
  ],
  title: `Swiper Carousel`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Swiper Carousel',
  description: 'A Swiper carousel built with GSAP Animation, NuxtJS and TailwindCSS.',
})
</script>

<template>
  <main class="min-h-screen relative max-w-[92rem] overflow-hidden mx-auto flex flex-col p-5 sm:p-10">
    <Footer />
    <div class="flex-1">
      <slot />
    </div>
  </main>
</template>
