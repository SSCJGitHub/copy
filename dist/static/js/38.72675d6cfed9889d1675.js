webpackJsonp([38],{MbUe:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.contextmenu-pad[data-v-162c49e5] {\n  height: 300px;\n  background-color: #f8f8f9;\n  border: 1px solid #DCDFE6;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #909399;\n}\n.contextmenu-icon[data-v-162c49e5] {\n  font-size: 16px;\n}\n",""])},QQ7S:function(e,n,t){var c=t("MbUe");"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);t("rjj0")("182e5318",c,!0)},fBsV:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("template",{slot:"header"},[e._v("自定义事件")]),e._v(" "),t("v-contextmenu",{ref:"contextmenu"},[t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单1")]),e._v(" "),t("v-contextmenu-item",{attrs:{divider:""}}),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单2")]),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单3")])],1),e._v(" "),t("v-contextmenu",{ref:"dbContextmenu",attrs:{"event-type":"dblclick"}},[t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单1")]),e._v(" "),t("v-contextmenu-item",{attrs:{divider:""}}),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单2")]),e._v(" "),t("v-contextmenu-item",{on:{click:e.handleClick}},[e._v("菜单3")])],1),e._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("div",{directives:[{name:"contextmenu",rawName:"v-contextmenu:contextmenu",arg:"contextmenu"}],staticClass:"contextmenu-pad"},[e._v("\n        右键点击此区域\n      ")])]),e._v(" "),t("el-col",{attrs:{span:12}},[t("div",{directives:[{name:"contextmenu",rawName:"v-contextmenu:dbContextmenu",arg:"dbContextmenu"}],staticClass:"contextmenu-pad"},[e._v("\n        左键双击此区域\n      ")])])],1)],2)},staticRenderFns:[]};var o=t("VU/8")({methods:{handleClick:function(e,n){this.$message({message:"你点击了"+e.$slots.default[0].text,type:"info"})}}},c,!1,function(e){t("QQ7S")},"data-v-162c49e5",null);n.default=o.exports}});