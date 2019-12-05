/*
 * @Author: your name
 * @Date: 2019-07-19 09:39:39
 * @LastEditTime: 2019-12-03 17:13:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as $api from '@/api';
Vue.prototype.$api = $api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
