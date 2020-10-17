<template>
    <div v-if="mode">
        <nav-bar></nav-bar>
        <div class="detailInfo">
            <div class="video">
                <video controls :src="mode.content"></video>
            </div>
            <div class="detailInfoText">
                <div>
                    <span>{{mode.category.title}}</span>|
                    <span>{{mode.name}}</span>
                </div>
                <div>{{mode.userinfo.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from "@/components/commom/navBar";

export default {
    name: "Article",
    components: {
        navBar,
    },
    data() {
      return {
          mode: null,
      }
    },
    methods: {
        async articleItemData() {
            console.log(this.$route,'111111001')
            const res = await this.$http.get('/article/'+ this.$route.params.id);
            this.mode = res.data[0];
            //console.log(res);
        }
    },
    created() {
        this.articleItemData();
    }
}
</script>

<style scoped lang="less">
.detailInfo {
    .video{
        width: 100%;
        video {
            width: 100%;
        }
    }
    .detailInfoText {

        padding: 4.17vw 4.17vw;
        div:nth-child(1){
            span:nth-child(1) {
                padding: 0 2.78vw;
                color: #fb7299;
                background-color: #f4f4f4;
                border-radius: 2.78vw;
            }
        }
    }
}
</style>