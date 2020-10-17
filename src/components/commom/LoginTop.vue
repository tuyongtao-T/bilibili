<template>
    <div>
        <div class="loginTop">
            <div></div>
            <div>{{middleTop}}</div>
            <div>
                <slot name="right">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-top',
    props: ['middleTop'],
}
</script>

<style lang="less">
.loginTop {
    height: 12.5vw;
    background-color: white;
    display: flex;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.44vw;

    }
}
</style>