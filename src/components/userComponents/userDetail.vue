<template>
    <div class="wrap">
        <div>
            <div class="user-img">
                <img :src="userinfo.user_img" alt="" v-if="userinfo.user_img">
                <img src="../../assets/default_img.jpg" alt="" v-else>
            </div>
            <div class="user-edit">
                <div>
                    <p>
                        <span>0</span>
                        <span class="user-text">粉丝</span>
                    </p>
                    <p>
                        <span>54</span>
                        <span class="user-text">关注</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span class="user-text">获赞</span>
                    </p>
                </div>
                <div @click="$router.push('/edit')">
                    <div class="user-btn">编辑资料</div>
                </div>
            </div>
        </div>
        <div>
            <h2>{{userinfo.name}}</h2>
            <p v-if="userinfo.user_desc">{{userinfo.user_desc}}</p>
            <p v-else>这个人很懒，什么都没有</p>
        </div>
        <hr>
        <div style="color: #aaa">
            <span>动态 </span>|
            <span>视频 </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "user-detail",
    props: {
        userinfo: {},
    }
}
</script>

<style scoped lang="less">
.wrap {
    padding: 0 3.33vw;
    background-color: white;
    >div:nth-child(1){
        display: flex;
        .user-img {
            margin-right: 5.56vw;
            img {
                height: 23.61vw;
                width: 23.61vw;
            }
        }
        .user-edit {
            flex: 1;
            div:nth-child(1) {
                display: flex;
                flex: 1;
                p {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 3.61vw;
                    .user-text {
                        color: #aaa;
                    }
                }
                p:nth-child(1),p:nth-child(2) {
                    border-right: 0.28vw solid #ccc;
                }
            }
            div:nth-child(2) {
                padding: 0.56vw 2.78vw;
                .user-btn {
                    border: 0.28vw solid #fb7a9f;
                    color: #fb7a9f;
                    display: inline-block;
                    padding: 0.83vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 1.11vw;
                }
            }
        }
    }
    >div:nth-child(2) {
        h2 {
            margin:  10px 0 3px 0;
            font-weight: 400;
        }
        p {
            margin: 10px 0;
            padding: 0;
            color: #999;
        }
    }

}

</style>