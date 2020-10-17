<template>
    <div>
        <login-top middle-top="注册bilibili">
            <div slot="right" style="font-size: 3.61vw" @click="$router.push('/login')">
                切换到登录
            </div>
        </login-top>
        <login-text label="姓名"
                    style="margin: 4.17vw 0"
                    placeholder="请输入姓名"
                    rule="^.{6,16}$"
                    @inputChange=" res => mode.name = res"></login-text>
        <login-text label="账号"
                    placeholder="请输入账号"
                    rule="^.{6,16}$"
                    @inputChange=" res => mode.username = res"></login-text>
        <login-text label="密码"
                    placeholder="请输入密码"
                    type="password"
                    rule="^.{6,16}$"
                    @inputChange=" res => mode.password = res"></login-text>
        <login-btn btn-text="注册" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script>

import LoginTop from '@/components/commom/LoginTop'
import LoginText from "@/components/commom/LoginText";
import LoginBtn from "@/components/commom/LoginBtn";

export default {
    name: 'register',
    components: {
        LoginTop,
        LoginText,
        LoginBtn,
    },
    data() {
        return {
            mode: {
                name: '',
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async registerSubmit() {
            let rue = /^.{6,16}$/;
            if(rue.test(this.mode.name) && rue.test(this.mode.username) && rue.test(this.mode.password)) {
                //console.log("正则校验ok")
                const res = await this.$http.post('/register',this.mode);
                this.$msg.success(res.data.msg);
                localStorage.setItem('id',res.data.id);
                localStorage.setItem('token',res.data.token);
                setTimeout(()=> {
                    this.$router.push('userinfo');
                },1000)
                console.log(res)
            }else {
                this.$msg.fail('格式不正确，重新输入')
            }
        }
    }
};
</script>

<style>
</style>