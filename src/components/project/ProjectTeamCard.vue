<template>
  <div class="team-card">
    <div class="team-card__shape"></div>
    <div class="team-card__content">
      <h3 class="team-card__title">{{ card.title }}</h3>
      <p class="team-card__text">{{ card.text }}</p>
    </div>

    <div class="team-card__image">
      <div class="team-card__image-shape">
        <picture>
          <source :srcset="card.image_webp_desktop" media="(min-width: 768px)" type="image/webp" />
          <source :srcset="card.image_webp_mobile" media="(max-width: 767px)" type="image/webp" />
          <img :src="card.image" alt="дом" />
        </picture>
      </div>
    </div>

    <GooFilter></GooFilter>
  </div>
</template>

<script setup>
import GooFilter from "@/components/GooFilter.vue";

const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.team-card {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 24px;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    border: 1px solid #ddddde;
    top: 50px;
    border-radius: 24px;
    z-index: -1;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  &__shape {
    position: absolute;
    inset: 0;
    display: inline-block;
    color: #ddddde;
    filter: url("#goo");
    z-index: -1;
    overflow: hidden;

    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
    }

    &::before {
      inset: 0;
      color: inherit;
      background: currentColor;
      clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
    }

    &::after {
      inset: 1px;
      background: $white-100;
      border-radius: 24px;
      clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
    }
  }

  &__content {
    max-width: 320px;
    padding-left: 40px;
    padding-bottom: 60px;

    @media screen and (max-width: 640px) {
      max-width: 100%;
      padding: 16px;
    }
  }

  &__title {
    font-size: 26px;
    line-height: 130%;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 12px;

    @media screen and (max-width: 640px) {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }

  &__text {
    font-family: "TTNorms";
    line-height: 130%;
    color: $dark-60;
    margin: 0;
  }

  &__image {
    position: relative;
    width: 260px;
    height: 300px;
    filter: url(#goo);

    @media screen and (max-width: 640px) {
      width: 100%;
      height: 190px;
    }
  }

  &__image-shape {
    position: absolute;
    inset: 0;
    clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
    border-radius: 23px;
    overflow: hidden;

    @media screen and (max-width: 640px) {
      clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}
</style>
