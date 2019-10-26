import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // this.$store

export const IMG_VIEW = 'IMG_VIEW';

export default new Vuex.Store({
    state: {
        navs: [
            'home',
            'introuction',
        ],
        selectNav: 'home',
    }, // vue의 data와 비슷
    getters: {}, // vue의 computed와 비슷
    mutations: {
        [IMG_VIEW]() {
            state.mainView = 'introuction';
        },
    }, // state를 수정할때, 동기적으로
    actions: {

    } // 비동기를 사용할 때, 또는 여러 뮤테이션을 연달아 실행 할때
});