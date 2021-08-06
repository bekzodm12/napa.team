<template>
  <div class="page-workstation page">
    <div class="page__section page__section--solid">
      <h1>NAPA Event Zone</h1>
      <p>Площадка для проведения различных мероприятий в сфере IT на 160 человек.</p>
    </div>
    <div class="page__section page__section--same-size-blocks">
      <div class="page__block page__block--image">
        <img src="../../assets/images/event-zone/1.jpg" alt="">
        <img src="../../assets/images/event-zone/2.jpg" alt="">
      </div>
      <div class="page__block page__block--text page__block--text-justify">
        <div class="page__content">
          <h2>160 посадочных мест</h2>
          <p>
            Идеальная база для проведения различных мероприятий на 160 человек.
          </p>
        </div>
        <div class="page__content">
          <h2>Професcиональная техника</h2>
          <p>
           Мы обеспечиваем полную техническую поддержку проходящих мероприятий: настройка звука, света и аппаратуры.
          </p>
        </div>
        <div class="page__content">
          <h2>Кафе</h2>
          <p>
            У нас есть собственное кафе,  мы берем на себя организацию кофе-брейков, кейтерингов, бизнес-ланчей и видео-записей.
          </p>
        </div>
        <div class="page__content">
          <h2>Wi-Fi </h2>
          <p>
            В нашем здании подключен высокоскоростной интернет, вы можете подключиться к wi-fi в любое время находясь на территории NAPA.
          </p>
        </div>

        <a href="#contacts" class="page__link-block" v-smooth-scroll>
          Арендовать эвент зону
        </a>
      </div>
    </div>
    <HomeContacts />
  </div>
</template>

<script>
import HomeContacts from '../../components/home/HomeContacts'
export default {
  metaInfo: {
    title: 'Event zone',
    titleTemplate: '%s - Napa.team',
    meta: [
        { name: 'description', content: 'Площадка для проведения различных мероприятий в сфере IT на 160 мест' },
        { name: 'keywords', content: 'Ивент зона, проведения IT мероприятий, Зона технопарка'}
      ],
  },

  components: {
    HomeContacts
  }
}
</script>

<style lang="scss">
header {
  top: 0;
}
</style>