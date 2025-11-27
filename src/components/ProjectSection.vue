<template>
  <section class="project-section">
    <div class="container">
      <h2 class="project-section__title">ПРОЕКТ ЭТО</h2>
      
      <div class="project-section__grid">
        <!-- Левая большая карточка -->
        <StabilityCard class="project-section__stability" />
        
        <!-- Правая колонка с двумя карточками -->
        <div class="project-section__right">
          <DevelopmentCard class="project-section__development" />
          <TeamCard class="project-section__team" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import StabilityCard from '@/components/StabilityCard.vue';
import DevelopmentCard from '@/components/DevelopmentCard.vue';
import TeamCard from '@/components/TeamCard.vue';
</script>

<style lang="scss" scoped>
.project-section {
  padding: 60px 0;

  &__title {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 40px;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      font-size: 32px;
      margin-bottom: 24px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 24px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 1024px) {
      gap: 20px;
    }
  }
}
</style>