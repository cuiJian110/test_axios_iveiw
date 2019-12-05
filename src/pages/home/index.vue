<!--
 * @Author: your name
 * @Date: 2019-12-03 15:53:02
 * @LastEditTime: 2019-12-05 10:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\pages\home\index.vue
 -->
<template>
    <div>
        home
        <Button @click="handleGet">testGet</Button>
        <button @click="handlePost">testPost</button>
    </div>
</template>
<script>
// import {testGet} from '@/api/login';

export default {
    methods: {
        async handleGet() {
            const data = await this.$api.login.testGet("getData.json");
            console.log(data);
        },
        async handlePost() {
            const data = await this.$api.home.postTest("testPost",{name: "zs", age: 90});
            console.log(data);
        }
    }
}
</script>