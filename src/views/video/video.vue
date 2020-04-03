<template>
  <div class="video">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="MV精选" name="first">
        <div class="newest-MV">
            <headNav title="最新MV"></headNav>
            <div class="MV-list">
            <MV></MV>
            <MV></MV>
            <MV></MV>
            <MV></MV>
          </div>
        </div>
        <div class="hit-MV">
            <headNav title="热播MV"></headNav>
            <div class="MV-list">
            <MV></MV>
            <MV></MV>
            <MV></MV>
            <MV></MV>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部MV" name="2">
                    <div class="MV-list">
            <MV></MV>
            <MV></MV>
            <MV></MV>
            <MV></MV>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MV from "../../components/MV";
import headNav from "../../components/headNav"

export default {
  components: {
    MV,
    headNav
  },
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>



<style lang="scss" scoped>
  .MV-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
</style>