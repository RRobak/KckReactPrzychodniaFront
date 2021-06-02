import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userlogged: ""
    },
    actions: {
        saveUserLogged(context, loggedUser) {
            context.commit('saveUserLogged', loggedUser);
            console.log("dispatch");
        }
    },
    mutations: {
        saveUserLogged(state, loggedUser) {
            state.userlogged = loggedUser;
            console.log("commit");
        }
    },
});

export default store;