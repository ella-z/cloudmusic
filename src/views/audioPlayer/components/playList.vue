<template>
    <div class="playList">
        <nav>
            <span>播放列表</span>
            <i class="iconfont icon" @click="toClose()">&#xe617;</i>
        </nav>
    </div>
</template>

<script>
export default {
    methods:{
        toClose(){
             this.$store.commit("changePlayListState", false);
        }
    }
}
</script>

<style lang="scss" scoped>
.playList{
    width: 40%;
    height: 60%;
    background-color: pink;
    position: fixed;
    right: 0;
    bottom: 40px;
    z-index:2;
    .icon{
        cursor: pointer;
    }
}
</style>