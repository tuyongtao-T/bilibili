<template>
    <!--<div @click="$router.push(`/article/${detailItem.id}`)">-->
    <div @click="open">
        <div class="detailItem">
            <div class="imgParent">
                <img :src="detailItem.img" alt="" style="width: 100%; height: 100%">
                <span class="video">
                    <i class="fa fa-toggle-right">66</i>
                </span>
                <span class="comment">
                    <i class="fa fa-list">
                        {{ detailItem.commentlen }}
                    </i>
                </span>
            </div>
            <p>
                {{detailItem.name}}
            </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "detail",
    props: ['detailItem'],
    methods: {
        
    }

}
</script>

<style scoped lang="less">
.detailItem {
    p {
        font-size: 3.33vw;
    }
    .imgParent {
        position: relative;
        .video {
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .comment {
            position: absolute;
            right: 2.389vw;
            bottom: 0;
        }
    }
}

</style>