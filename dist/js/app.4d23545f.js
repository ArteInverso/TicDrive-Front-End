(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container",staticStyle:{width:"600px"}},[e._m(0),o("upload-files")],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{margin:"20px"}},[o("h3",[e._v("TicDrive")]),o("h4",[e._v("Carga de archivos")])])}],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.form.currentFile?o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-bar progress-bar-info progress-bar-striped",style:{width:e.progress+"%"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"200"}},[e._v(" "+e._s(e.progress)+"% ")])]):e._e(),o("label",{attrs:{for:"iddoc"}},[e._v("id")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.iddoc,expression:"form.iddoc"}],staticClass:"form-control",attrs:{type:"number",id:"iddoc",placeholder:"id archivo"},domProps:{value:e.form.iddoc},on:{input:function(t){t.target.composing||e.$set(e.form,"iddoc",t.target.value)}}}),o("label",{attrs:{for:"fecvencimientodoc"}},[e._v("Fecha vencimiento")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fecvencimientodoc,expression:"form.fecvencimientodoc"}],staticClass:"form-control",attrs:{type:"date",id:"fecvencimientodoc",placeholder:"fecha vencimiento"},domProps:{value:e.form.fecvencimientodoc},on:{input:function(t){t.target.composing||e.$set(e.form,"fecvencimientodoc",t.target.value)}}}),o("label",{attrs:{for:"nomdoc"}},[e._v("Nombre")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nomdoc,expression:"form.nomdoc"}],staticClass:"form-control",attrs:{type:"text",id:"nomdoc",placeholder:"nombre del archivo"},domProps:{value:e.form.nomdoc},on:{input:function(t){t.target.composing||e.$set(e.form,"nomdoc",t.target.value)}}}),o("label",{attrs:{for:"idusuario"}},[e._v("Id Usuario")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.idusuario,expression:"form.idusuario"}],staticClass:"form-control",attrs:{type:"number",id:"idusuario",placeholder:"id usuaio"},domProps:{value:e.form.idusuario},on:{input:function(t){t.target.composing||e.$set(e.form,"idusuario",t.target.value)}}}),o("label",{staticClass:"btn btn-default"},[o("input",{ref:"file",attrs:{type:"file"},on:{change:e.selectFile}})]),o("button",{staticClass:"btn btn-success",attrs:{disabled:!e.form.uploaded_file},on:{click:e.upload}},[e._v(" Cargar ")]),o("div",{staticClass:"alert alert-light",attrs:{role:"alert"}},[e._v(e._s(e.message))]),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[e._v("Lista de Archivos")]),o("ul",{staticClass:"list-group list-group-flush"},[o("table",{staticClass:"table table-dark"},[e._m(0),e._l(e.fileinfos,(function(t){return o("tr",{key:t.id},[o("td",[e._v(e._s(t.iddoc))]),o("td",[e._v(e._s(t.nomdoc))]),o("td",[e._v(e._s(t.pathdoc))]),o("td",[e._v(e._s(t.fecvencimientodoc))])])}))],2)])])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("th",{attrs:{scope:"row"}},[e._v("id")]),o("th",{attrs:{scope:"row"}},[e._v("nombre")]),o("th",{attrs:{scope:"row"}},[e._v("Link")]),o("th",{attrs:{scope:"row","data-type":"date","data-format-string":"Do MMMM YYYY"}},[e._v("Fecha")])])}],c=o("53ca"),l=o("d4ec"),d=o("bee2"),u=o("bc3a"),f=o.n(u),p=f.a.create({baseURL:"https://drivetic.herokuapp.com/",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"}}),m=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,[{key:"upload",value:function(e,t){var r=new FormData,n=o("3022");r.append("uploaded_file",e.uploaded_file[0]);var a=e.iddoc,i=e.fecvencimientodoc,s=e.nomdoc,l=e.idusuario;return console.log(n.inspect(r,!1,null,!0)),console.log(r),console.log(e.uploaded_file),console.log(n.inspect(e.uploaded_file,!1,null,!0)),Object(c["a"])(r),Object(c["a"])(e.uploaded_file),p.post("/upload-file",r,{params:{iddoc:a,fecvencimientodoc:i,nomdoc:s,idusuario:l}},{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})}},{key:"getFiles",value:function(){return p.get("/listfiles")}}]),e}(),v=new m,h={name:"upload-files",data:function(){return{form:{uploaded_file:void 0,currentFile:void 0,iddoc:0,nomdoc:"",fecvencimientodoc:"",idusuario:0},progress:0,message:"",fileinfos:[],fileInfos:[]}},methods:{selectFile:function(){this.form.uploaded_file=this.$refs.file.files},upload:function(){var e=this;this.progress=0,v.upload(this.form,(function(t){e.progress=Math.round(100*t.loaded/t.total)})).then((function(t){return e.message=t.data.message,v.getFiles()})).then((function(t){e.fileInfos=t.data})).catch((function(){e.progress=0,e.message="No se pudo cargar el archivo!",e.currentFile=void 0})),this.selectedFiles=void 0}},mounted:function(){var e=this;v.getFiles().then((function(t){e.fileinfos=t.data}))}},g=h,b=o("2877"),_=Object(b["a"])(g,i,s,!1,null,null,null),y=_.exports,w={name:"App",components:{UploadFiles:y}},C=w,O=(o("034f"),Object(b["a"])(C,n,a,!1,null,null,null)),j=O.exports,x=o("049c"),F=o.n(x);r["a"].config.productionTip=!1,r["a"].use(F.a),new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.4d23545f.js.map