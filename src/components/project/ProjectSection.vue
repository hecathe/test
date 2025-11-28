<template>
  <section class="project-section" ref="projectSection">
    <div class="container">
      <h2 class="project-section__title appear" ref="projectTitle">Проект это</h2>

      <div class="project-section__grid">
        <div class="appear-left" ref="stabilityWrapper">
          <ProjectStabilityCard :card="stability" />
        </div>

        <div class="project-section__wrap">
          <div class="appear-top-right" ref="topRight">
            <ProjectDevelopmentCard :card="development" />
          </div>
          <div class="appear-bottom-right" ref="bottomRight">
            <ProjectTeamCard :card="team" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { projectCards } from "@/data/project-cards";
import ProjectStabilityCard from "@/components/project/ProjectStabilityCard.vue";
import ProjectDevelopmentCard from "@/components/project/ProjectDevelopmentCard.vue";
import ProjectTeamCard from "@/components/project/ProjectTeamCard.vue";

const { stability, development, team } = projectCards;

const projectSection = ref(null);
const projectTitle = ref(null);
const stabilityWrapper = ref(null);
const topRight = ref(null)
const bottomRight = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
  );

  [projectTitle, stabilityWrapper, topRight, bottomRight].forEach((el) => {
    if (el.value) observer.observe(el.value);
  });
});
</script>

<style lang="scss" scoped>
.project-section {
  padding: 60px 0;
  overflow: hidden;

  &__title {
    font-size: 48px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 40px;

    @media screen and (max-width: 640px) {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: minmax(auto, 658px) minmax(auto, 692px);
    gap: 20px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 8px;
    }
  }
}
</style>
