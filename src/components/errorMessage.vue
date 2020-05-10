<template>
    <div class="errorMessage">
        <i class="iconfont icon">&#xe605;</i>
        <span>{{message}}</span>
    </div>
</template>

<script>
export default {
    props:['message']
}
</script>

<style lang="scss" scoped>
.errorMessage{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .icon{
        font-size: 20px;
        color: #e83c3c;
        margin-right: 5px;
    }
    span{
        font-size: 18px;
        color: #e83c3c;
    }
}
</style>