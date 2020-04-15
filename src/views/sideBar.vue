<template>
  <div class="sideBar">
    <ul class="sideBar-list">
      <li 
      v-for="(item,index) in sideBarData" 
      :key="index" :class="active === index ?'active':''" 
      @click="changeActive(index,item.name)">
        <i class="iconfont icon" v-html="item.icon">{{item.icon}}</i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarData: [
        {
          icon: "&#xe611;",
          name:"search",
          title: "搜索"
        },
        {
          icon: "&#xe680;",
          name:"myMusic",
          title: "我的音乐"
        },
        {
          icon: "&#xe674;",
          name:"discoverMusic",
          title: "发现音乐"
        },
        {
          icon: "&#xe70a;",
          name:"video",
          title: "MV"
        }
      ],
      active:2
    };
  },
  methods:{
      changeActive(index,name){
          this.active = index;
          this.$router.push(`/${name}`);
      }
  }
};
</script>

<style lang="scss" scoped>
.sideBar {
  width: 120px;
  height: calc(100vh - 15px);
  background-color: #f6f6f8;
  border-right: 1px solid #e1e1e2;
  padding: 10px 0;
  position: fixed;
  z-index:999;
  .sideBar-list {
    li {
      cursor: pointer;
      width: 100%;
      height: 65px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: .3s;
      .icon {
        font-size: 15px;
        margin-bottom: 5%;
      }
      span {
        font-size: 13px;
      }
    }
    li:hover {
      background-color: #e83c3c;
      color: #fff;
      .icon {
        color: #fff;
      }
    }
  }
}
.active {
  background-color: #e83c3c;
  color: #fff;
  .icon {
    color: #fff;
  }
}
</style>