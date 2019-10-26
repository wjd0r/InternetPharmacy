<template>
    <div>
      <div class="card border-0">
        <img
            src="img/premium-q10-forte.jpg" 
            class="card-img"
            alt="Premium Q10 Forte">
        <div class="card-img-overlay">
            <div class="card-title badge badge-primary text-wrap">Premium Q10 Forte</div>
            <p class="card-text">
              성분 함량 : </br>
              코엔자임큐텐 100mg, 비타민C, D-a-토코페롤
            </p>
            <p class="card-text"></p>
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
img {
  opacity: 0.5;
}
</style>