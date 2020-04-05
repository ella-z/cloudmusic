<template>
    <div class="songDetailsPage">
        <i class="iconfont icon" @click="closePage()">&#xe607;</i>
    </div>
</template>

<script>
export default {
    mounted(){
      
    },
    methods:{
        closePage(){
          this.$store.commit("changeSongPageState",false);
        }
    }
}
</script>

<style lang="scss" scoped>
.songDetailsPage{
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.9);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999999999;
   
}
.icon{
    color: #fff;
    position: absolute;
    right: 18px;
    top: 10px;
}
</style>