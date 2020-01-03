<template lang="pug" src="./about.pug"></template>

<script>
import CustomAboutApart from 'components/custom/custom-about-apart/custom-about-apart'
import CustomAboutDoctor from 'components/custom/custom-about-doctor/custom-about-doctor'
import CustomAboutOffice from 'components/custom/custom-about-office/custom-about-office'
import CustomAboutTeam from 'components/custom/custom-about-team/custom-about-team'

export default {
  name: 'About',
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    CustomAboutApart,
    CustomAboutDoctor,
    CustomAboutOffice,
    CustomAboutTeam
  }
}
</script>
