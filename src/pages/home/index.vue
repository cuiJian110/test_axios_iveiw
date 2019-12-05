<!--
 * @Author: your name
 * @Date: 2019-12-03 15:53:02
 * @LastEditTime: 2019-12-05 16:05:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\pages\home\index.vue
 -->
<template>
    <div>
        home
        <Button @click="handleGet">testGet</Button>
        <button @click="handlePost">testPost</button>
        <div>
            userName: <input type="text" v-model="userName">
            pwd: <input type="password" v-model="pwd">
            <Button type="primary" @click="handleLogin">login</Button>
        </div>
    </div>
</template>
<script>
// import {testGet} from '@/api/login';

export default {
    data() {
        return {
            userName: "",
            pwd: "",
        }
    },
    methods: {
        async handleGet() {
            const data = await this.$api.login.testGet("getData/12",{key1: "value1"});
            console.log(data);
        },
        async handlePost() {
            const data = await this.$api.home.postTest("testPost666",{name: "zs", age: 90});
            console.log(data);
        },
        async handleLogin() {
            const {userName, pwd} = this;
            const data = await this.$api.login.login("login",{userName,pwd});
            console.log(data);
        }
    }
}
</script>