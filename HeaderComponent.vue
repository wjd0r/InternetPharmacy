<template>
    <div class="masthead mb-auto">
      <header>
        <div class="inner">
          <h3 class="masthead-brand">
            <font-awesome-icon icon="mortar-pestle" />
            Internet Pharmacy
          </h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link" href="#" v-for="nav in navs" :key="nav">
              {{nav}}
            </a>
          </nav>
        </div>
      </header>
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
  /*
  * Header
  */
  .masthead {
    margin-bottom: 2rem;
  }

  .masthead-brand {
    margin-bottom: 0;
  }

  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }


  @media (min-width: 48em) {
    .masthead-brand {
      float: left;
    }
    .nav-masthead {
      float: right;
    }
  }
</style>