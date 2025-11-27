<template>
  <div class="team-card">
    <div class="team-card__content">
      <h3 class="team-card__title">КОМАНДА</h3>
      <p class="team-card__text">
        Ответственность, профессионализм и забота о каждом клиенте — это то, что отличает нашу
        команду.
      </p>
    </div>

    <div class="team-card__image">
      <div class="team-card__image-shape">
        <img src="#" alt="Команда" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.team-card {
  background: $white-100;
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    padding: 24px;
  }

  &__content {
    position: relative;
    z-index: 1;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: $dark-100;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    color: $dark-100;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    filter: url(#goo);

    @media screen and (max-width: 767px) {
      width: 150px;
      height: 150px;
    }
  }

  &__image-shape {
    position: absolute;
    inset: 0;
    clip-path: polygon(0 0, 100% 0, 100% 40px, calc(100% - 40px) 100%, 0 100%);
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
