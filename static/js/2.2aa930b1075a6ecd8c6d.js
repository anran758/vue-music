webpackJsonp([2],{"9dxM":function(t,i,a){i=t.exports=a("FZ+f")(!0),i.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/anran758/vue-music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-77c0eaa0] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-77c0eaa0] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-77c0eaa0] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-77c0eaa0] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-77c0eaa0] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-77c0eaa0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-77c0eaa0] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-77c0eaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},FOPf:function(t,i,a){"use strict";var e=a("Dd8w"),n=a.n(e),s=a("kvay"),o=a("NYxO"),A=a("m40h"),r=a("T452"),l=a("PvFA");i.a={computed:n()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(o.c)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");Object(A.c)(this.disc.dissid).then(function(i){i.code===r.a&&(t.songs=t._normalizeSongs(i.cdlist[0].songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){t.songid&&t.albumid&&i.push(Object(l.a)(t))}),i}},components:{MusicList:s.a}}},KYBO:function(t,i,a){var e=a("9dxM");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("fd18c5bc",e,!0)},NSSj:function(t,i,a){"use strict";function e(t){a("b+Rp")}Object.defineProperty(i,"__esModule",{value:!0});var n=a("FOPf"),s=a("p/qi"),o=a("VU/8"),A=e,r=o(n.a,s.a,!1,A,"data-v-ec111780",null);i.default=r.exports},SKJH:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"music-list"},[a("div",{staticClass:"back",on:{click:t.back}},[a("i",{staticClass:"icon-back"})]),t._v(" "),a("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),a("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[a("div",{staticClass:"play-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[a("i",{staticClass:"icon-play"}),t._v(" "),a("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),a("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),a("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),a("scroll",{ref:"list",staticClass:"list",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.songs},on:{scroll:t.scroll}},[a("div",{staticClass:"song-list-wrapper"},[a("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{select:t.selectItem}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[a("loading")],1)])],1)},n=[],s={render:e,staticRenderFns:n};i.a=s},YMwN:function(t,i,a){"use strict";var e=a("Dd8w"),n=a.n(e),s=a("qwAB"),o=a("ZV4u"),A=a("y/jF"),r=a("3Q4o"),l=a("NYxO"),c=a("F4+m"),d=Object(r.c)("transform"),p=Object(r.c)("backdrop-filter");i.a={mixins:[c.b],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:n()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},Object(l.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),a=0,e=1,n=0;this.$refs.layer.style.transform="translate3d(0, "+i+"px, 0)",this.$refs.layer.style.webkitTransform="translate3d(0, "+i+"px, 0)";var s=Math.abs(t/this.imageHeight);t>0?e=1+s:n=Math.min(20*s,20),this.$refs.filter.style[p]="blur("+n+"px)",t<this.minTranslateY?(a=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=a,this.$refs.bgImage.style[d]="scale("+e+")"}},components:{Scroll:s.a,SongList:o.a,Loading:A.a}}},"b+Rp":function(t,i,a){var e=a("zLFh");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("b0e42712",e,!0)},kvay:function(t,i,a){"use strict";function e(t){a("KYBO")}var n=a("YMwN"),s=a("SKJH"),o=a("VU/8"),A=e,r=o(n.a,s.a,!1,A,"data-v-77c0eaa0",null);i.a=r.exports},m40h:function(t,i,a){"use strict";function e(){var t=l()({},d.b,{platform:"h5",uin:0,needNewCode:1});return Object(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)}function n(){var t=l()({},d.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return g.a.get("/api/getDiscList",{params:t}).then(function(t){return A.a.resolve(t.data)})}function s(t){var i=l()({},d.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"json"});return g.a.get("api/getSongList",{params:i}).then(function(t){return A.a.resolve(t.data)})}i.b=e,i.a=n,i.c=s;var o=a("//Fk"),A=a.n(o),r=a("woOf"),l=a.n(r),c=a("Gak4"),d=a("T452"),p=a("mtWM"),g=a.n(p)},"p/qi":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("transition",{attrs:{name:"slide"}},[a("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs}})],1)},n=[],s={render:e,staticRenderFns:n};i.a=s},zLFh:function(t,i,a){i=t.exports=a("FZ+f")(!0),i.push([t.i,".slide-enter-active[data-v-ec111780],.slide-leave-active[data-v-ec111780]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-ec111780],.slide-leave-to[data-v-ec111780]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["D:/anran758/vue-music/src/components/disc/disc.vue"],names:[],mappings:"AACA,0EAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-ec111780],\n.slide-leave-active[data-v-ec111780] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-ec111780],\n.slide-leave-to[data-v-ec111780] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])}});
//# sourceMappingURL=2.2aa930b1075a6ecd8c6d.js.map