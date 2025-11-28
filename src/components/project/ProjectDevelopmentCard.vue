<template>
  <div class="development-card">
    <div class="development-card__shape"></div>
    <div class="development-card__content">
      <h3 class="development-card__title">{{ card.title }}</h3>
      <p class="development-card__text">{{ card.text }}</p>
    </div>

    <GooFilter></GooFilter>
  </div>
</template>

<script setup>
import GooFilter from '@/components/GooFilter.vue';

const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.development-card {
  position: relative;
  border-radius: 24px;
  padding: 45px 40px 70px;
  padding-right: 35%;
  color: $white-100;
  margin-bottom: -32px;

  @media screen and (max-width: 640px) {
    padding: 20px 16px;
    padding-bottom: 50px;
    margin-bottom: -42px;
  }

  &__shape {
    position: absolute;
    inset: 0;
    display: inline-block;
    color: $grey-blue;
    filter: url("#goo");
    z-index: -1;

    &::before {
      position: absolute;
      content: "";
      inset: 0;
      display: block;
      color: inherit;
      background: currentColor;
      clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 50px), 0% 100%);
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 16px;

    @media screen and (max-width: 640px) {
      font-size: 18px;
    }
  }

  &__text {
    font-family: 'TTNorms';
    line-height: 130%;
    color: $white-100;
    margin: 0;
  }
}
</style>
