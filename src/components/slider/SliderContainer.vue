<template>
  <div class="slider">
    <swiper-container
      slides-per-view="1.3"
      space-between="20"
      speed="500"
      overflow="visible"
      :navigation="{
        nextEl: '.slider__nav-btn--next',
        prevEl: '.slider__nav-btn--prev',
      }"
      :breakpoints="{
        950: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <SliderCard :card="slide"></SliderCard>
      </swiper-slide>
    </swiper-container>

    <div class="slider__nav">
      <button class="slider__nav-btn slider__nav-btn--prev" aria-label="Предыдущий">
        <ArrowIcon></ArrowIcon>
      </button>
      <button class="slider__nav-btn slider__nav-btn--next" aria-label="Следующий">
        <ArrowIcon></ArrowIcon>
      </button>
    </div>
  </div>
</template>

<script setup>
import ArrowIcon from "@/assets/svg/arrow.svg";
import SliderCard from "@/components/slider/SliderCard.vue";

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>


.slider {
  min-width: 0;
  position: relative;

  @media screen and (max-width: 640px) {
    swiper-container::part(container) {
      overflow: visible;
    }
  }

  &__nav {
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: hsla(228, 8%, 12%, 0.4);
    backdrop-filter: blur(19px);
    padding: 5px;
    z-index: 1;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  &__nav-btn {
    color: $white-100;
    background: none;
    border: none;
    border-radius: 12px;
    padding: 15px;
    cursor: pointer;

    &.swiper-button-disabled {
      color: $white-40;
    }

    &--prev {
      svg {
        transform: rotate(-180deg);
      }
    }

    &--next {
      border-top: 1px solid hsla(0, 0%, 100%, 0.4);
    }
  }
}
</style>
