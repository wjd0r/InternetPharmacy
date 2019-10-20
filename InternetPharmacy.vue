<template>
  <div class="body text-center">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header-component></header-component>
      <main-component></main-component>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import store from './store';
  import HeaderComponent from './HeaderComponent';
  import MainComponent from './MainComponent';
  import FooterComponent from './FooterComponent';

  export default {
    store,
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
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

li{
  list-style: none;
  margin: 0px;
  padding: 0px;
}
</style>