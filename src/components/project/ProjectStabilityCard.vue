<template>
  <div class="stability-card">
    <div class="stability-card__wrap">
      <h3 class="stability-card__title">{{ card.title }}</h3>

      <div class="stability-card__metrics">
        <div v-for="(metric, index) in card.metrics" :key="index" class="stability-card__metric">
          <span class="stability-card__number">
            {{ metric.value }}<span v-if="metric.value_suffix" class="stability-card__number-suffix">{{ metric.value_suffix }}</span>
          </span>
          <span class="stability-card__text" v-html="metric.text"></span>
        </div>
      </div>
    </div>

    <div class="stability-card__footer">{{ card.footer }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    defaul: () => {},
  },
});
</script>

<style lang="scss" scoped>
.stability-card {
  display: flex;
  flex-direction: column;
  background: $grey-6;
  border-radius: 24px;

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 51px;
    padding: 40px 40px 44px;

    @media screen and (max-width: 640px) {
      gap: 20px;
      padding: 24px 16px 20px;
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;

    @media screen and (max-width: 640px) {
      font-size: 18px;
    }
  }

  &__metrics {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 640px) {
      gap: 12px;
    }
  }

  &__metric {
    display: flex;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 640px) {
      gap: 30px;
    }
  }

  &__number {
    font-size: 46px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -5%;
    text-transform: uppercase;
    background: $gradient-blue-grey-2;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    &-suffix {
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -5%;

      @media screen and (max-width: 640px) {
        font-size: 12px;
      }
    }

    @media screen and (max-width: 640px) {
      font-size: 28px;
    }
  }

  &__text {
    font-family: "TTNorms";
    font-size: 14px;
    line-height: 130%;
  }

  &__footer {
    font-size: 26px;
    text-transform: uppercase;
    border-radius: 24px;
    background: linear-gradient(173deg, #CDD9E9 3.11%, rgba(205, 217, 233, 0.2) 56.19%), #FFFFFF;
    padding: 44px 40px;
    margin-top: auto;

    @media screen and (max-width: 640px) {
      font-size: 18px;
      border-radius: 16px;
      padding: 16px;
    }
  }
}
</style>
