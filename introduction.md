# 模仿网易云音乐播放器
### 项目描述
该项目是基于网易云音乐接口所开发的音乐点播平台。在平台中用户可以点播音乐、播放音乐MV、搜索相关的音乐、歌手等，还可以登录自己的网易云账号，查看自己的用户信息。

### 项目主要实现
1. 采用Vue框架实现页面的基本搭建。
2. 使用audio标签实现音乐的播放，并且使用js实现控制音乐播放的进度以及音乐播放的状态。
3. 使用video标签实现音乐视频的播放。
4. 采用了element-ui实现轮播图、导航栏的实现以及图片懒加载处理提高页面的性能。

### 项目执行效果
#### 音乐模块
- 开启项目默认进入发现音乐模块
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E9%A6%96%E9%A1%B5.PNG" width="700px" height="400px">

- 点击页面中的歌单可以进入歌单的详情页面查看
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%AD%8C%E5%8D%95%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 点击页面中的歌曲，会弹出歌曲播放器。
   - 歌曲播放器的歌曲海报，点击可以进入歌曲的详情页面。
   - 歌曲播放器的左边三个按钮可以改变歌曲的状态，切换上一首歌/开始播放|暂停播放/切换到下一首歌曲。
   - 歌曲中间显示的是歌曲的名称、歌曲的时长、歌曲的进度条，可以拖动歌曲的进度条改变歌曲播放的位置。
   - 歌曲右边三个按钮，第一个按钮的喜欢按钮，第二个按钮是改变音量的按钮，第三个按钮是展示正在播放的歌单。
   <br />
   <img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%82%B9%E5%87%BB%E6%92%AD%E6%94%BE%E6%AD%8C%E6%9B%B2.PNG" width="700px" height="400px">
   <br />
   <img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%AD%8C%E6%9B%B2%E8%AF%A6%E6%83%85%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">
   <br />
   <img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E8%B0%83%E8%8A%82%E9%9F%B3%E4%B9%90%E7%9A%84%E9%9F%B3%E9%87%8F.PNG" width="700px" height="400px">
   <br />
   <img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%AD%A3%E5%9C%A8%E6%92%AD%E6%94%BE%E7%9A%84%E6%AD%8C%E5%8D%95.PNG" width="700px" height="400px">
   
- 点击进入歌单页面，可以按类来筛选歌单。
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%AD%8C%E5%8D%95%E5%88%86%E7%B1%BB%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 点击最新音乐，可以按类查看最新音乐
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%9C%80%E6%96%B0%E9%9F%B3%E4%B9%90%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

#### MV模块
- 进入MV模块，默认进入MV的首页
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90MV%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 点击MV，进入MV的详细页面
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90MV%E8%AF%A6%E7%BB%86%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 切换到全部MV，可以按照类来筛选MV
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90MV%E5%88%86%E7%B1%BB%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

#### 搜索模块
- 进入搜索模块
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%90%9C%E7%B4%A2%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 点击搜索框，默认弹出当日的热搜榜
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%90%9C%E7%B4%A2%E7%83%AD%E6%90%9C%E6%A6%9C.PNG" width="700px" height="400px">

- 在搜索框，输入关键字，显示与关键字相关的数据
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E8%BE%93%E5%85%A5%E6%90%9C%E7%B4%A2%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 点击搜索，进入搜索的详情页面
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%90%9C%E7%B4%A2%E5%85%B7%E4%BD%93%E5%86%85%E5%AE%B9.PNG" width="700px" height="400px">

#### 我的音乐模块
- 我的音乐首页
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 登录页面
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%89%8B%E6%9C%BA%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 注册页面
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%89%8B%E6%9C%BA%E6%B3%A8%E5%86%8C%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">

- 登录过后，就会进入用户的详情页面
<br />
<img src="http://zhangzqcloud.cn/project-images/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%94%A8%E6%88%B7%E8%AF%A6%E7%BB%86%E9%A1%B5%E9%9D%A2.PNG" width="700px" height="400px">





















