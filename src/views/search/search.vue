<template>
  <div class="search">
    <div class="search-box">
      <div type="text" class="search-input">
        <i class="iconfont icon">&#xe611;</i>
        <input type="text" placeholder="搜索音乐" />
      </div>
      <button class="search-button">确认</button>
    </div>
    <div class="top-search"> 
      <nav>
        <span>热门搜索</span>
      </nav>
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
.top-search{
  margin-top:5%;
  nav{
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid #aeb6be;
    span{
      font-size: 22px;
      font-weight: 700;
       border-bottom: 2px solid #E83C3C;
    }
  }
}
</style>