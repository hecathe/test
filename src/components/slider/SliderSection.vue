<template>
  <section class="slider-section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <Slider :slides="slides"></Slider>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { slides } from "@/data/slides";
import Slider from "@/components/slider/SliderContainer.vue";

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15 }
  );
  observer.observe(document.querySelector(".slider-section"));
});
</script>

<style lang="scss" scoped>
.slider-section {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1.1s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 1.1s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slider-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
