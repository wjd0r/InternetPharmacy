<template>
    <div role="main" class="inner cover">
      <div v-if="selectNav === 'intro'">
        <Intro></Intro>
      </div>
      <div v-if="selectNav === 'introuction'">
        <ImageOverlay></ImageOverlay>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store from './store';
  import Intro from './Intro';
  import ImageOverlay from './ImageOverlay';

  export default {
    store,
    components: {
      Intro,
      ImageOverlay,
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['navs', 'selectNav']),
    },
    methods: {
      
    },
  }
</script>

<style scoped>
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}
</style>