<template>
  <div class="headNav">
    <span class="title">{{title}}</span>
    <span>更多</span>
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e2;
  height: 35px;
  margin: 50px 0 20px;
  .title {
    font-size: 18px;
    color: #000;
    font-weight: 700;
  }
  span{
    cursor: pointer;
  }
}
</style>