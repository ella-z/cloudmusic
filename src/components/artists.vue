<template>
    <div class="artists">
        <img v-lazy="artist.picUrl" >
        <span>{{artist.name}}</span>
    </div>
</template>

<script>
export default {
    props:['artist']
}
</script>

<style lang="scss" scoped>
.artists{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
}
.artists:nth-child(odd){
     background-color: #f5f5f7;
}
</style>