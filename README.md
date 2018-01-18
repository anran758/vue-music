# vue-music
> Music player: Vue + Node.js 打造Web移动端App

&emsp;&emsp;项目基于Vue, `NodeJs`为依赖. 由于使用了`Router`路由, 在写的时候没考虑到`GitHub pages`布置的问题, 没法布置服务`prod.server.js`, 因此有些功能需要在线上布置时可能会失效.

---
### About Item
项目主要抓取了QQ音乐的API接口, 通过`axios`, `jsonp`请求数据,`Vuex`状态管理, 实现查询, 播放等功能.使用better-scroll移动端滑动插件

项目主要涉及的技术有: 
 - Vuex
 - Node.js
 - Vue router
 - better-scroll
 - axios、jsonp

### Build
``` bash
  # 安装依赖
  npm install

  # 启动服务器, 默认端口为8080
  npm run dev

  # 打包压缩
  npm run build

  # 构建用于生产并查看包分析器报告
  npm run build --report
  
  # 启动NodeJs测试端口9000, 测试\dist\目录
  node prod.server.js
```

### 效果图
&emsp;&emsp;测试图如下

![Phone6](https://ws1.sinaimg.cn/mw690/e48206bbgy1fldcpj9sasj20ey0ug44i.jpg)

