<template>
  <header
    :class="{
      fixed,
      open: isOpen && isActive
    }"
  >
    <div class="header__wrapper">
      <nav class="header-nav header__nav">
        <ul class="header-nav__list">
          <li
            v-for="{ title, url, links } in links"
            :key="title"
            class="header-nav__list-item"
            :class="{
              'header-nav__list-item--dropdown': links !== undefined
            }"
          >
            <a v-if="$route.name === 'Home'" :href="url" class="header-nav__list-link" v-smooth-scroll>
              {{ title }}
            </a>
            <a v-else :href="'/' + url" class="header-nav__list-link">
              {{ title }}
            </a>
            <span
              v-if="links != undefined"
              class="header-nav__list-item-decoration"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.65674L6.65685 11.3136L12.3137 5.65674" stroke="white"/>
              </svg>
            </span>
            <ul v-if="links" class="header-nav__sublist">
              <li
                v-for="{ title, url } in links"
                :key="title"
                class="header-nav__sublist-item"
              >
                <a :href="url" class="header-nav__sublist-link">
                  {{ title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="logo">
        <a href="/">
          <img src="../../assets/images/logo.png" alt="">
        </a>
      </div>
    </div>

  </header>
</template>

<script>
  export default {
    name: "Header",

    props: {
      fixed: Boolean
    },

    data() {
      return {
        isOpen: false,
        isActive: false,
        currentScrollPos: window.scrollY,
        links: [
          {
            title: 'Главная',
            url: '#main'
          },
          {
            title: 'О нас',
            url: '#about',
            links: [
              {
                title: 'Планы',
                url: '/plans'
              },
            ]
          },
          {
            title: 'Организации',
            url: '#projects',
            links: [
              {
                title: 'BA',
                url: 'https://ba.uz'
              },
              {
                title: 'NAPA DC',
                url: 'https:/dc.napa.uz'
              },
              {
                title: 'NAPA Event',
                url: '/event-zone'
              },
              {
                title: 'NAPA CL',
                url: 'https:/cl.napa.uz'
              },
              {
                title: 'Work Station',
                url: '/workstation'
              },
              {
                title: 'IT Kids',
                url: '/napa-kids'
              }
            ]
          },
          {
            title: 'Партнеры',
            url: '#partners'
          },
          {
            title: 'Команда',
            url: '#team'
          },
          {
            title: 'Контакты',
            url: '#contacts'
          },
        ]
      }
    },

    methods: {
      checkOpen() {
        this.isOpen = window.scrollY > window.innerHeight
      }
    },

    mounted() {
      window.addEventListener('scroll', () => {
        this.checkOpen()

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
  header {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background: #1B1B1B;
    z-index: 998;

    &.fixed {
      position: fixed;
      top: 0;
      transform: translateY(-100%);
      transition: all 0.3s ease-in;

      &.open {
        transform: translateY(0);
      }
    }

    nav {
      flex: 1;
    }

    ul {
      margin-left: 0;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin-left: 50px;
        padding: 20px 0;
      }
    }

    @media all and (max-width: 1200px) {
      display: none;
    }
  }

  .header {
    &__wrapper {
      max-width: 1500px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-nav {
      &__list,
      &__sublist {
        &-item {
          position: relative;
        }

        &-link {

        }
      }

      &__list {
        &-item {
          &:hover {
            .header-nav__sublist {
              display: flex;
              align-items: stretch;
            }
          }

          &-decoration {
            margin-left: 12px;
          }
        }
      }

      &__sublist {
        display: none;
        position: absolute;
        padding-left: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        top: 100%;
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        min-width: 150%;
        background: #1B1B1B;

        &-item {
          line-height: 150%;
          padding: 15px 0;
          margin: 0 25px;

          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 5px;
            background: #F3F3F3;
            height: 1px;
            width: 0;
            transition: all 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
</style>
