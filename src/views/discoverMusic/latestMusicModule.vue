<template>
  <div class="latestMusicModule">
    <el-radio-group v-model="radio" @change="changeCat">
      <el-radio-button label="全部"></el-radio-button>
      <el-radio-button label="华语"></el-radio-button>
      <el-radio-button label="欧美"></el-radio-button>
      <el-radio-button label="日语"></el-radio-button>
      <el-radio-button label="韩语"></el-radio-button>
    </el-radio-group>
    <div class="latestMusic-content" >
    <div class="latestMusic-mask" v-loading="loading" v-show="loading"></div>
      <song
        v-for="(item,index) in latestMusics"
        :key="index"
        :number="index+1"
        :songIndex="index"
        :songs="latestMusics[index]"
        :playlist="latestMusicsPlaylist"
      ></song>
    </div> 
  </div>
</template>

<script>
import { getLatestMusic } from "../../api/getData";
import song from "../../components/song";

export default {
  components: {
    song
  },
  data() {
    return {
      radio: "全部",
      radioValue: 0,
      latestMusics: [],
      loading:false,
      latestMusicsPlaylist:[]
    };
  },
  watch: {
    radioValue(val) {
      this.getLatestMusicData(val);
      
    }
  },
  mounted() {
    this.getLatestMusicData(this.radioValue);
  },
  methods: {
    async getLatestMusicData(val) {
        this.loading= true;
      const latestMusicData = await getLatestMusic(val);
      try {
        this.latestMusics = latestMusicData;
        this.latestMusicsPlaylist=[];
        latestMusicData.forEach(element => {
          this.latestMusicsPlaylist.push({
            picUrl:element.album.blurPicUrl,
            id:element.id,
            name:element.name,
            song:{
              artists:element.artists,
              album:element.album
            }
          });
        });
       
      } catch (error) {
        console.log(error);
      }
       this.loading= false;
    },
    changeCat(val) {
      switch (val) {
        case "全部": {
          this.radioValue = 0;
          break;
        }
        case "华语": {
          this.radioValue = 7;
          break;
        }
        case "欧美": {
          this.radioValue = 96;
          break;
        }
        case "日语": {
          this.radioValue = 8;
          break;
        }
        case "韩语": {
          this.radioValue = 16;
          break;
        }
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #c62f2f !important;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  border-color: #c62f2f !important;
}
</style>

<style lang="scss" scoped>
.latestMusicModule {
  margin-top: 3%;
  .latestMusic-content {
    margin-top: 3%;
    position: relative;
    .latestMusic-mask{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index:9;
    }
  }
}
</style>