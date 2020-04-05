<template>
    <div class="myMusic">
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$router.push("/myMusic/login")
    }
}
</script>

<style lang="scss" scoped>

</style>