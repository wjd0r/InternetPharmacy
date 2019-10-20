<template>
  <div class="body text-center">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header-component></header-component>
      <main role="main" class="inner cover">
        <h1 class="cover-heading">Introduce</h1>
        <p class="lead">
            찾아 주셔서 감사합니다.<br>
            여기는 인터넷 약국입니다.<br>
            더 자세한 사항은 아래를 눌러 주세요
        </p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-primary">
            Learn more
          </a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>f.software engineer @ All Right Reserved</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store from './store';
  import HeaderComponent from './HeaderComponent';

  export default {
    store,
    components: {
      HeaderComponent,
    },
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
  }
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: .05rem solid #fff;
}

/*
 * Base structure
 */
html,
.body {
  height: 100%;
  background-color: #fff;
}

.body {
  display: -ms-flexbox;
  display: flex;
  color: #007bff;
}

.cover-container {
  max-width: 42em;
}

/*
 * Cover
 */
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}

li{
  list-style: none;
  margin: 0px;
  padding: 0px;
}
</style>