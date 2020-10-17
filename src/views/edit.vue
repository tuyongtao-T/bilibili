<template>
    <div v-if="mode" class="editViews">
        <div style="margin-bottom: 2.78vw">
            <nav-bar></nav-bar>
        </div>
        <div class="uploadFile">
            <van-uploader class="uploadImg" :after-read="afterRead" preview-size="100vw"/>
            <edit-banner left="头像">
                <img v-if="mode.user_img" :src="mode.user_img" alt="" slot="right">
                <!--<img v-else src="@/assets/default_img.jpg" alt="" slot="right">-->
            </edit-banner>
        </div>
        <edit-banner left="昵称" @bannerClick=" show = true">
            <a href="javascript:;" slot="right">{{ mode.name }}</a>
        </edit-banner>
        <edit-banner left="UID">
            <a href="javascript:;" slot="right">{{ mode.username }}</a>
        </edit-banner>
        <edit-banner left="性别" @bannerClick=" genderShow = true">
            <a href="javascript:;" slot="right">{{mode.gender === 0 ? '男': '女'}}</a>
        </edit-banner>
        <edit-banner left="个性签名" @bannerClick=" textShow = true">
            <a href="javascript:;" slot="right">{{ mode.user_desc }}</a>
        </edit-banner>

        <van-dialog v-model="show"
                    title="昵称"
                    show-cancel-button
                    @cancel="content = '' "
                    @confirm="confirmClick">
            <van-field v-model="content" autofocus/>
        </van-dialog>

        <van-dialog v-model="textShow"
                    title="个性签名"
                    show-cancel-button
                    @cancel="content = '' "
                    @confirm="textClick">
            <van-field v-model="content" type="textarea" autofocus/>
        </van-dialog>
        <van-action-sheet v-model="genderShow" cancel-text="取消" :actions="actions" @select="onSelect"/>
        <div class="editBack" @click="$router.back()">
                返回个人中心
        </div>
    </div>
</template>

<script>
import navBar from "@/components/commom/navBar";
import editBanner from "@/components/commom/editBanner";

export default {
    name: "edit",
    components: {
        navBar,
        editBanner,
    },
    data() {
        return {
            mode: {},
            show: false,
            textShow: false,
            genderShow: false,
            content: '',
            actions: [
                {name: '男', val: 0},
                {name: '女', val: 1},
            ],
        }
    },
    methods: {
        //进入页面读取数据渲染页面
        async selectUser() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            this.mode = res.data[0];
            console.log(res, '000000', this.mode)
        },
        async afterRead(file) {
            //console.log(file);
            const formData = new FormData();
            formData.append('file', file.file);
            const res = await this.$http.post('/upload', formData);
            this.mode.user_img = res.data.url;
            this.userUpdate();
            //console.log(res);
        },
        async userUpdate() {
            const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.mode);
            if(res.data.code === 200) {
                this.$msg.success('修改成功')
            }
            console.log(res);
        },
        confirmClick() {
            //console.log('123')
            this.mode.name = this.content;
            this.userUpdate();
            this.content = '';
        },
        textClick() {
            this.mode.user_desc = this.content;
            console.log(this.mode)
            this.userUpdate();
            this.content = '';
        },
        onSelect(data) {
            console.log(data);
            this.mode.gender = data.val;
            this.userUpdate();
            this.genderShow = false;
        }
    },
    created() {
        this.selectUser();
    }
}
</script>

<style scoped lang="less">
.editViews {
    a {
        color: #333;
    }

    img {
        width: 12.78vw;
        height: 12.78vw;
    }

    .uploadFile {
        overflow: hidden;
        position: relative;

        .uploadImg {
            position: absolute;
            opacity: 0;
        }

    }
    .editBack {
        background-color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 5.56vw;
        padding: 15px 0;
        margin-top: 5.56vw;
    }
}

</style>