import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;
import home from './components/Home.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import Konsultacje from './components/MenuComponent/Konsultacje.vue';
import Filtry from './components/MenuComponent/Filtry.vue';
import Metody from './components/MenuComponent/Metody.vue';
import Ubezpieczenia from './components/MenuComponent/Ubezpieczenia.vue';
import Uslugi from './components/MenuComponent/Uslugi.vue';
import store from './store/index.js';
import reg from './components/divs/reg.vue';

function spec(route) {
    return {
        specjalist: route.params.specjalist,
        data: route.params.data,
        time: route.params.time
    };
}
const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/register', component: register },
    {
        path: '/Konsultacje',
        component: Konsultacje
    },
    {
        path: '/Filtry',
        component: Filtry
    },
    {
        path: '/Metody',
        component: Metody
    }, {
        path: '/Ubezpieczenia',
        component: Ubezpieczenia
    }, {
        path: '/Uslugi',
        component: Uslugi
    }, {
        path: '/RegisterVisit/:specjalist/:data/:time',
        name: 'RegisterVisit',
        props: spec,
        component: reg
    },
];
const router = new VueRouter({
    routes
});

new Vue({
    store: store,
    router,
    render: h => h(App),
}).$mount('#app');