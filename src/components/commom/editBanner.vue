<template>
    <div>
        <div @click="bannerClick">
            <div class="editBanner">
            <span>
                {{ left }}
            </span>
                <span>
                <slot name="right"></slot>
            </span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "edit-banner",
    props: ['left','right'],
    methods: {
        bannerClick() {
            this.$emit('bannerClick')
        }
    }

}
</script>

<style scoped lang="less">
.editBanner {
    padding: 4.17vw;
    background-color: white;
    font-size: 14px;
    color: #111;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

</style>