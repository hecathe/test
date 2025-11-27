<template>
  <div class="slider-card">
    <div class="slider-card__text">
      <div class="slider-card__text-shape"></div>
      <div class="slider-card__body">
        <div class="slider-card__date">{{ card.date }}</div>
        <h3 class="slider-card__title" v-html="card.title"></h3>
        <RouterLink to="#" class="slider-card__link">
          <ArrowIcon></ArrowIcon>
        </RouterLink>
      </div>
    </div>

    <div class="slider-card__img">
      <div class="slider-card__img-shape">
        <picture>
          <source :srcset="card.image_webp_desktop" media="(min-width: 768px)" type="image/webp" />
          <source :srcset="card.image_webp_mobile" media="(max-width: 767px)" type="image/webp" />
          <img :src="card.image" alt="дом" />
        </picture>
        <div class="slider-card__tag">
          <LocationIcon></LocationIcon>
          {{ card.tag }}
        </div>
      </div>
    </div>
  </div>

  <svg
    style="visibility: hidden; position: absolute"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
</template>

<script setup>
import ArrowIcon from "@/assets/svg/arrow.svg";
import LocationIcon from "@/assets/svg/location.svg";

const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.slider-card {
  $this: &;
  display: flex;
  align-items: flex-end;

  &:hover {
    #{$this}__date {
      color: $dark-100;
      background: $white-100;
    }

    #{$this}__title {
      color: $white-100;
    }

    #{$this}__img {
      img {
        transform: scale(1.2);
      }
    }

    #{$this}__text-shape {
      &::before {
        background: $gradient-blue;
      }
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  &__text {
    position: relative;
    flex: 1;
    height: 196px;
    margin-right: -28px;

    @media screen and (max-width: 640px) {
      flex: none;
      width: 100%;
      margin-right: 0;
      margin-bottom: -14px;
    }
  }

  &__text-shape {
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #f2f2f2;
    filter: url("#goo");
    z-index: -1;

    &::before {
      position: absolute;
      content: "";
      inset: 0;
      display: block;
      color: inherit;
      background: currentColor;
      clip-path: polygon(0% 0%, 100% 0%, calc(100% - 40px) 100%, 0% 100%);
      transition: background 250ms linear;
    }

    @media screen and (max-width: 640px) {
      &::before {
        clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 20px), 0% 100%);
      }
    }
  }

  &__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  &__link {
    margin-top: auto;
  }

  &__img {
    position: relative;
    flex: 0 0 200px;
    height: 207px;
    overflow: hidden;
    filter: url(#goo);

    @media screen and (max-width: 640px) {
      width: 100%;
      flex: 0 0 135px;
    }

    picture {
      position: absolute;
      inset: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
      transition: transform 250ms linear;
    }
  }

  &__img-shape {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    clip-path: polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%);
    
    @media screen and (max-width: 640px) {
      clip-path: polygon(0 20px, 100% 0%, 100% 100%, 0% 100%);
    }
  }

  &__date {
    width: max-content;
    font-size: 10px;
    line-height: 100%;
    color: $white-100;
    text-transform: uppercase;
    border-radius: 8px;
    background: $gradient-blue-grey;
    padding: 9px 12px;
    transition: background 250ms linear, color 250ms linear;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    transition: color 250ms linear;
    margin: 0;
  }

  &__link {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark-100;
    border-radius: 8px;
    background-color: $white-100;
    box-shadow: 0px 4px 10px 0px hsla(0, 0%, 0%, 0.04);
    margin-top: auto;
    transition: background 250ms linear;

    &:hover {
      color: $white-100;
      background-color: $blue-100;
    }
  }

  &__tag {
    position: absolute;
    right: 8px;
    bottom: 10px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    font-family: 'TTTravels Next';
    font-size: 10px;
    line-height: 100%;
    text-transform: uppercase;
    -webkit-text-stroke: thin;
    background-color: $white-100;
    border-radius: 32px;
    padding: 4px 6px;
    padding-right: 8px;
  }
}
</style>
