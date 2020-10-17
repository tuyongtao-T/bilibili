<template>
    <div>
        <van-field v-model="content"
                   :label="label"
                   :type="type"
                   :placeholder="placeholder"
                   :rule="rule"
                    />
    </div>
</template>

<script>
export default {
    name: "login-text",
    props: ['label','type','placeholder','rule'],
    data() {
        return {
            content: '',
        }
    },
    watch: {
        content() {
            this.handleRule();
        }
    },
    methods: {
        handleRule(){
            const rue = new RegExp(this.rule);
            if(rue.test(this.content)){
                this.$emit('inputChange',this.content);
            }
        }
    },
}
</script>

<style scoped>

</style>