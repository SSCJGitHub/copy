webpackJsonp([35],{A7SY:function(t,e,r){var n=r("xkpg");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("790a40e1",n,!0)},OrCT:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),o=r("NYxO"),s=r("Y81h"),a=r.n(s),u=(r("UVIz"),{name:"nxframe",data:function(){return{urlPath:this.getUrlPath()}},created:function(){a.a.configure({showSpinner:!1})},mounted:function(){this.load(),this.resize()},props:["routerPath"],watch:{$route:function(){this.load()},routerPath:function(t){this.urlPath=this.getUrlPath()}},components:i()({},Object(o.b)(["tagList"]),{tagListNum:function(){return 0!==this.tagList.length}},Object(o.c)({name:function(t){return t.user.name}})),methods:{show:function(){a.a.start()},hide:function(){a.a.done()},resize:function(){var t=this;window.onresize=function(){t.iframeInit()}},load:function(){var t=this;this.show();var e=!0;-1===this.$route.query.src.indexOf("?")&&(e=!1);var r=[];for(var n in this.$route.query)"src"!==n&&"name"!==n&&r.push(n+"= this.$route.query[key]");r=r.join("&").toString(),this.$route.query.src=e?this.$route.query.src+(r.length>0?"&list":""):this.$route.query.src+(r.length>0?"?list":"");var i=3,o=setInterval(function(){0===--i&&(t.hide(),clearInterval(o))},1e3);this.iframeInit()},iframeInit:function(){var t=this,e=this.$refs.iframe,r=document.documentElement.clientHeight-200;e.style.height=r+"px",e.attachEvent?e.attachEvent("onload",function(){t.hide()}):e.onload=function(){t.hide()}},getUrlPath:function(){var t=window.location.href;return t=t.replace("/myiframe","")}}}),h={render:function(){var t=this.$createElement,e=this._self._c||t;return this.$route.query.src?e("iframe",{ref:"iframe",staticClass:"iframe",attrs:{src:this.$route.query.src}}):e("iframe",{ref:"iframe",staticClass:"iframe",attrs:{src:this.urlPath}})},staticRenderFns:[]};var c=r("VU/8")(u,h,!1,function(t){r("A7SY")},null,null);e.default=c.exports},xkpg:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"\n.iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n",""])}});