import Vue from 'vue';

import router from '@/config/router';

import { App } from '@/containers/index';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
// if not comment, still render svg
// import '@fortawesome/fontawesome-free/js/all.js';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoReplaceSvg = false;

// Vue config
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
