<template>
  <section class="slider-section section">
    <div class="container">
      <Slider :slides="slides"></Slider>
    </div>
  </section>
</template>

<script setup>
import { slides } from "@/data/slides";
import Slider from "@/components/Slider.vue";
</script>
