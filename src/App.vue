<template>
  <main>
    <section>
      <div class="container">
        <Slider :slides="slides"></Slider>
      </div>
    </section>
  </main>
</template>

<script setup>
import Slider from "@/components/Slider.vue";

const slides = [
  {
    date: "до 12 июня 2025",
    title: "Сертификат на мебель<br> в подарок",
    tag: "Легион",
    image: "./assets/images/image-1.jpg",
    image_1: "./assets/images/image-1.webp",
    image_mobile: "./assets/images/image-1_mobile.webp",
  },
  {
    date: "до 12 июня 2025",
    title: "Выгодное<br>предложение<br>на старте продаж",
    tag: "Полет",
    image: "../assets/images/image-1.jpg",
  },
  {
    date: "до 12 июня 2025",
    title: "Отделка<br> в подарок<br> при покупке",
    tag: "Воскресенье",
    image: "../assets/images/image-1.jpg",
  },
  {
    date: "до 12 июня 2025",
    title: "Выгодное<br> предложение<br> на старте продаж",
    tag: "воскресенье",
    image: "../assets/images/image-1.jpg",
  },
];
</script>

<style scoped></style>
