<template>
  <div class="search">
    <div class="search-box">
      <div type="text" class="search-input">
        <i class="iconfont icon">&#xe611;</i>
        <input type="text" placeholder="搜索音乐" />
      </div>
      <button class="search-button">确认</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-box {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .search-input {
    width: 75%;
    height: 60%;
    margin-right: 3%;
   
    border: 1px solid #aeb6be;
    padding: 0 5px;
    input {
      width: 90%;
      height: 100%;
      border: none;
       font-size: 14px;
    }
    .icon {
       display: inline-block;
        height: 100%;
        margin-right: 15px;
      color: #aeb6be;
    }
  }
  .search-button {
    width: 10%;
    height: 60%;
    background-color: #fff;
    border: 1px solid #aeb6be;
    border-radius: 20px;
    font-size: 16px;
  }
}
</style>