<template>
    <section class="home-contacts section" id="contacts">
      <div class="section__wrapper home-contacts__wrapper">
        <h2 class="content-title">Контакты</h2>
      </div>
      <div class="section__wrapper home-contacts__wrapper home-contacts__wrapper--content">
        <div
          v-if="!formClose"
          class="home-contacts__block home-contacts__block--form"
        >
          <p>
            Оставьте заявку, и мы свяжемся с вами как можно скорее
          </p>
          <form
            @submit="handleSubmit"
            class="contacts-form"
            action=""
          >
            <div class="contacts-form__input-wrapper">
              <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Имя"
                required
                class="contacts-form__input"
              >
            </div>
            <div class="contacts-form__input-wrapper">
              <input
                v-model="form.phone"
                v-mask="'+998-(##)-###-##-##'"
                type="tel"
                name="phone"
                placeholder="Телефон"
                required
                class="contacts-form__input"
              >
            </div>
            <div class="contacts-form__input-wrapper">
              <button
                type="submit"
                class="contacts-form__submit"
              >
                Оставить заявку
              </button>
            </div>
          </form>
        </div>
        <div v-else class="home-contacts__block home-contacts__block-submit">
          <h3>Спасибо! Ваша заявка принята!</h3>
        </div>
        <div class="home-contacts__block home-contacts__block--map"
              itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="legalName" content="NAPA Team">
          <div
            @click="openMap"
            class="home-contacts__map"
          >
            <img
              src="../../assets/images/contacts-map.jpg"
              alt=""
              class="home-contacts__map-image"
              :class="{
                hidden: mapOpen
              }"
            >
            <div
              v-if="mapOpen"
              class="home-contacts__map-wrapper"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1373.218387478206!2d69.20320333681265!3d41.35212596763588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43e0a115d4b09d1a!2zTmFwYSBFZHUgSHViIC0gSVQg0LDQutCw0LTQtdC80LjRjw!5e0!3m2!1sru!2sin!4v1592837087575!5m2!1sru!2sin"
                      frameborder="0" style="border:0;" allowfullscreen=""
                      aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <p>
              Адрес: <span itemprop="streetAddress">4 University street</span>, <span itemprop="addressLocality">Tashkent</span> <span itemprop="postalCode">100194</span>, <span itemprop="addressCountry">Узбекистан</span>
            </p>
            <p>
              Телефон: <a href="tel:998712000610" itemprop="telephone">+998 71 200-0610</a>
            </p>
            <p>
              Почта: <a href="mailto:info@napa.uz" itemprop="email">info@napa.uz</a>
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  import {mask} from 'vue-the-mask'

  export default {
    name: "HomeContacts",
    directives: {mask},

    data() {
      return {
        mapOpen: false,
        form: {
          name: '',
          phone: ''
        },
        formClose: false,
      }
    },

    methods: {
      openMap() {
        this.mapOpen = true
      },
      handleSubmit(e) {
        e.preventDefault();

        if(this.form.phone.match(/^\+998-\([0-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/)) {
          this.formClose = true;
        } else {
          alert('Введите корректный номер телефона!')
        }

        

      }
    }
  }
</script>

<style lang="scss">
  .home-contacts {
    &__wrapper {
      justify-content: flex-start;

      &--content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;

        @media all and (max-width: 1200px) {
          grid-template-columns: 1fr;
          grid-row-gap: 30px;
        }
      }
    }

    &__block {
      &-submit {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }

      &--form {
        @media all and (max-width: 1200px) {
          order: 2;
        }
      }

      &--map {
        @media all and (max-width: 1200px) {
          order: 1;
        }
      }
    }

    &__map {
      margin-bottom: 34px;
      position: relative;
      cursor: pointer;

      &-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        iframe {
          width: 100%;
          height: 100%;
        }
      }

      &-image {
        &.hidden {
          opacity: 0;
        }
      }

      img {
        width: 100%;
      }
    }
  }

  .contacts-form {
    margin-top: 30px;
    &__input {
      width: 100%;
      padding: 12px 7px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid rgba(235, 235, 235, 0.5);
      outline: none;

      &::placeholder {
        color: #F3F3F3;
      }

      &-wrapper {
        margin-bottom: 47px;
        min-width: 70%;
        display: inline-block;
      }
    }

    &__submit {
      margin-top: 40px;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid #F3F3F3;
      padding: 18px 34px;
    }
  }
</style>
