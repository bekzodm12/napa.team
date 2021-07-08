<template>
    <div
      class="mobile-menu"
      :class="{
        open: (isOpen && isActive) || isModalOpen
      }"
    >
      <div class="logo">
        <a href="/">
          <img src="../../assets/images/logo.png">
        </a>
      </div>

      <a @click="toggleModal" class="menu">
        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="25" height="1" fill="#C4C4C4"/>
          <rect y="9" width="25" height="1" fill="#C4C4C4"/>
          <rect y="18" width="25" height="1" fill="#C4C4C4"/>
        </svg>
      </a>
      <div v-show="isModalOpen" class="mobile-menu-overlay">
        <div class="mobile-menu-overlay__menu">
          <div class="logo">
            <a href="/#main">
              <img src="../../assets/images/logo.png">
            </a>
          </div>

          <a @click="toggleModal" class="menu">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.653809" width="23.1169" height="0.924677" transform="rotate(45 0.653809 0)" fill="#F3F3F3"/>
              <rect width="23.1169" height="0.924677" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.3462 0)" fill="#F3F3F3"/>
            </svg>
          </a>
        </div>
        <div class="mobile-menu-overlay__content">
          <ul class="mobile-menu-overlay__list">
            <li class="mobile-menu-overlay__list-item" v-for="{ title, url } in lists" :key="title">
              <a @click="toggleModal" :href="url" v-smooth-scroll>{{ title }}</a>
            </li>
          </ul>
          <a class="mobile-menu-overlay__button" href="#contacts">Стать резидентом</a>

          <a class="mobile-menu-overlay__link" href="tel:998712000610">+998 71 200-0610</a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "MobileHeader",

    data() {
      return {
        isModalOpen: false,
        isOpen: true,
        isActive: false,
        currentScrollPos: window.scrollY,
        lists: [
          {
            title: 'О Нас',
            url: '#about'
          },
          {
            title: 'Наши преимущества',
            url: '#features'
          },
          {
            title: 'Наши проекты',
            url: '#projects'
          },
          {
            title: 'Наши партнеры',
            url: '#partners'
          },
          {
            title: 'Наша команда',
            url: '#team'
          },
          {
            title: 'Контакты',
            url: '#contacts'
          }
        ]
      }
    },

    methods: {
      toggleModal() {
        this.isModalOpen = !this.isModalOpen
      },
    },

    mounted() {
      window.addEventListener('scroll', () => {

        if(this.currentScrollPos > window.scrollY) {
          this.isActive = true
        } else {
          this.isActive = false
        }

        this.currentScrollPos = window.scrollY
      })
    }
  }
</script>

<style lang="scss">
  .mobile-menu {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #1B1B1B;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;

    &.open {
      transform: translateY(0);
    }

    .logo {
      width: 35px;

      a {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    @media all and (max-width: 1200px) {
      display: flex;
    }

    &-overlay {
      position: fixed;
      z-index: 3;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150vh;
      background-color: #1B1B1B;

      &__menu {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 15px;
        margin-bottom: 40px;
      }
      &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-align: center;
        margin-bottom: 30px;
        &-item {
          padding: 0;
          font-size: 18px;
          line-height: 80%;
          margin-bottom: 30px;
        }
      }

      &__button {
        font-size: 18px;
        line-height: 140%;
        padding: 10px 18px;
        border: 1px solid #F3F3F3;
        margin-bottom: 30px;
      }

      &__link {
        font-size: 18px;
        line-height: 140%;
      }
    }
  }
</style>
