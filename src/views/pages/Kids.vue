<template>
  <div class="page-workstation page">
    <div class="page__section page__section--solid">
      <h1>NAPA Kids</h1>
      <p>Детский технопарк, предлагающий программы для развития ребенка в сфере информационных технологий и инженерии 
в интерактивной научно-познавательной форме с элементами непрерывной игротехники.</p>
    </div>
    <div class="page__section page__section--big-left">
      <div class="page__block page__block--image">
        <img src="../../assets/images/kids/1.jpg" alt="">
      </div>
      <div class="page__block page__block--image">
        <img src="../../assets/images/kids/2.jpg" alt="">
      </div>
    </div>
    <div class="page__section page__section--solid">
      <div class="page__block page__block--types">
        <div class="page__content">
          <h2>Длительность</h2>
          <p>
            6 месяцев
          </p>
        </div>
        <div class="page__content">
          <h2>Обучение</h2>
          <p>
           Теория + практика
          </p>
        </div>
        <div class="page__content">
          <h2>Возраст</h2>
          <p>
            6-15 лет
          </p>
        </div>
        <div class="page__content">
          <h2>Уровень</h2>
          <p>
            Базовый и продвинутый
          </p>
        </div>
      </div>
    </div>

    <div class="page__section page__section--big-left page__section--big-left-mobile">
      <div class="page__block page__block--text page__block--text-justify">
        <h2>Направления</h2>

        <div class="page__content page__content--underline">
          <h3>Программирование</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Робототехника</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Дополненная реальность</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Разработка компьютерных игр</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Физика, математика, логика</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Промышленный дизайн, 3D-моделирование</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Киберспорт</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Софт-скиллз (лидерство, работа в команде, работа с презентациями)</h3>
        </div>
        <div class="page__content page__content--underline">
          <h3>Управление проектом</h3>
        </div>
      </div>
      <div class="page__block page__block--image">
        <img src="../../assets/images/kids/3.jpg" alt="">
      </div>
    </div>

    <div class="page__section page__section--solid page__section--solid-mobile">
      <h2>Площадки для обучения</h2>
      <ul>
        <li>DEV – специализированный учебно-производственный цех, прототипирование.</li>
        <li>LAB – Тематические лаборатории</li>
        <li>EVENT – Лекторий для проведения массовых мероприятий</li>
        <li>PROJECTS – Зона для проектной деятельности</li>
        <li>INTERACT – Аудитории</li>
      </ul>

      <h2>Дополнительные площадки</h2>
      <ul>
        <li>MEDIA – библиотека, коворкинг, шахматный зал</li>
        <li>KIDS - Зал для реализации программ для детей дошкольного возраста.</li>
        <li>FUN - Развлекательная зона</li>
        <li>FOOD - фудкорт</li>
      </ul>

      <h2>Материалы</h2>
      <ul>
        <li>Наборы для развития LEGO Education</li>
        <li>Наборы для развития «Знаток»</li>
        <li>Наборы для развития «Профессор Эйн»</li>
        <li>Наборы для развития «Цифровая лаборатория»</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
metaInfo: {
  title: 'NAPA Kids',
  titleTemplate: '%s - Napa.team',
  meta: [
          { name: 'description', content: 'Обучение детей программированию, 6 месяцев, теория и практика, от 6 до 15 лет' },
          { name: 'keywords', content: 'Детский технопарк, обучение детей, информационные технологии, '}
      ], 
},
}
</script>

<style lang="scss">
header {
  top: 0;
}
</style>