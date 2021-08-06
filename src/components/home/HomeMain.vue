<template>
  <section class="home-main" id="main">
    <div class="home-main__block home-main__block--images">
      <swiper
        ref="imagesSwiper"
        :options="{
          loop: true
        }"
        :slides-per-view="1"
        class="swiper-no-swiping home-main__slider"
      >
        <swiper-slide
          class="home-main__slide"
          :style="{
            backgroundImage: `url(${require('../../assets/images/napa-team.jpg')})`
          }"
          itemscope itemtype="https://schema.org/Organization"
        >
          NAPA
          <br>
          Team
        </swiper-slide>
        <swiper-slide
          class="home-main__slide home-main__slide--empty"
          :style="{
            backgroundImage: `url(${require('../../assets/images/main-ba.jpg')})`
          }"
        >
          
        </swiper-slide>
        <swiper-slide
          class="home-main__slide"
          :style="{
            backgroundImage: `url(${require('../../assets/images/napa-dc.jpg')})`
          }"
        >
          NAPA
          <br>
          DC
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-main__block home-main__block--content">
      <swiper
        ref="contentSwiper"
        :options="{
          loop: true
        }"
        :slides-per-view="1"
        class="swiper-no-swiping home-main__slider"
      >
        <swiper-slide class="home-main__slide">
          <div class="home-main__slide-content" itemscope itemtype="https://schema.org/Organization">
            <h2 itemprop="legalName">Технопарк NAPA</h2>
            <p itemprop="description">
              Центр IT преобразования
              <br>
              и создания успешных проектов
            </p>
            <a href="#contacts" v-smooth-scroll>
              Стать резидентом
            </a>
          </div>
        </swiper-slide>
        <swiper-slide class="home-main__slide">
          <div class="home-main__slide-content" itemscope itemtype="https://schema.org/Organization">
            <h2 itemprop="legalName">Bobir Akilkhanov Tech academy</h2>
            <p itemprop="description">
              Будущее успешного IT специалиста начинается здесь
            </p>
            <a target="_blank" href="https://ba.uz/" itemprop="url">
              Перейти на сайт
            </a>
          </div>

        </swiper-slide>
        <swiper-slide class="home-main__slide">
          <div class="home-main__slide-content" itemscope itemtype="https://schema.org/Organization">
            <h2 itemprop="legalName">NAPA DC</h2>
            <p itemprop="description">
              Разработка современого и надежного програмного обеспечения
            </p>
            <a target="_blank" href="https://dc.napa.uz/" itemprop="url">
              Перейти на сайт
            </a>
          </div>
        </swiper-slide>
      </swiper>
      <div class="home-main__slider-controllers">
        <div class="home-main__slider-pagination">
          <div class="home-main__slider-pagination-current">
            {{ currentSlide }}
          </div>

          <div class="home-main__slider-pagination-delimiter"></div>

          <div class="home-main__slider-pagination-total">
            3
          </div>
        </div>
        <div class="home-main__slider-arrows">
          <div
            @click="prevSlide"
            class="home-main__slider-arrow home-main__slider-arrow--left"
          >
            <svg class="home-main__slider-arrow-icon" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6067 1L1.00009 11.6066L11.6067 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
          <div
            @click="nextSlide"
            class="home-main__slider-arrow home-main__slider-arrow--right"
          >
            <svg class="home-main__slider-arrow-icon" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6062 1L21.2128 11.6066L10.6062 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation]);


export default {
  name: 'HomeMain',

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      currentSlide: 1,
    }
  },

  computed: {
    imagesSwiper() {
      return this.$refs.imagesSwiper.$swiper
    },
    contentSwiper() {
      return this.$refs.contentSwiper.$swiper
    },
  },

  methods: {
    nextSlide() {
      this.currentSlide < 3 ? this.currentSlide++ : this.currentSlide = 1
      this.slideTo()
    },

    prevSlide() {
      this.currentSlide > 1 ? this.currentSlide-- : this.currentSlide = 3
      this.slideTo()
    },

    slideTo() {
      this.imagesSwiper.slideTo(this.currentSlide, 300, false)
      this.contentSwiper.slideTo(this.currentSlide, 300, false)
    }
  }

}
</script>

<style lang="scss">
.home-main {
  height: calc(100vh - 75px);
  position: relative;
  z-index: 0;

  @media all and (max-width: 1200px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  &__block {
    overflow: hidden;

    &--images {

    }

    &--content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  &__block--images &__slider {
    height: 100%;

    @media all and (max-width: 1200px) {
      height: 50vh;
      order: 1;
    }
  }

  &__block--images &__slide {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;

    color: #000;

    font: {
      family: 'Poppins';
      weight: 800;
      size: 64px;
    }
    line-height: 70px;
    text-transform: uppercase;
    text-align: center;

    -webkit-background-clip: text;

    transition: all 1s ease-in-out;

    @media all and (max-width: 1200px) {
      font-size: 28px;
      line-height: 32px;
    }

    &:hover {
      background-position: 80% 80%;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -2;

      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      background-image: inherit;
      background-size: inherit;
      background-position: inherit;
    }

    &:after {
      content: '';
      position: absolute;
      z-index: -1;

      width: 300px;
      height: 225px;
      left: calc(50% - 150px);
      top: calc(50% - 112.5px);

      @media all and (max-width: 1200px) {
        width: 135px;
        height: 100px;
        left: calc(50% - 67.5px);
        top: calc(50% - 50px);
      } 

      background-color: #fff;
    }

    &--empty {
      &::after {
        display: none;
      }
    }
  }

  &__block--content &__slider {
    flex: 1;
    width: 100%;

    @media all and (max-width: 1200px) {
      order: 2;
    }

    &-controllers {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 100px;

      @media all and (max-width: 1200px) {
        order: 1;
        padding: 20px 20px;
        margin-bottom: 30px;
      }
    }

    &-pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-current,
      &-total {
        font-size: 24px;
        line-height: 29px;

        @media all and (max-width: 1200px) {
          font-size: 15px;
          line-height: 18px;
        }
      }

      &-current {

      }

      &-delimiter {
        width: 168px;
        height: 1px;
        background: #F3F3F3;
        margin: 0 40px;

        @media all and (max-width: 1200px) {
          width: 40px;
          margin: 0 12px;
        }
      }

      &-total {

      }
    }

    &-arrows {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 90px;

      @media all and (max-width: 1200px) {
        min-width: 50px;
      }
    }

    &-arrow {
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }

      svg {
        width: 23px;
        height: 23px;

        @media all and (max-width: 1200px) {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  &__block--content &__slide {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 100px;

    @media all and (max-width: 1200px) {
      padding: 0 15px;
    }

    h2 {
      font: {
        family: 'Poppins', 'Montserrat', sans-serif;
        weight: normal;
        size: 48px;
      }
      line-height: 110%;

      margin: 0 0 20px;

      @media all and (max-width: 1200px) {
        font-size: 30px;
      }
    }

    p {
      font-size: 18px;
      line-height: 140%;
      margin-top: 0;
      margin-bottom: 45px;

      @media all and (max-width: 1200px) {
        font-size: 14px;
      }
    }

    a {
      display: inline-block;
      padding: 18px 34px;
      border: 1px solid #F3F3F3;
      text-transform: uppercase;
      opacity: 0.7;
      transition: all 0.5s ease-in-out;

      @media all and (max-width: 1200px) {
        font-size: 14px;
        padding: 10px 18px;
      }

      &:hover {
        opacity: 1;
      }

      &:active {
        opacity: 1;
        background-color: #fff;
        color: #131313;         
      }
    }
  }
}
</style>