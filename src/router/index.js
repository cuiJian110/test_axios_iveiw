/*
 * @Author: your name
 * @Date: 2019-07-19 09:39:39
 * @LastEditTime: 2019-12-03 15:55:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "/home" },
    {path: "/home", component: () => import("../pages/home")}
  ]
})
