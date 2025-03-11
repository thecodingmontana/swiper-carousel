<script setup lang="ts">
import { slides } from '~/data'
import { cn } from '~/lib/utils'

const containerRef = ref(null)
const { $gsap } = useNuxtApp()

const swiper = useSwiper(containerRef)
const currentActiveSlide = ref(1)

onMounted(async () => {
  await nextTick()
  animateSlide()
})

const animateSlide = () => {
  const animateElements = (elements: NodeListOf<Element>, animateOptions: gsap.TweenVars) => {
    elements.forEach((element) => {
      $gsap.from(element, animateOptions)
    })
  }

  nextTick(() => {
    const activeSlideEl = document.querySelector('.swiper-slide-active')
    const el = document.querySelector(`.swiper-two-info-${currentActiveSlide.value}`)
    const largerTextBefore = activeSlideEl?.querySelectorAll('.larger-text.before')
    const largerTextAfter = activeSlideEl?.querySelectorAll('.larger-text.after')
    const image = activeSlideEl?.querySelectorAll('.img-wrapper img')

    if (activeSlideEl && el && largerTextAfter && largerTextBefore && image) {
      const animationOptions = {
        x: 120,
        opacity: 0,
        ease: 'power3.inOut',
        duration: 0.85,
      }
      animateElements(largerTextBefore, animationOptions)
      animateElements(largerTextAfter, animationOptions)
      animateElements(image, {
        scale: 1.2,
        duration: 0.85,
        ease: 'power4.inOut',
      })
      $gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' })
    }
  })
}

const onNextSlide = async () => {
  swiper.next()
  await nextTick()
  currentActiveSlide.value = swiper.instance.value?.activeIndex as number + 1
  animateSlide()
}

const onPrevSlide = async () => {
  swiper.prev()
  await nextTick()
  currentActiveSlide.value = swiper.instance.value?.activeIndex as number + 1
  animateSlide()
}
</script>

<template>
  <section class="carousel">
    <div class="wrapper">
      <div class="row">
        <div class="swiper one">
          <ClientOnly>
            <swiper-container
              ref="containerRef"
            >
              <swiper-slide
                v-for="(slide, idx) in slides"
                :key="idx"
              >
                <div class="content">
                  <p class="larger-text before">
                    {{ slide.name }}
                  </p>
                  <div class="img-wrapper">
                    <NuxtImg
                      :src="slide.imgUrl"
                      :alt="slide.name"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <p class="larger-text after">
                    {{ slide.name }}
                  </p>
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
      <div class="carousel-footer">
        <client-only>
          <p class="counter-indicator">
            {{ currentActiveSlide }}/{{ slides.length }}
          </p>
          <p
            :class="cn(
              'swiper-two',
              `swiper-two-info-${currentActiveSlide}`,
            )"
          >
            {{ slides[currentActiveSlide -1]?.description }}
          </p>
        </client-only>
        <div class="carousel-nav">
          <button
            class="btn"
            :disabled="currentActiveSlide === 1"
            @click="onPrevSlide"
          >
            <Icon
              name="hugeicons:previous"
              class="icon"
            />
          </button>
          <button
            class="btn"
            :disabled="currentActiveSlide === slides.length"
            @click="onNextSlide"
          >
            <Icon
              name="hugeicons:next"
              class="icon"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
