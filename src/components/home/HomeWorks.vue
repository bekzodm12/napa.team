<template>
  <section class="section home-works" id="works">

    <div class="section__wrapper home-works__wrapper">
      <h2 class="content-title">Чем мы занимаемся</h2>
    </div>

    <div class="section__wrapper home-works__wrapper">
      <div class="home-works__menu">
        <ul>
          <li
            v-for="({ title }, i) in splitedWorks[0]"
            :key="title"
            @click="() => setProject(i)"
            class="home-works__menu-item"
            :class="{
              active: currentProject === i
            }"
          >
            {{ title }}

            <div class="home-works__menu-item-arrow">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07031 15.1421L14.1414 8.07102L7.07031 0.999954" stroke="#F3F3F3"/>
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-works__content">
        <div class="home-works__content-text">
          <template v-if="currentProject === 0">
            <div>
              <p>Обучаем по направлениям :</p>
              <ul>
                <li>- Программирование</li>
                <li>- HR-менеджемент</li>
                <li>- Digital-маркетинг</li>
                <li>- Project management</li>
              </ul>
              <p>А также переподготовка и повышение квалификации по системе корпоративного обучения.</p>  
            </div>
          </template>
          <template v-if="currentProject === 1">
            <div>
              <p>Внедрение в компании методологий и технологий управления для увеличения эффективности работы сотрудников и предприятия в целом.</p>
              <ul>
                <li>
                  ERP - Програма для управления бизнес-процессами
                </li>
                <li>
                  EMK - Единая медицинская карта
                </li>
                <li>
                  DLP - Система для предотвращения утечек
                </li>
                <li>
                  CЭД - Система для электронного документооборота
                </li>
                <li>
                  LMS - Хранилище учебных материалов
                </li>
              </ul>
            </div>
            <a @click="setActiveModal" title="Подробнее">Подробнее</a>   
          </template>
          <template v-if="currentProject === 2">
            <div>
              <p>Широкий набор услуг и полный цикл реализации цифровых бизнес-проектов.</p>
              <ul>
                <li>IT‐аутсорсинг, IT‐услуги</li>
                <li>Торговые площадки</li>
                <li>Онлайн услуги</li>
                <li>Интернет магазины</li>
                <li>Информационная безопасность</li>
                <li>Полный цикл работы с Программными обеспечениями</li>
              </ul>  
            </div>

            <a @click="setActiveModal" title="Подробнее">Подробнее</a>
          </template>
          <template v-if="currentProject === 3">
            <div>
              <p>База для помощи в реализации инновационных проектов.</p>
              <ul>
                <li>- Стартап-акселераторы</li>
                <li>- Бизнес-инкубаторы</li>
              </ul>  
              <a title="Подробнее" href="https://dc.napa.uz">Подробнее</a>   
            </div>            
          </template>
          <template v-if="currentProject === 4">
            <p>Предоставлении помощи между инвесторами <br />и предпринимателями.</p>
            <ul>
              <li>Инвестиционные Фонды</li>
              <li>Венчурные фонды</li>
              <li>Клуб Бизнес Ангелов</li>
              <li>Союзы</li>
              <li>Банки</li>
              <li>Социальные Фонды</li>
              <li>Робототехника</li>
              <li> - разработка автоматизированных технических систем</li>
            </ul>
          </template>
        </div>
      </div>
      <div class="home-works__menu home-works__menu--mobile">
        <ul>
          <li
            v-for="({ title }, i) in splitedWorks[1]"
            :key="title"
            @click="() => setProject(currentProject + i + 1)"
            class="home-works__menu-item"
          >
            {{ title }}

            <div class="home-works__menu-item-arrow">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07031 15.1421L14.1414 8.07102L7.07031 0.999954" stroke="#F3F3F3"/>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-works-modal" v-show="isModalActive">
      <div class="home-works-modal__wrapper">
        <a @click="closeModal" href="#" class="home-works-modal__close">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.57666" width="20.3973" height="0.815892" transform="rotate(45 0.57666 0)" fill="#F3F3F3"/>
            <rect width="20.3973" height="0.815892" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.4233 0)" fill="#F3F3F3"/>
          </svg>
        </a>
        <template v-if="currentProject === 2">
          <ul>
            <li>IT‐аутсорсинг, IT‐услуги</li>
            <li>Торговые площадки</li>
            <li>Онлайн услуги</li>
            <li>Интернет магазины</li>
            <li>Информационная безопасность </li>
            <li>Полный цикл работы с программными обеспечениями:</li>
            <li>- разработка</li>
            <li>- внедрение</li>
            <li>- адаптация</li>
            <li>- локализация</li>
            <li>- лицензирование</li>
            <li>Система автоматизации медицинских учреждений</li>
            <li>IP телефония</li>
            <li>Использование востребованных технологий:</li>
            <li>Blockchain</li>
            <li>Data Science</li>
          </ul>  
        </template>
        <template v-if="currentProject === 1">
          <ul>
            <li>АСКОУ - Автоматизированная система контроля и оперативного учета.</li>
            <li>ERP - Програма для управления бизнес-процессами</li>
            <li>EMK - Единая медицинская карта</li>
            <li>DLP - Система для предотвращения утечек</li>
            <li>CЭД - Система для электронного документооборота</li>
            <li>LMS - Хранилище учебных материалов </li>
            <li>ITSM - Концепция управления IT подразделениями</li>
            <li>RFID - Технология автоматического идентицифирования объектов с помощью радиоволн</li>
            <li>VOIP - Телефонная связь по протоколу IP</li>
            <li>KW - Мобильное и дистанционное обучение сотрудников</li>
            <li>MS - Management system / Система управления </li>
            <li>CRM - Система управления взаимоотношениями с клиентами</li>
          </ul>  
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeWorks',

  data() {
    return {
      works: [
        {
          title: 'Обучение',
        },
        {
          title: 'Автоматизация бизнес процессов',
        },
        {
          title: 'Разработка для E-commerce',
        },
        {
          title: 'Технопарк',
        },
        {
          title: 'Фин. институты '
        },
      ],
      currentProject: 0,
      isModalActive: false,
      device: {
        width: 0,
        height: 0
      }
    }
  },

  computed: {
    splitedWorks() {
      if(this.device.width <= 1200) {
        const firstBlock = this.works.filter((work, i) => {
          return i <= this.currentProject
        })
        const secondBlock = this.works.filter((work, i) => {
          return i > this.currentProject
        })

        return [firstBlock, secondBlock]
      } else {
        return [this.works]
      }
      
    }
  },

  methods: {
    setProject(index) {
      this.currentProject = index
    },
    setActiveModal() {
      this.isModalActive = true;
    },
    closeModal(e) {
      e.preventDefault();
      this.isModalActive = false;
    }
  },

  mounted() {
    document.addEventListener('resize', () => {
      this.device.width = window.innerWidth
      this.device.height = window.innerHeight
    })
    this.device.width = window.innerWidth
    this.device.height = window.innerHeight
  }

}
</script>

<style lang="scss">
.home-works {
  h2 {
    justify-content: flex-start;
  }
  &__wrapper {
    justify-content: space-between;
    align-items: stretch;
  }
  &__menu {
    flex: 0 33%;

    @media all and (max-width: 1200px) {
      padding-right: 0;
      flex: 1;
      width: 100%;
    }

    &--mobile {
      display: none;

      @media all and (max-width: 1200px) {
        display: block;
      }
    }

    &-item {
      &.active &-arrow{
        transform: rotate(90deg);
      }
      &-arrow {
        position: absolute;
        right: 10px;
        top: 0px;
        transition: all 0.3s ease-in-out;
        svg {
          width: 10px;
          height: 10px;
        }
      }
    }
    ul {
      list-style-type: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;

      @media all and (max-width: 1200px) {
        // flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    li {
      margin-bottom: 40px;
      font-weight: 600;
      line-height: 140%;
      padding-bottom: 10px;
      position: relative;
      display: inline-block;
      cursor: pointer;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      @media all and (max-width: 1200px) {
        width: 100%;
      }

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: -3.5px;
        background: #C4C4C4;
        opacity: 1;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  &__content {
    flex: 0 50%;

    @media all and (max-width: 1200px) {
      margin-top: 30px;
      margin-bottom: 50px;
    }
    &-image {
      margin-bottom: 40px;
      img {
        width: 100%;
      }
    }

    &-text {
      line-height: 140%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      height: 100%;
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 12px;
      }
      a {
        position: relative;
        margin-top: 30px;
        display: inline-block;
        cursor: pointer;
        margin-bottom: 5px;
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #F3F3F3;
        }
      }
    }
  }

  &-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    &__wrapper {
      padding: 58px 116px 84px 72px;
      background: #1F1F1F;
      color: #fff;
      position: relative;

      @media all and (max-width: 1200px) {
        height: 100%;
        width: 100%;
        overflow: auto;
        padding: 60px 20px 20px;
      }
    }

    &__close {
      position: absolute;
      right: 50px;
      top: 35px;
      @media all and (max-width: 1200px) {
        right: 30px;
        top: 30px;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 12px;
    }
  }
}
</style>
