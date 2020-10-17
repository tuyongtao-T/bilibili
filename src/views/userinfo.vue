<template>
    <div>
        <div class="userinfo">
            <nav-bar></nav-bar>
            <img class="backImg" src="@/assets/backImg.png" alt="">
            <user-detail :userinfo="mode"></user-detail>
        </div>
    </div>
</template>

<script>
import navBar from "@/components/commom/navBar";
import userDetail from '@/components/userComponents/userDetail'
export default {
    name: "userinfo",
    data() {
        return {
            mode:{

            }
        }
    },
    components: {
        navBar,
        userDetail,
    },
    methods:{
        async userinfoData() {
            const res = await this.$http.get('/user/'+localStorage.getItem('id'));
            this.mode = res.data[0];
            console.log(res,'000000')
        }
    },
    created() {
       this.userinfoData();
    }
}
</script>

<style scoped lang="less">
.userinfo {
    .backImg {
        height: 101px;
        width: 100%;
    }
}


</style>