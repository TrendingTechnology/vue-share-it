(function(t){function a(a){for(var e,n,r=a[0],c=a[1],o=a[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&p.push(l[n][0]),l[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(a);while(p.length)p.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,r=1;r<s.length;r++){var c=s[r];0!==l[c]&&(e=!1)}e&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},l={app:0},i=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/vue-share-it/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var v=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("71ec"),l=s.n(e);l.a},"188f":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);var e=s("2b0e"),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[t._m(0),t._m(1),s("div",{staticClass:"py-3"},[s("share-it")],1),s("v-layout",{attrs:{row:""}},[s("v-col",{attrs:{cols:4,offset:4}},[[s("v-treeview",{attrs:{items:t.content,"item-key":"value","item-text":"label",hoverable:"","selected-color":"accent",color:"primary","open-on-click":""},scopedSlots:t._u([{key:"label",fn:function(a){var e=a.item;return[e.children&&e.children.length?s("div",[t._v(t._s(e.label))]):s("a",{attrs:{href:"#"+e.value}},[t._v(t._s(e.label))])]}}])})]],2)],1),s("v-card",{staticClass:"auto-margin",attrs:{color:"#E0E0E0",width:"80%"}},[s("section",{staticClass:"body py-3"},[s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"features"}},[t._v("Features")])]),[s("v-list",[s("v-list-item",[s("v-icon",{staticClass:"mr-3",attrs:{color:"#333"}},[t._v("mdi-arrow-right-bold-hexagon-outline")]),t._v("\n                  Easy install\n                ")],1),s("v-list-item",[s("v-icon",{staticClass:"mr-3",attrs:{color:"#333"}},[t._v("mdi-arrow-right-bold-hexagon-outline")]),t._v("\n                  Highly customizable\n                ")],1),s("v-list-item",[s("v-icon",{staticClass:"mr-3",attrs:{color:"#333"}},[t._v("mdi-arrow-right-bold-hexagon-outline")]),t._v("\n                  Extensive documentation & examples\n                ")],1),s("v-list-item",[s("v-icon",{staticClass:"mr-3",attrs:{color:"#333"}},[t._v("mdi-arrow-right-bold-hexagon-outline")]),t._v("\n                  Developer support\n                ")],1),s("v-list-item",[s("v-icon",{staticClass:"mr-3",attrs:{color:"#333"}},[t._v("mdi-arrow-right-bold-hexagon-outline")]),t._v("\n                  SEO friendly\n                ")],1)],1)]],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"installation"}},[t._v("Installation")])]),[s("v-row",{attrs:{justify:"start"}},[s("v-col",[s("v-sheet",{staticClass:"py-3",attrs:{color:"grey lighten-3"}},[s("p",[s("em",{staticClass:"d-block py-3"},[t._v("# Yarn")]),s("pre",[s("code",{staticClass:"has-line-data language-javascript",attrs:{"data-line-start":"1","data-line-end":"3"}},[t._v("yarn add vue-share-it\n")])])]),s("p",[s("em",{staticClass:"d-block py-3"},[t._v("# NPM")]),s("pre",[s("code",{staticClass:"has-line-data language-javascript",attrs:{"data-line-start":"1","data-line-end":"3"}},[t._v("npm install vue-share-it --save\n")])])])])],1)],1)]],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"usage"}},[t._v("Usage")])]),[s("v-row",{attrs:{justify:"start"}},[s("v-col",[s("v-sheet",{staticClass:"py-3",attrs:{color:"grey lighten-3"}},[s("p",[s("em",{staticClass:"d-block py-3"},[t._v("Browserify/Webpack")]),s("pre",[s("code",{staticClass:"has-line-data language-javascript",attrs:{"data-line-start":"1","data-line-end":"5"}},[s("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" shareIt "),s("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'vue-share-it'")]),t._v(";\n\nVue.use(shareIt);\n")])])]),s("p",[s("em",{staticClass:"d-block py-3"},[t._v("HTML")]),s("pre",[s("code",{staticClass:"has-line-data language-html",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("script")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("src")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"https://unpkg.com/vue-share-it@x.x.x/dist/vue-share-it.js"')]),t._v(">")]),s("span",{staticClass:"undefined"}),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("script")]),t._v(">")]),t._v("\n")])])])])],1)],1)]],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"supported-platforms"}},[t._v("Supported platforms")])]),[s("v-row",{attrs:{justify:"start"}},[s("v-col",[s("v-sheet",{staticClass:"py-3",attrs:{color:"grey lighten-3"}},[[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[s("strong",[t._v("Platform")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("id")])])])]),s("tbody",t._l(t.platformList,(function(a){return s("tr",{key:a.name},[s("td",{staticClass:"text-center"},[t._v(t._s(a.name))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.id))])])})),0)]},proxy:!0}])})]],2)],1)],1)]],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"api"}},[t._v("API")])]),[s("v-row",{attrs:{justify:"start"}},[s("v-col",[s("v-sheet",{staticClass:"py-3",attrs:{color:"grey lighten-3"}},[s("div",{staticClass:"text-left ml-3 sub-title"},[s("a",{staticClass:"content-link sub-link",attrs:{name:"api-props"}},[t._v("Props")])]),s("v-divider"),[s("v-simple-table",{staticClass:"pb-3",scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[s("strong",[t._v("Prop")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Data type")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Default")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Description")])])])]),s("tbody",t._l(t.propsList,(function(a){return s("tr",{key:a.name},[s("td",{staticClass:"text-center"},[t._v(t._s(a.name))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.type))]),s("td",{staticClass:"text-center",domProps:{innerHTML:t._s(a.default)}}),s("td",{staticClass:"text-center",domProps:{innerHTML:t._s(a.description)}})])})),0)]},proxy:!0}])})],s("v-divider"),s("div",{staticClass:"text-left ml-3 sub-title"},[s("a",{staticClass:"content-link sub-link",attrs:{name:"api-events"}},[t._v("Events")])]),s("v-divider"),[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[s("strong",[t._v("Name")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Description")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Value")])])])]),s("tbody",t._l(t.eventsList,(function(a){return s("tr",{key:a.name},[s("td",{staticClass:"text-center"},[t._v(t._s(a.name))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.description))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.value))])])})),0)]},proxy:!0}])})],s("v-divider"),s("div",{staticClass:"text-left ml-3 sub-title"},[s("a",{staticClass:"content-link sub-link",attrs:{name:"api-slots"}},[t._v("Slots")])]),s("v-divider"),[s("v-simple-table",{staticClass:"pb-3",scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-center"},[s("strong",[t._v("Name")])]),s("th",{staticClass:"text-center"},[s("strong",[t._v("Description")])])])]),s("tbody",t._l(t.slotsList,(function(a){return s("tr",{key:a.name},[s("td",{staticClass:"text-center"},[t._v(t._s(a.name))]),s("td",{staticClass:"text-center"},[t._v(t._s(a.description))])])})),0)]},proxy:!0}])})]],2)],1)],1)]],2)],1)])]),s("v-card",{staticClass:"auto-margin",attrs:{color:"#E0E0E0",width:"80%"}},[s("section",{staticClass:"body"},[s("div",{staticClass:"title"},[s("a",{staticClass:"content-link",attrs:{name:"examples"}},[t._v("Examples")])]),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-default"}},[t._v("Default")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("shareit")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it")],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-global-configs"}},[t._v("Global configs")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("text")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"A highly customizable Vue.js component for sharing links on social networks."')]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("url")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"https://github.com/thisDOTname/vue-share-it"')]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":height")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"600"')]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":width")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"600"')]),t._v(" />")]),t._v(" ")])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{text:"A highly customizable Vue.js component for sharing links on social networks.",url:"https://github.com/thisDOTname/vue-share-it",height:600,width:600}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-targets"}},[t._v("Targets")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":targets")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v("\"['twitter', 'facebook']\"")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{targets:["twitter","facebook"]}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-dark"}},[t._v("Dark")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("dark")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{dark:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-dense"}},[t._v("Dense")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("dense")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{dense:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-outlined"}},[t._v("Outlined")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("outline")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{outline:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-button-configs"}},[t._v("Button configs")])]),[s("v-card",[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.scriptIconColor}},[t._v("mdi-language-javascript")]),s("strong",[t._v("Script")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":share-config")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"share"')]),t._v(" />")])])])])],1)],1)],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-javascript has-line-data",attrs:{"data-line-start":"1","data-line-end":"21"}},[s("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" share = {\n  twitter: {\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"2x"')]),t._v(",\n    label: "),s("span",{staticClass:"hljs-string"},[t._v('"Custom label!"')]),t._v("\n  },\n  linkedin: {\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"2x"')]),t._v(",\n    color: "),s("span",{staticClass:"hljs-string"},[t._v('"#333"')]),t._v(",\n    backgroundColor: "),s("span",{staticClass:"hljs-string"},[t._v('"yellow"')]),t._v("\n  },\n  facebook: {\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"3x"')]),t._v(",\n    dark: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n  },\n  whatsapp: {\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"2x"')]),t._v(",\n    dense: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    outline: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    color: "),s("span",{staticClass:"hljs-string"},[t._v('"green"')]),t._v("\n  },\n};")])])])],1)],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{shareConfig:t.share}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-icons"}},[t._v("Icons")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":icons")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"true"')]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{icons:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-outlined-icons"}},[t._v("Outlined icons")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("icons")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("outline")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{icons:"",outline:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-rounded-icons"}},[t._v("Rounded icons")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("icons")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("outline")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("round")]),t._v(" />")])])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{icons:"",outline:"",round:""}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-icon-configs"}},[t._v("Icon configs")])]),[s("v-card",[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.scriptIconColor}},[t._v("mdi-language-javascript")]),s("strong",[t._v("Script")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-html has-line-data",attrs:{"data-line-start":"1","data-line-end":"3"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v(":share-config")]),t._v("="),s("span",{staticClass:"hljs-value"},[t._v('"iconConfig"')]),t._v(" />")])])])])],1)],1)],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"language-javascript has-line-data",attrs:{"data-line-start":"1","data-line-end":"20"}},[s("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" iconConfig = {\n  twitter: {\n    icon: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(",\n    color: "),s("span",{staticClass:"hljs-string"},[t._v('"#333"')]),t._v(",\n    round: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    backgroundColor: "),s("span",{staticClass:"hljs-string"},[t._v('"yellow"')]),t._v(",\n  },\n  linkedin: {\n    icon: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"lg"')]),t._v(",\n    outline: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    round: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  },\n  facebook: {\n    icon: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"2x"')]),t._v(",\n    outline: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    round: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  },\n  whatsapp: {\n    icon: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    size: "),s("span",{staticClass:"hljs-string"},[t._v('"4x"')]),t._v(",\n    outline: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    round: "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  },\n};\n              ")])])])],1)],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{attrs:{shareConfig:t.iconConfig}})],1)],2)],1),s("section",{staticClass:"example"},[s("v-card",{staticClass:"mx-auto",attrs:{color:"#ededed"}},[s("div",{staticClass:"sub-heading x-pad"},[s("a",{staticClass:"content-link",attrs:{name:"example-using-slots"}},[t._v("Using slots")])]),[s("v-tabs",{attrs:{vertical:""}},[s("v-tab",{staticClass:"justify-content-left"},[s("v-icon",{attrs:{left:"",color:t.htmlIconColor}},[t._v("mdi-language-html5")]),s("strong",[t._v("Template")])],1),s("v-tab-item",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("code-highlight",[s("pre",[s("code",{staticClass:"has-line-data language-html",attrs:{"data-line-start":"1","data-line-end":"16"}},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("v-slot:twitter-icon")]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("v-icon")]),t._v(">")]),t._v("mdi-twitter"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("v-icon")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("v-slot:twitter-label")]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("em")]),t._v(">")]),t._v("Tweet it!"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("em")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("v-slot:whatsapp-icon")]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("v-icon")]),t._v(">")]),t._v("mdi-whatsapp"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("v-icon")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(" "),s("span",{staticClass:"hljs-attribute"},[t._v("v-slot:whatsapp-label")]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-title"},[t._v("em")]),t._v(">")]),t._v("Share on Whatsapp"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("em")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-title"},[t._v("share-it")]),t._v(">")]),t._v("\n")])])])],1)],1)],1)],1)],s("div",{staticClass:"x-pad"},[s("share-it",{scopedSlots:t._u([{key:"twitter-icon",fn:function(){return[s("v-icon",[t._v("mdi-twitter")])]},proxy:!0},{key:"twitter-label",fn:function(){return[s("em",[t._v("Tweet it!")])]},proxy:!0},{key:"whatsapp-icon",fn:function(){return[s("v-icon",[t._v("mdi-whatsapp")])]},proxy:!0},{key:"whatsapp-label",fn:function(){return[s("em",[t._v("Share on Whatsapp")])]},proxy:!0}])})],1)],2)],1)])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-bar"},[s("div",{staticClass:"nav-logo"},[t._v("\n        vue-share-it\n      ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"new-header"},[e("div",{staticClass:"header-container"},[e("img",{attrs:{src:s("ff4d"),width:"50%"}}),e("div",{staticClass:"header-text"},[e("div",{staticClass:"full-width"},[e("div",{staticClass:"heading text-1"},[t._v("vue-share-it")]),e("hr",{staticClass:"head-divider"}),e("div",{staticClass:"sub-heading text-2"},[t._v("A highly customizable Vue.js component for sharing links on social networks.")]),e("div",{staticClass:"py-3 text-1"},[e("img",{staticClass:"mr-3",attrs:{src:"https://img.shields.io/npm/v/vue-share-it"}}),e("img",{staticClass:"mr-3",attrs:{src:"https://img.shields.io/badge/vue-2.x-brightgreen"}}),e("img",{staticClass:"mr-3",attrs:{src:"https://img.shields.io/npm/l/vue-share-it"}})])])])])])}],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-layout",[s("v-flex",{staticClass:"align-left",attrs:{xs12:""}},[t._t("default")],2)],1)],1)},r=[],c={data:()=>({})},o=c,v=(s("5fd0"),s("2877")),d=s("6544"),p=s.n(d),h=s("a523"),u=s("0e8f"),_=s("a722"),C=Object(v["a"])(o,n,r,!1,null,"4a9e2d7c",null),m=C.exports;p()(C,{VContainer:h["a"],VFlex:u["a"],VLayout:_["a"]});var g={name:"app",components:{codeHighlight:m},data(){return{share:{twitter:{size:"2x",label:"Custom label!",round:!0},linkedin:{size:"2x",color:"#333",backgroundColor:"yellow"},facebook:{size:"3x",dark:!0},whatsapp:{size:"2x",dense:!0,outline:!0,color:"green"}},iconConfig:{twitter:{icon:!0,size:"sm",color:"#333",round:!0,backgroundColor:"yellow"},linkedin:{icon:!0,size:"lg",outline:!0,round:!0},facebook:{icon:!0,size:"2x",outline:!0,round:!0},whatsapp:{icon:!0,size:"3x",outline:!0,round:!0},reddit:{icon:!0,size:"4x",outline:!0,round:!0}},htmlIconColor:"#e44d26",scriptIconColor:"#f8af00",platformList:[{name:"Twitter",id:"twitter"},{name:"LinkedIn",id:"linkedin"},{name:"Facebook",id:"facebook"},{name:"Whatsapp",id:"whatsapp"},{name:"Reddit",id:"reddit"}],propsList:[{name:"text",type:"String",default:'""',description:"Caption"},{name:"url",type:"String",default:'""',description:"URL to share"},{name:"width",type:"Number",default:"600",description:"Width of the share window"},{name:"height",type:"Number",default:"600",description:"Height of the share window"},{name:"dense",type:"Boolean",default:"false",description:"Dense button styling"},{name:"dark",type:"Boolean",default:"false",description:"Dark button styling"},{name:"targets",type:"Array",default:"[]",description:"Specify social media targets, defaults to all available targets"},{name:"icons",type:"Boolean",default:"false",description:"Use icons as buttons"},{name:"outline",type:"Boolean",default:"false",description:"Outline button styling"},{name:"round",type:"Boolean",default:"false",description:"Round button styling for icons"},{name:"iconSize",type:"String",default:"lg",description:"Specify icon size. See [size chart](#sizeChart) below"},{name:"shareConfig",type:"Object",default:"{<br><br>linkedin: {},<br><br>twitter: {},<br><br>facebook: {},<br><br>whatsapp: {},<br><br>reddit: {},<br><br>}",description:"Advanced configuration for target specific styling"}],eventsList:[{name:"clicked",description:"Event that is emitted when a share button is clicked",value:'Returns social media platform which was clicked. E.g. ["twitter"]'}],slotsList:[{name:"`${platform}-icon`",description:"Custom icon for platform"},{name:"`${platform}-label`",description:"Custom label for platform"}],content:[{label:"Features",value:"features"},{label:"Installation",value:"installation"},{label:"Usage",value:"usage"},{label:"Supported platforms",value:"supported-platforms"},{label:"API",value:"api",children:[{label:"Props",value:"api-props"},{label:"Events",value:"api-events"},{label:"Slots",value:"api-slots"}]},{label:"Examples",value:"examples",children:[{label:"Default",value:"example-default"},{label:"Global configs",value:"example-global-configs"},{label:"Targets",value:"example-targets"},{label:"Dark",value:"example-dark"},{label:"Dense",value:"example-dense"},{label:"Outlined",value:"example-outlined"},{label:"Button configs",value:"example-button-configs"},{label:"Outlined icons",value:"example-outlined-icons"},{label:"Rounded icons",value:"example-rounded-icons"},{label:"Icon configs",value:"example-icon-configs"},{label:"Using slots",value:"example-using-slots"}]}]}},computed:{pageURL(){return window.location.href}},mounted(){window.addEventListener("hashchange",()=>{window.scrollTo(window.scrollX,window.scrollY-100)})},beforeDestroy(){window.removeEventListener("hashchange")}},f=g,b=(s("034f"),s("b0af")),x=s("99d9"),j=s("62ad"),y=s("ce7e"),w=s("132d"),k=s("8860"),T=s("da13"),I=s("0fd9"),S=s("8dd9"),z=s("1f4f"),V=s("71a3"),E=s("c671"),O=s("fe57"),L=s("eb2a"),D=Object(v["a"])(f,l,i,!1,null,null,null),P=D.exports;p()(D,{VCard:b["a"],VCardText:x["a"],VCol:j["a"],VDivider:y["a"],VIcon:w["a"],VLayout:_["a"],VList:k["a"],VListItem:T["a"],VRow:I["a"],VSheet:S["a"],VSimpleTable:z["a"],VTab:V["a"],VTabItem:E["a"],VTabs:O["a"],VTreeview:L["a"]});var B=s("cd06"),M=s("f309");e["a"].use(M["a"]);var R=new M["a"]({icons:{iconfont:"mdi"}});e["a"].config.productionTip=!1,e["a"].config.ignoredElements=[/snippet-\w*/],e["a"].use(B["a"]),new e["a"]({vuetify:R,render:t=>t(P)}).$mount("#app")},"5fd0":function(t,a,s){"use strict";var e=s("188f"),l=s.n(e);l.a},"71ec":function(t,a,s){},ff4d:function(t,a,s){t.exports=s.p+"img/share-it.bdb83b8c.png"}});