<template>
  <section class="section home-features" id="features">
    <div class="section__wrapper">
      <h2 class="content-title">Почему мы?</h2>
    </div>
    <div class="section__wrapper">
      <div class="content-section content-block__outer-wrapper">
        <div class="content-block content-block--image">
          <div class="content-block__inner-wrapper">
            <swiper
              ref="imagesSwiper"
              :options="{
                loop: true
              }"
              :slides-per-view="1"
              class="home-features__slider"
            >
              <swiper-slide
                class="home-features__slide"
              >
                <img src="/assets/images/why-us-1.jpg" alt="">
              </swiper-slide>
              <swiper-slide
                class="home-features__slide"
              >
                <img src="/assets/images/why-us-2.jpg" alt="">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="content-block content-block--text">
          <swiper
            ref="contentSwiper"
            :options="{
              loop: true
            }"
            :slides-per-view="1"
            class="swiper-no-swiping home-features__slider"
          >
            <swiper-slide class="home-features__slide">
              <div class="home-features__slide-content">
                <h2>Преимущества для резидентов технопарка</h2>
                <ul>
                  <li>- Современный и развитый офис с удобствами</li>
                  <li>- Продвижение интересов резидентов на международных рынках, позиционирование их в каждом технологическом городе мира</li>
                  <li>- Наличие консультационного центра по юридическим, финансовым и налоговым вопросам</li>
                  <li>- Представление интересов резидентов на правительственном уровне</li>
                  <li>- Возможность осуществления совместных проектов с другими резидентами ассоциации, а также продвижение продукта на местном и зарубежных рынках</li>
                  <li>- Работа коворкинга: 24/7 (льготное ночное время)</li>
                  <li>- Наличие собственной “Песочницы” для проведения разработок CLOUD 
  и других ИТ решений</li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide class="home-features__slide">
              <div class="home-features__slide-content">
                <h2>Наши конкурентные преимущества</h2>
                <ul>
                  <li>- Сформировавшаяся команда с большим опытом</li>
                  <li>- Четкое видение и наличие стратегии</li>
                  <li>- Партнерские соглашения с зарубежными и локальными компаниями</li>
                  <li>- Наличие международных и локальных экспертов, эдвайзеров</li>
                  <li>- Тренинги от международных и локальных экспертов</li>
                  <li>- Административные ресурсы</li>
                  <li>- Льготы IT парка</li>
                  <li>- Наличие технологического здания (Демо версия Технопарка)</li>
                </ul>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="home-features__slider-controllers">
          <div class="home-features__slider-pagination">
            <div class="home-features__slider-pagination-current">
              {{ currentSlide }}
            </div>

            <div class="home-features__slider-pagination-delimiter"></div>

            <div class="home-features__slider-pagination-total">
              2
            </div>
          </div>
        <div class="home-features__slider-arrows">
          <div
            @click="prevSlide"
            class="home-features__slider-arrow home-features__slider-arrow--left"
          >
            <svg class="home-features__slider-arrow-icon" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6067 1L1.00009 11.6066L11.6067 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
          <div
            @click="nextSlide"
            class="home-features__slider-arrow home-features__slider-arrow--right"
          >
            <svg class="home-main__slider-arrow-icon" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6062 1L21.2128 11.6066L10.6062 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="section__wrapper ">
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
export default {
  name: 'HomeFeatures',

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
      this.currentSlide < 2 ? this.currentSlide++ : this.currentSlide = 1
      this.slideTo()
    },

    prevSlide() {
      this.currentSlide > 1 ? this.currentSlide-- : this.currentSlide = 2
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
.home-features {
  .content-block {
    flex: 1;
    overflow: hidden;
    &__outer-wrapper {
      width: 100%;
      grid-column-gap: 100px;

      @media all and (max-width: 1200px) {
        grid-column-gap: 0;
      }
    }
    &__inner-wrapper {
      width: 100%;
      overflow: hidden;
    }
    &--text {
      flex-direction: column;
      padding-top: 0;
      h2 {
        margin-top: 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        li {
          margin-right: 15px;
          display: inline-block;
          margin-bottom: 25px;;
        }
      }
    }
    &--image .home-features__slide {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }
    
  }
  &__slider {
    flex: 1;
    width: 100%;
    &-controllers {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin-top: 35px;
      padding-left: 150px;
      grid-column-start: 1;
      grid-column-end: 3;

      @media all and (max-width: 1200px) {
        order: 1;
        padding: 0 20px;
        margin-bottom: 10px;
        margin-top: 10px;
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

  h2.content-title {
    margin-bottom: 90px;
  }
}
</style>