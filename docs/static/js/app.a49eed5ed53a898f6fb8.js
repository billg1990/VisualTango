webpackJsonp([1],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),i={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App"},i,!1,function(n){t("gsu9")},null,null).exports,r=t("/ocq"),d=t("Ml+6"),s={name:"VisualTango",data:function(){return{canvas:"<div></div>"}},mounted:function(){var n=new d.d,e=new d.c(75,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,10,15),e.lookAt(n.position);var t=new d.e({antialias:!0});t.setSize(.9*window.innerWidth,.9*window.innerHeight),document.body.appendChild(t.domElement),(new d.a).load("static/model/stickmale.json",function(e){var t=new d.b(e);n.add(t)},function(n){console.log(n.loaded/n.total*100+"% loaded")},function(n){console.log("[ERROR] when loading model file: ",n)});!function o(){requestAnimationFrame(o),t.render(n,e)}()}},c={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"index"})},staticRenderFns:[]};var l=t("VU/8")(s,c,!1,function(n){t("yfog")},"data-v-69a528b8",null).exports;o.a.use(r.a);var u=new r.a({routes:[{path:"/",name:"VisualTango",component:l}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:u,components:{App:a},template:"<App/>"})},gsu9:function(n,e){},yfog:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.a49eed5ed53a898f6fb8.js.map