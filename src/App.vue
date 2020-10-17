<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepalive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepalive" />
    </div>
</template>

<style lang="less">
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
}
p {
    margin: 0;
}
//响应式布局
@media screen and (max-width: 1000px) and (min-width: 700px) {
    ul li a:before {
        content: "Email: ";
        font-style: italic;
        color: #666666;
    }
}
</style>
