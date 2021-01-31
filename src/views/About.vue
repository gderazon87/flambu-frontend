<template>
  <div>
    <div>
        <b-img :src="passionLeadUsImg" class="passion-lead-us"></b-img>
    </div>
    <FlambuAnalytics></FlambuAnalytics>
    <FlambuStory></FlambuStory>
    <TryFlumbuMobile></TryFlumbuMobile>
  </div>
</template>

<script>

import TryFlumbuMobile from '../components/TryFlumbuMobile.vue';
import FlambuAnalytics from '../components/FlambuAnalytics.vue';
import FlambuStory from '../components/FlambuStory.vue';

import passionLeadUsImg from '@/assets/img/passion-lead-us.png';

export default {
  name: 'About',
  components: {
    TryFlumbuMobile,
    FlambuAnalytics,
    FlambuStory
  },
  data: function() {
    return {
      passionLeadUsImg
    };
  }
}
</script>

<style lang="scss">
.passion-lead-us {
    max-width: 100%;
}
</style>