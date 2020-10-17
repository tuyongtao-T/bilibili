<template>
    <div class="btnParent" @click="registerClick">
        <div class="loginBtn">
            {{btnText}}
        </div>
    </div>

</template>

<script>
export default {
    name: "login-btn",
    props:['btnText'],
    methods: {
        registerClick() {
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style scoped lang="less">
.btnParent {
    padding: 4.17vw 2.78vw;
    .loginBtn {
        height: 12.5vw;
        background-color: #ff9db5;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.44vw;
        border-radius: 6.25vw;
    }
}

</style>