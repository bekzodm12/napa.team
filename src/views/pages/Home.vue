<template>
  <div class="home-page">
    <HomeMain />
    <HomeAbout />
    <HomeWorks />
    <HomeFeatures />
    <HomeProjects />
    <HomePartners />
    <HomeTeam />
    <HomeContacts />
  </div>
</template>

<script>
import HomeMain from '../../components/home/HomeMain'
import HomeAbout from '../../components/home/HomeAbout'
import HomeWorks from '../../components/home/HomeWorks'
import HomeFeatures from '../../components/home/HomeFeatures'
import HomeProjects from '../../components/home/HomeProjects'
import HomePartners from '../../components/home/HomePartners'
import HomeTeam from '../../components/home/HomeTeam'
import HomeContacts from '../../components/home/HomeContacts'

export default {
  name: 'HomePage',

  components: {
    HomeMain, HomeAbout, HomeWorks, HomeFeatures, HomeProjects, HomePartners, HomeTeam, HomeContacts
  }
};
</script>
