<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import BlockHeroCard from 'components/block/block-hero-card/block-hero-card'
import CustomTreatmentsTypes from 'components/custom/custom-treatments-types/custom-treatments-types'
import CustomTreatmentsDamon from 'components/custom/custom-treatments-damon/custom-treatments-damon'
import CustomTreatmentsTreatment from 'components/custom/custom-treatments-treatment/custom-treatments-treatment'
import CustomTreatmentsBraces from 'components/custom/custom-treatments-braces/custom-treatments-braces'
import CustomTreatmentsPalatal from 'components/custom/custom-treatments-palatal/custom-treatments-palatal'
import CustomTreatmentsOrtho from 'components/custom/custom-treatments-ortho/custom-treatments-ortho'

export default {
  name: 'Treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    HeroPhoto,
    BlockHeroCard,
    CustomTreatmentsTypes,
    CustomTreatmentsDamon,
    CustomTreatmentsTreatment,
    CustomTreatmentsBraces,
    CustomTreatmentsPalatal,
    CustomTreatmentsOrtho
  }
}
</script>
