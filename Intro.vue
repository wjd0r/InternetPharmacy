<template>
    <div>
        <h1 class="cover-heading">Introduce</h1>
        <p class="lead">
            찾아 주셔서 감사합니다.<br>
            여기는 인터넷 약국입니다.<br>
            더 자세한 사항은 아래를 눌러 주세요
        </p>
        <p class="lead">
          <a href="#" @click="onClickLearnMore()" class="btn btn-lg btn-primary">
            Learn more
          </a>
        </p>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store, { IMG_VIEW } from './store';

  export default {
    store,
    components: {

    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['navs', 'selectNav']),
    },
    methods: {
      onClickLearnMore() {
        this.$store.commit(IMG_VIEW);
      }
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