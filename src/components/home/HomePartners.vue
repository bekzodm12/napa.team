<template>
  <section class="section home-partners" id="partners">
    <div class="section__wrapper home-partners__wrapper">
      <h2>Наши партнеры</h2>
      <div class="home-partners__content">
        <a href="https://itea.ua/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-itea.svg" alt="">
        </a>
        <a href="https://www.forbis.eu/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-forbis.png" alt="">
        </a>
        <a href="https://ru.wargaming.net/ru/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-wargaming.svg" alt="">
        </a>
        <a href="https://bergsoftplus.com/ru/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-bergsoft.png" alt="">
        </a>
        <a href="https://ikrok.net/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-ikrok.png" alt="">
        </a>
        <a href="https://softline.com/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-softline.png" alt="">
        </a>
        <a href="https://schneider-group.com/ru/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-schneider-group.png" alt="">
        </a>
        <a href="http://abitech.kz/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-abitech.png" alt="">
        </a>
        <a href="https://www.usaid.gov/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-usaid.png" alt="">
        </a>
        <a href="https://arta.pro/" class="home-partners__image-wrapper">
          <img src="../../assets/images/partners-arta.svg" alt="">
        </a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HomePartners',

}
</script>

<style lang="scss" scoped>
.home-partners {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 70px;
    display: inline-flex;
    position: relative;
  }

  &__wrapper {
    flex-direction: column;
    align-items: center;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 150px;
    grid-row-gap: 100px;

    @media all and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 50px;
      grid-row-gap: 40px;
    }

  }

  &__image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }
}
</style>
