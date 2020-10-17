<template>
    <div>
        <login-top middle-top="登录bilibili">
            <div slot="right" style="font-size: 3.61vw" @click="$router.push('/register')">
                切换到注册
            </div>
        </login-top>
        <login-text label="账号"
                    style="margin: 4.17vw 0"
                    placeholder="请输入账号"
                    rule="^.{6,16}$"
                    @inputChange=" res => mode.username = res"></login-text>
        <login-text label="密码"
                    placeholder="请输入密码"
                    type="password"
                    rule="^.{6,16}$"
                    @inputChange=" res => mode.password = res"></login-text>
        <login-btn btn-text="登录" @registerSubmit="AjaxInsert"></login-btn>
    </div>
</template>

<script>

import LoginTop from '@/components/commom/LoginTop'
import LoginText from "@/components/commom/LoginText";
import LoginBtn from "@/components/commom/LoginBtn";

export default {
    name: 'login',
    components: {
        LoginTop,
        LoginText,
        LoginBtn,
    },
    data() {
        return {
            mode: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async AjaxInsert() {
            if(this.mode.username && this.mode.password) {
                //console.log("正则校验ok")
                const res = await this.$http.post('/login',this.mode);
                this.$msg.fail(res.data.msg);
                if(res.data.code === 301 || res.data.code === 302) {
                    return
                }
                console.log(res,'1111111')
                localStorage.setItem('id',res.data.id);
                localStorage.setItem('token',res.data.token);
                setTimeout(()=> {
                    this.$router.push('home');
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