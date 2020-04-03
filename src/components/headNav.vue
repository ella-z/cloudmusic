<template>
  <div class="headNav">
    <span class="red"></span>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  props:["title"]
};
</script>

<style lang="scss" scoped>
.headNav{
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e1e1e2;
  height: 35px;
  margin: 5px 0 20px;
  .red{
    width: 5px;
    height: 18px;
    margin-right: 5px;
    background-color: #E83C3C;
  }
  .title {
    font-size: 18px;
    color: #000;
    font-weight: 700;
  }
}
</style>