<template>
    <div class="mastfoot mt-auto">
      <footer>
        <div class="inner">
          <p>wjd0r.software engineer @ All Right Reserved</p>
        </div>
      </footer>
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
      ...mapState(['navs']),
    },
    methods: {
      
    },
  }
</script>

<style scoped>
</style>