<template>
    <div>
        <header>
            <div class="nav-left">
                <i class="iconfont icon">&#xe60d;</i>
                <span>音乐播放器</span>
            </div>
            <div class="nav-right">
            </div>
        </header>
        <main>
            <sideBar></sideBar>
            <router-view></router-view>
        </main>        
        <audioPlayer></audioPlayer>
    </div>
</template>

<script>
import audioPlayer from './audioPlayer';
import sideBar from './sideBar';

export default {
 components:{
     audioPlayer,
     sideBar
 },
 data(){
     return{

     }
 },
mounted(){
    this.$router.push('/discoverMusic');
}
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #C62F2F;
    position: fixed;
    z-index: 99999;
    .nav-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .icon{
            color:#fff;
            font-size: 20px;
            margin-right: 10px;
        }
        span{
            color:#fff;
            font-family:  YouYuan;
            font-weight: 700;
            font-size: 15px;
            display: block;
        }
    }
}
main{
    height: calc(100vh - 75px);
    width: 100vw;
    position: relative;
    top: 35px;
    display: flex;
    flex-direction: row;
}
</style>