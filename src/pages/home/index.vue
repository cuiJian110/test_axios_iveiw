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
        <Button @click="handleGetStudent">getStudents</Button>
        <div>
            userName: <input type="text" v-model="userName">
            pwd: <input type="password" v-model="pwd">
            <Button type="primary" @click="handleLogin">login</Button>
        </div>
        <div>
            name: <input type="text" v-model="s_name">
            gender: <input type="text" v-model="s_gender">
            <Button @click="handleAdd">addStudent</Button>
        </div>
        <div>
            <div v-for="item in studentList" :key="item.id">
                name: {{item.name}}
                gender: {{item.gender}}
                <Button type="danger" @click="handleDelStudent(item.id)">del</Button>
            </div>
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
            studentList: [],
            s_name: "",
            s_gender: "",
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
        },
        async handleGetStudent() {
            const data = await this.$api.home.getStudents("getStudents");
            console.log(data);
            this.studentList = data;
        },
        async handleAdd() {
            this.s_name = "";
            this.s_gender = "";
            const data = await this.$api.home.addStudent("addStudent",{name: this.s_name, gender: this.s_gender});
            console.log(data);
            if(data.status === 200) {
                this.handleGetStudent()
            }
        },
        async handleDelStudent(id) {
            console.log(id);
            const data = await this.$api.home.delStudent("delStudent",{id});
            console.log(data);
            if(data.status === 200) {
                this.handleGetStudent()
            }
        }
    }
}
</script>