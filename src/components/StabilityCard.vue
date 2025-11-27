<template>
  <div class="stability-card">
    <h3 class="stability-card__title">СТАБИЛЬНОСТЬ</h3>

    <div class="stability-card__metrics">
      <div class="stability-card__metric">
        <span class="stability-card__number">15+</span>
        <span class="stability-card__text">лет успешной работы на рынке Краснодара</span>
      </div>
      <div class="stability-card__metric">
        <span class="stability-card__number">1 млн м²</span>
        <span class="stability-card__text">квадратных метров сданного жилья</span>
      </div>
      <div class="stability-card__metric">
        <span class="stability-card__number">6 000+</span>
        <span class="stability-card__text">довольных семей</span>
      </div>
    </div>

    <div class="stability-card__footer">— РЕЗУЛЬТАТ НАДЕЖНОЙ РАБОТЫ</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.stability-card {
  background: $grey-6;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 767px) {
    padding: 24px;
    gap: 24px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: $dark-100;
  }

  &__metrics {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
  }

  &__metric {
    display: flex;
    align-items: baseline;
    gap: 16px;
  }

  &__number {
    font-size: 48px;
    font-weight: 600;
    color: #2460b0;
    line-height: 1;
    flex-shrink: 0;

    @media screen and (max-width: 767px) {
      font-size: 36px;
    }
  }

  &__text {
    font-size: 16px;
    color: $dark-100;
    line-height: 1.4;
  }

  &__footer {
    padding-top: 24px;
    border-top: 1px solid $dark-60;
    font-size: 14px;
    color: $dark-100;
  }
}
</style>
