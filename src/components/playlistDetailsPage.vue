<template>
  <div class="playlistDetailsPage">
    <i class="iconfont icon" @click="goback()">&#xe607;</i>
    <nav>
      <img :src="playlistImg" />
      <div class="playlist-introduction">
        <div class="playlist-title playlist">
          <span class="playlistName">{{playlistName}}</span>
          <span>
            歌曲数
            <br />
            {{trackCount}}
          </span>
          <span>
            播放量
            <br />
            {{playCount}}
          </span>
        </div>
        <div class="playlist-creator playlist">
          <img :src="creatorImg" class="creator-img" />
          <span>{{nickname}}</span>
          <span>{{createTime}}创建</span>
        </div>
        <div class="playlist-tags playlist">
          <span>标签：</span>
          <a href v-for="(item,index) in tags" :key="index">{{item}}/</a>
        </div>
        <div class="playlist-recommend">简介：{{description}}</div>
      </div>
    </nav>
    <div class="playlist-details">
      <el-tabs v-model="activeName" class="tab">
        <el-tab-pane label="歌曲列表" name="playlist"></el-tab-pane>
        <el-tab-pane :label="'评论('+commentCount+')'" name="comment">
          <div class="comment-nav">精彩评论</div>
          <comment v-for="(item,index) in hotComments" :key="index" :comment="hotComments[index]"></comment>
          <div class="comment-nav">最新评论({{commentCount}})</div>
          <comment v-for="(item,index) in comments" :key="'info'+index" :comment="comments[index]"></comment>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getPlaylist, getPlaylistComment } from "../api/playlistDetails";
import comment from "../components/comments";

export default {
  components: {
    comment
  },
  data() {
    return {
      activeName: "playlist",
      playlistName: "", //歌单名称
      trackCount: 0, //歌曲数量
      playCount: 0, //播放量
      creatorImg: "", //歌单创作者的头像
      createTime: "", //歌单的创作时间
      nickname: "", //歌单创作者的名称
      tags: [], //歌单的标签
      description: "", //歌单的简介
      commentCount: 0, //评论总数
      playlistID: this.$route.query.playlistID, //歌单的ID
      playlistImg: this.$route.query.playlistImg, //歌单封面
      hotComments: [],
      comments: []
    };
  },
  computed: {},
  mounted() {
    this.getPlaylistData();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getPlaylistData() {
      const playlist = await getPlaylist(
        "http://localhost:3000/playlist/detail",
        this.playlistID
      );
      try {
        let {
          name,
          trackCount,
          playCount,
          tags,
          description,
          commentCount,
          createTime
        } = playlist;
        let { avatarUrl, nickname } = playlist.creator;
        this.playlistName = name;
        this.trackCount = trackCount;
        this.playCount = playCount;
        this.creatorImg = avatarUrl;
        this.nickname = nickname;
        this.tags = tags;
        this.description = description;
        this.commentCount = commentCount;
        let time = new Date(createTime);
        this.createTime =
          time.getFullYear() +
          "-" +
          (time.getMonth() < 10
            ? "0" + (time.getMonth() + 1)
            : time.getMonth() + 1) +
          "-" +
          (time.getDate() < 10 ? "0" + time.getDate() : time.getDate());
      } catch (error) {
        console.log(error);
      }
      
      let commentData = await getPlaylistComment(
        "http://localhost:3000/comment/playlist",
        this.playlistID,
        playlist.commentCount
      );
      try {
        let { hotComments, comments } = commentData;
        this.hotComments = hotComments;
        this.comments = comments;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.playlistDetailsPage {
  min-height: 100vh;
  .icon {
    position: absolute;
    top: 5px;
    right: 50px;
    cursor: pointer;
  }
  nav {
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-items: center;
    align-items: start;
    img {
      width: 250px;
      height: 300px;
    }
    .playlist-introduction {
      width: 100%;
      height: 100%;
      justify-self: start;
      display: grid;
      grid-template-rows: repeat(auto-fill, 75px);
      justify-items: start;
      align-items: center;
      .playlist {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .playlist-title {
        .playlistName {
          color: #000;
          font-size: 35px;
          font-weight: 700;
        }
        span {
          color: #999999;
          font-size: 15px;
          margin-right: 30px;
        }
      }
      span {
        font-size: 20px;
        margin-right: 15px;
        color: #000;
      }
      .playlist-creator {
        .creator-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
      .playlist-tags {
        a {
          font-size: 20px;
          text-decoration: none;
          color: #0c73c2;
          cursor: pointer;
        }
      }
      .playlist-recommend {
        width: 100%;
        height: 100%;
        text-align: left;
        overflow: hidden;
        font-size: 14px;
        padding-right: 30px;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
      }
      .playlist-recommend::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .playlist-details {
    margin-top: 3%;
    .comment-nav {
      height: 30px;
      border-bottom: 1px solid #e1e1e2;
      margin-top: 3%;
    }
  }
}
</style>