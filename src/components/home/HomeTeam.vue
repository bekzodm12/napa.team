<template>
  <section class="home-team" id="team">
    <div class="home-team__wrapper">
      <h2 class="content-title">Наша команда</h2>
      <div class="home-team__content">
        <div class="home-team__controllers">
          <div
            @click="prevSlide"
            class="home-team__controller home-team__controller-arrow home-team__controller-arrow--left"
          >
            <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6067 1L1.00009 11.6066L11.6067 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
          <div
            @click="nextSlide"
            class="home-team__controller home-team__controller-arrow home-team__controller-arrow--right"
          >
            <svg viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6062 1L21.2128 11.6066L10.6062 22.2132" stroke="#F3F3F3"/>
            </svg>
          </div>
        </div>
        <swiper
          ref="swiper"
          :options="{
            slidesPerView: 1.5,
            spaceBetween: 20,
            loop: true,
            breakpoints: {
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              }
            }
          }"
          class="home-team__slider"
          itemscope itemtype="https://schema.org/Organization"
        >
            <meta itemprop="legalName" content="NAPA Team">
            <meta itemprop="location" content="Uzbekistan">
            <swiper-slide class="home-team__slide" itemprop="founder" itemscope itemtype="https://schema.org/Person">
              <div class="home-team__slide-image">
                <img src="../../assets/images/team/bobir-alikhanov.jpg" alt="" itemprop="image">
              </div>
              <div class="home-team__slide-content">
                <h3><span itemprop="givenName">Бобир</span> <span itemprop="familyName">Акилханов</span></h3>
                <span>Учредитель</span>
              </div>
            </swiper-slide>
            <swiper-slide class="home-team__slide" itemprop="founder" itemscope itemtype="https://schema.org/Person">
              <div class="home-team__slide-image">
                <img src="../../assets/images/team/alisher-annazarov.jpg" alt="" itemprop="image">
              </div>
              <div class="home-team__slide-content">
                <h3><span itemprop="givenName">Алишер</span> <span itemprop="familyName">Анназаров</span></h3>
                <span>Учредитель</span>
              </div>
            </swiper-slide>
            <swiper-slide class="home-team__slide" itemprop="founder" itemscope itemtype="https://schema.org/Person">
              <div class="home-team__slide-image">
                <img src="../../assets/images/team/shuhrat-hasanbaev.jpg" alt="" itemprop="image">
              </div>
              <div class="home-team__slide-content">
                <h3><span itemprop="givenName">Шухрат</span> <span itemprop="familyName">Хасанбаев</span></h3>
                <span>Учредитель</span>
              </div>
            </swiper-slide>
            <swiper-slide class="home-team__slide" itemprop="member" itemscope itemtype="https://schema.org/Person">
              <div class="home-team__slide-image">
                <img src="../../assets/images/team/sophia-kim.jpg" alt="" itemprop="image">
              </div>
              <div class="home-team__slide-content">
                <h3><span itemprop="givenName">Софья</span> <span itemprop="familyName">Ким</span></h3>
                <span>Вр.и.о. Генеральный Директор</span>
            </div>
          </swiper-slide>
        </swiper>
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
    name: 'HomeTeam',

    components: {
      Swiper,
      SwiperSlide,
    },

    computed: {
      swiper() {
        return this.$refs.swiper.$swiper
      }
    },

    methods: {
      nextSlide() {
        this.swiper.slideNext();
      },
      prevSlide() {
        this.swiper.slidePrev();
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-team {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrapper {
    display: flex;
    max-width: 1064px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    width: 100%;
    position: relative;
  }

  &__controllers {
    position: absolute;
    width: calc(100% + 80px);
    left: -40px;
    top: calc(50% - 10px);
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 1200px) {
      display: none;
    }
  }

  &__controller {
    cursor: pointer;
    display: flex;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    svg {
      width: 20px;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__slider {
    width: 100%;

    @media all and (max-width: 1200px) {
      padding: 0 20px;
    }
  }

  &__slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &-content {
      padding-top: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15px 30px;

      h3 {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        margin: 0 0 10px;
      }

      span {
        font-size: 10px;
        line-height: 140%;
      }
    }

    &-image {
      width: 100%;

      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
