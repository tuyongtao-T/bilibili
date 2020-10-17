<template>
    <div class="navBar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="" @click="$router.push('/home')">
        </div>
        <div>
            <p>
                请输入内容
                <van-icon class="ipt-icon" name="search" /></p>
        </div>
        <div>
            <img :src="imgUrl" alt="" @click="check">
            <p>
                下载APP
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: "navBar",
    data() {
        return {
            imgUrl: '',
        }
    },
    methods: {
        check() {
            //console.log(this.$router)
           if(this.$router.currentRoute.fullPath === '/home') {
               this.$router.push('/userinfo')
            }else{
               this.$router.push('/home')
           }
        }
    },
    async mounted() {
        const res = await this.$http.get('/user/'+localStorage.getItem('id'));
        this.imgUrl = res.data[0].user_img;
        console.log(res)
    }
}
</script>

<style scoped lang="less">
.navBar {
    height: 12.5vw;
    background-color: white;
    display: flex;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22.22vw;
        img{
            width: 90%;
        }
    }
    div:nth-child(2) {
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 1.39vw;
        p {
            font-size: 3.33vw;
            padding-left: 8.33vw;
            line-height: 6.39vw;
            background-color: #f4f4f4;
            height: 6.39vw;
            width: 100%;
            border-radius: 2.78vw;
            position: relative;
            color: #aaa;
            .ipt-icon {
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translate(0,-50%);
                padding: 0;
                margin: 0;
            }
        }
    }
    div:nth-child(3) {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 6.67vw;
            height: 6.67vw;
        }
        p {
            margin: 0 1.39vw;
            padding: 1.39vw 2.78vw;
            background-color: #fb7299;
            color: white;
            font-size: 13px;
            border-radius: 0.83vw;
        }

        
    }

}
</style>