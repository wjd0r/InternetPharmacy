<template>
    <div>
      <div class="card bg-dark text-white">
        <img
            src="./img/premium-q10-forte.jpeg" 
            class="card-img"
            alt="Premium Q10 Forte">
        <div class="card-img-overlay">
            <h5 class="card-title">Premium Q10 Forte</h5>
            <p class="card-text">성분 함량</p>
            <p class="card-text">코엔자임큐텐 100mg, 비타민C, D-a-토코페롤</p>
        </div>
      </div>
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