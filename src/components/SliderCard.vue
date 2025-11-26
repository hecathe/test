<template>
  <div class="slider-card">
    <div class="slider-card__desc">
      <div class="slider-card__text">
        <div class="slider-card__date">{{ card.date }}</div>
        <h3 class="slider-card__title" v-html="card.title"></h3>
      </div>

      <RouterLink to="#" class="slider-card__link">
        <ArrowIcon></ArrowIcon>
      </RouterLink>
    </div>

    <div class="slider-card__img">
      <picture>
        <source
          :srcset="card.image_1"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          :srcset="card.image_mobile"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <img :src="card.image" alt="дом" />
      </picture>
    </div>

    <svg
      width="0"
      height="0"
      viewBox="0 0 279 196"
      style="position: absolute"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="descClip">
        <path
          d="M0 25C0 11.1929 11.1929 0 25 0H263.758C273.526 0 280.688 9.18768 278.304 18.6605L236.532 184.66C234.854 191.327 228.86 196 221.985 196H25C11.1929 196 0 184.807 0 171V25Z"
        />
      </clipPath>
    </svg>

    <svg
      width="0"
      height="0"
      viewBox="0 0 197 208"
      style="position: absolute"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="imgClip">
        <path
          d="M44.4911 15.0909C46.7382 6.21605 54.7244 0 63.8793 0H171.79C185.597 0 196.79 11.1929 196.79 25V182.644C196.79 196.451 185.597 207.644 171.79 207.644H15.0077C5.23052 207.644 -1.93327 198.44 0.4666 188.962L44.4911 15.0909Z"
        />
      </clipPath>
    </svg>
  </div>
</template>

<script setup>
import ArrowIcon from "@/assets/svg/arrow.svg";

const props = defineProps({
	card: {
		type: Object,
		default: () => {},
	}
})
</script>

<style lang="scss" scoped>
.slider-card {
  $this: &;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &:hover {
    #{$this}__desc {
      color: $white-100;

      &::before {
        width: 100%;
        height: 100%;
        border-radius: 0;
        right: 0;
        bottom: 0;
      }
    }

    #{$this}__date {
      color: $dark-100;
      background: $white-100;
    }

	#{$this}__img {
		img {
			transform: scale(1.2);
		}
	}
  }

  &__desc {
    position: absolute;
	left: 0;
	min-width: 280px;
    width: 280px;
    height: 196px;
    display: flex;
    flex-direction: column;
    background-color: $grey-6;
    border-radius: 20px;
    clip-path: url(#descClip);
    -webkit-clip-path: url(#descClip);
    padding: 15px;
    overflow: hidden;
    transition: color 250ms linear;

    &::before {
      position: absolute;
      content: "";
      right: -50%;
      bottom: -50%;
      width: 0;
      height: 100%;
      border-radius: 100%;
      background: $gradient-blue;
      transition: all 250ms linear;
      z-index: -1;
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

  &__img {
    width: 196px;
    height: 207px;
    // position: relative;
    // right: 2%;
    border-radius: 20px;
    clip-path: url(#imgClip);
    -webkit-clip-path: url(#imgClip);

	img {
		transition: transform 250ms linear;
	}
  }
}
</style>
