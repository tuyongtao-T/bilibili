<template>
    <div class="home">
        <nav-bar></nav-bar>
        <van-tabs v-model="active" swipeable sticky>
            <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
                <van-list
                        :immediate-check = "false"
                        v-model="item.loading"
                        :finished="item.finished"
                        finished-text="没有更多了"
                        @load="onLoad">
                    <div v-if="active === index" class="detailParent">
                        <detail class="detailItem"
                                :detailItem="categoryItem"
                                v-for="(categoryItem,categoryIndex) in item.list"
                                :key="categoryIndex">

                        </detail>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>

</template>

<script>
import navBar from "@/components/commom/navBar";
import detail from "@/views/detail";

export default {
    name: "Home",
    components: {
        navBar,
        detail,
    },
    data() {
        return {
            active: 0,
            category: [],
        }
    },
    methods: {
        async selectCategory() {
            const res = await this.$http.get('/category');
            this.changeCategory(res.data);
        },
        changeCategory(data) {
            const category = data.map((item) => {
                item.list = [];
                item.page = 1;
                item.finished = false;
                item.loading = false;
                item.pagesize = 10;
                return item;
            })
            this.category = category;
            this.selectArticle();
        },
        async selectArticle() {
            const categoryItem = this.categoryItem();
            //console.log(categoryItem._id,'00000000');
            const res = await this.$http.get('/detail/' + categoryItem._id, {
                params: {
                    page: categoryItem.page,
                    pagesize: categoryItem.pagesize,
                }
            });
            categoryItem.list.push(...res.data);
            categoryItem.loading = false;
            if(res.data < categoryItem.pagesize) {
                categoryItem.finished = true;
            }
        },
        categoryItem() {
            const categoryItem = this.category[this.active];
            return categoryItem
            //console.log(categoryItem);
        },
        onLoad() {
            //console.log('已经到底了')
            const categoryItem = this.categoryItem();
            setTimeout(()=> {
                categoryItem.page += 1;
                this.selectArticle();
            },1000);
        }
    },
    watch: {
        active() {
            this.selectArticle();
        }
    },
    created() {
        this.selectCategory();
    }
}
</script>

<style scoped lang="less">
.home {
    background-color: white;

    .detailParent {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .detailItem {
            margin: 1.39vw 0;
            width: 45%;
        }
    }
}


</style>