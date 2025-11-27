<template>
  <div class="development-card">
    <h3 class="development-card__title">РАЗВИТИЕ</h3>
    <p class="development-card__text">
      Постоянное развитие проекта, внедрение новых решений и технологий для повышения качества жизни
      наших жителей.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.development-card {
  background: $gradient-blue-grey;
  border-radius: 24px;
  padding: 32px;
  color: $white-100;

  @media screen and (max-width: 767px) {
    padding: 24px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    color: $white-100;
  }
}
</style>
