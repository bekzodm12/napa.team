<template>
  <section class="section home-projects" id="projects">
    <h2 class="content-title">Наши проекты</h2>

    <div class="section__wrapper home-projects__wrapper" itemscope itemtype="https://schema.org/Organization">
      <div class="home-projects__menu">
        <ul>
          <li
            v-for="({ title }, i) in projects"
            :key="title"
            @click="() => setProject(i)"
            class="home-projects__menu-item"
            :class="{
              active: currentProject === i
            }"
          >
            <span itemprop="legalName">{{ title }}</span>
          </li>
        </ul>
      </div>
      <div class="home-projects__content">
        <div class="home-projects__content-image">
          <img :src="project.image" alt="">
        </div>
        <div v-html="project.content" class="home-projects__content-text">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HomeProjects',

  data() {
    return {
      projects: [
        {
          title: 'BA',
          content: `
          <div itemscope itemtype="https://schema.org/Organization">
            <h3 itemprop="legalName">Bobir Akilkhanov Tech Academy</h3>
            <p itemprop="description"><span itemprop="legalName">Bobir Alikhanov Tech Academy</span> – это учебный центр эффективной и качественной подготовки и переподготовки специалистов международного уровня по самым востребованным профессиям современности для создания собственного стартап проекта, и осуществления экспорта IT услуг. Также возможно содействие в трудоустройстве в ТОПовые компании. </p>
            <br>
            <a href="https://ba.uz" itemprop="url">Перейти на сайт</a>
          </div>`,
          image: '/assets/images/projects/projects-napa-ba.jpg',
        },
        {
          title: 'NAPA DC',
          content: `
          <div itemscope itemtype="https://schema.org/Organization">
            <span itemprop="description">Разработка и интеграция информационных систем: Облачные решения, порталы, системная интеграция,
            заказная разработка, аутстаффинг, e–commerce, автоматизация закупок и поставок, CRM, ЭДО, биллинг мобильные приложения,
            системы мониторинга, государственные информационные системы, банковское по, электронные торговые площадки, личные кабинеты,
            автоматизация бизнес процессов, автоматизация производственных процессов)
            <br><br>
            <b itemprop="subOrganization">NAPA DC - «ПЕСОЧНИЦА»</b>
            <br>
            Сообщество разработчиков и выпускников Академии BA. Место, где можно наращивать полученные знания и практические навыки
            с целью присоединения к команде «ЭФФЕКТИВНЫХ ТЕХНОЛОГИЙ»
            <br><br>
            <b itemprop="subOrganization">NAPA DC - КОМАНДА «ЭФФЕКТИВНЫХ ТЕХНОЛОГИЙ»</b>
            <br>
            Команда опытных специалистов, увлеченных созданием инновационных решений в сфере информационных технологий: программистов,
            менеджеров, аналитиков, специалистов по тестированию, дизайнеров интерфейсов.</span>
            <br>
            <br>
            <a href="https://dc.napa.uz" itemprop="url">Перейти на сайт</a>
          </div>`,
          image: '/assets/images/projects/projects-napa-dc.jpg',
        },
        {
          title: 'NAPA Event',
          content: `Napa Event - это готовая площадка для мероприятий и ивентов.
          Мы проводим серии мероприятий в сфере IT – конференции, презентации, семинары, митапы, открытые уроки и мастер-классы на 160 человек.
          Высокие потолки, элементы промышленного интерьера, обилие света и отличная акустика создают идеальную базу для проведения мероприятий на 160 человек.
          Помещение оснащено мягкими стульями, современным мультимедийным оборудованием и приточно-вытяжной вентиляцией, везде работает Wi-Fi.
          В залах установлены проекторы, которые позволяют воспроизводить изображения и видео с отличным качеством.
          <br>
          <br>
          <a href="/event-zone">Перейти на страницу</a>`,
          image: '/assets/images/projects/projects-napa-event-zone.jpg',
        },
        {
          title: 'NAPA CL',
          content: `
          - Курсы Microsoft (Windows Server; Microsoft Exchange Server; Microsoft SQL Server; Microsoft SharePoint Server; Big Data; Безопасность)
          <br><br><br>
          - Авторизованный партнер. Статус: Silver Learning.
          <br><br><br>
          - Полное изучение продуктов Microsoft для уверенного пользования.
          <br><br><br>
          - Получение необходимых теоретических и практических знаний и навыков;
          <br><br><br>
          - Обучение использованию продуктов для разных коммерческих и бизнес целей;
          <br><br><br>
          - Изучение различных технических нюансов решений Microsoft.
          <br>
          <br>
          <a href="https://cl.napa.uz">Перейти на страницу</a>`,
          image: '/assets/images/projects/projects-napa-cl.jpg',
        },
        {
          title: 'Work Station',
          content: `Коворкинг(Co-Working) это зона с 90 рабочими местами, 6 конференц-залами. Здесь наши резиденты и студенты могут
          работать над своими проектами и стартапами, получая профессиональную помощь от специалистов NAPA.Мы предоставляем комфортные рабочие
          места и кабинеты, чтобы сосредоточиться на своем проекте, также  кабинеты для проведения конференций и встреч, с собственным кафе и кухонной зоной.
          На нашей рабочей станции, вы найдете все необходимое для вашей работы.
          <br>
          Все, что вам нужно — это ноутбук или компьютер, а всем остальным мы Вас обеспечим!
          <br>
          <br>
          <a href="/workstation">Перейти на страницу</a>`,
          image: '/assets/images/projects/projects-work-station.jpg',
        },
        {
          title: 'IT Kids',
          content: `Детский центр, предлагающий программы развития ребенка в сфере информационных технологий и инженерии в интерактивной научно-познавательной форме с элементами непрерывной игротехники.
          Учебный центр ориентирован на детей от 6 до 15 лет, которые будут проходить обучение на ос нове зарубежной методологии и специализированной платформы.
          <br>
          Мы создаем сообщество молодых, прогрессивных технарей, способных нестандартно мыслить.
          <br>
          Пилотный запуск планируется в 2021г. В программу входят различного вида соревнования, выставка работ, мероприятия и конкурсы с проектами для более углубенного интерактива с учениками.
          <br>
          <br>
          <a href="/napa-kids">Перейти на страницу</a>`,
          image: '/assets/images/projects/projects-napa-kids.jpg',
        },
      ],
      currentProject: 0,
    }
  },

  computed: {
    project() {
      return this.projects[this.currentProject]
    },
  },

  methods: {
    setProject(index) {
      this.currentProject = index
    }
  }

}
</script>

<style lang="scss">
.home-projects {
  .content-title {
    margin-bottom: 70px;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__menu {
    width: 100%;
    @media all and (max-width: 1200px) {
      padding-right: 0;
    }

    &-item {

    }
    ul {
      list-style-type: none;
      padding-left: 0;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      border-bottom: 1px solid #E6E6E6;
      margin-bottom: 35px;
      width: 100%;

      @media all and (max-width: 1200px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    li {
      font-weight: 600;
      line-height: 140%;
      position: relative;
      display: inline-block;
      cursor: pointer;
      padding-bottom: 15px;

      @media all and (max-width: 1200px) {
        flex: 33%;
        padding: 20px 0;
      }

      &:hover::after,
      &.active::after {
        width: 100%;
        opacity: 1;
      }

      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 3px;
        left: 0;
        bottom: 0px;
        background: rgba(243, 243, 243, 1);
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  &__content {
    flex: 1;
    &-image {
      margin-bottom: 40px;
      img {
        width: 100%;
      }
    }

    &-text {
      line-height: 140%;

      a {
        position: relative;
        padding-bottom: 5px;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #F3F3F3;
          bottom: -5px;

        }
      }

      h3 {
        font-size: 30px;
        line-height: 80%;
      }
    }
  }
}
</style>
