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
        <footer>
            <img src="../assets/demo.png" class="music-img" />
            <div class="music-button">
                <ul>
                    <li>
                        <i class="iconfont icon">&#xe603;</i>
                    </li>
                    <li class="play-button"> 
                         <i class="iconfont icon">&#xe63d;</i>
                    </li>
                    <li>
                        <i class="iconfont icon">&#xe602;</i>
                    </li>
                </ul>
            </div>

        </footer>
    </div>
</template>

<script>
export default {

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
footer{
    width: 100%;
    height: 40px;
    background-color: #F6F6F8;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #E1E1E2;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:2px 10px;
    .music-img{
        width: 30px;
        height: 30px;
    }
    .music-button{
        margin-left: 30px;
        ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            li{
                width: 20px;
                height: 20px;
                background-color: #E83C3C;
                border-radius: 50%;
                margin-right: 10px;
                line-height: 18px;
                text-align: center;
                .icon{
                    color:#fff;
                    font-size: 8px;
                   
                }
            }
        }
        .play-button{
            width: 25px;
            height: 25px;
            line-height: 25px;
            .icon{
                font-size: 12px;
            }
        }
    }
}
</style>