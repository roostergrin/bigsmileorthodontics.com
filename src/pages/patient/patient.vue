<template lang="pug" src="./patient.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import GradientImage from '@/components/block/block-grad-image/block-grad-image'
import PatientFinance from '@/components/custom/custom-patients-finance/custom-patients-finance'
import PatientForms from '@/components/custom/custom-patients-forms/custom-patients-forms'

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patient']
    }
  },
  components: {
    HeroPhoto,
    GradientImage,
    PatientFinance,
    PatientForms
  }
}
</script>
