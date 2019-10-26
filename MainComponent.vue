<template>
    <div role="main" class="inner cover">
      <div v-if="mainView === 'intro'">intro</div>
      <div v-if="mainView === 'img'">img</div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store from './store';

  export default {
    store,
    components: {

    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['navs', 'mainView']),
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