<!--
 * @Author: your name
 * @Date: 2019-12-03 15:53:02
 * @LastEditTime: 2019-12-06 11:01:50
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
            <Button type="primary" @click="handleCreate">创建</Button>
        </div>
        <div>
            <div v-for="item in studentList" :key="item.id">
                name: {{item.name}}
                gender: {{item.gender}}
                <Button type="error" @click="handleDelStudent(item.id)">del</Button>
                <Button type="primary" @click="handleEditStudent(item)">edit</Button>
            </div>
        </div>
        <Modal
            v-model="isShow_changeStudent"
            :title="title">
           <div>
                name: <input type="text" v-model="s_name">
                <br>
                gender: <RadioGroup v-model="s_gender">
                            <Radio label="男"></Radio>
                            <Radio label="女"></Radio>
                        </RadioGroup>
            </div>
            <div slot="footer">
                <Button type="primary" @click="handleChange">addStudent</Button>
            </div>
        </Modal>
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
            isShow_changeStudent: false,
            title: "",
            s_id: 0,
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
            // console.log(data);
            this.studentList = data;
        },
        handleChange() {
            if(this.s_name === "" || this.s_gender === "") return this.$Message.error("错了")
            if(this.title === "创建") {
                this.handAdd();
            } else if(this.title === "编辑") {
                this.handleEdit()
            }
            this.s_name = "";
            this.s_gender = "";
            this.isShow_changeStudent = false;
        },
        async handAdd() {
            const data = await this.$api.home.addStudent("addStudent",{name: this.s_name, gender: this.s_gender});
            // console.log(data);
            if(data.status === 200) {
                this.handleGetStudent()
            }
        },
        async handleEdit() {
            const data = await this.$api.home.addStudent("editStudent",{id: this.s_id, name: this.s_name, gender: this.s_gender});
            // console.log(data);
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
        },
        handleCreate() {
            this.title = "创建";
            this.isShow_changeStudent = true;
            this.s_name = "";
            this.s_gender = "男";
        },
        handleEditStudent(item) {
            this.title = "编辑";
            this.isShow_changeStudent = true;
            this.s_id = item.id;
            this.s_name = item.name;
            this.s_gender = item.gender;
        }
    }
}
</script>