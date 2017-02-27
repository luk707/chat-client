!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=React},function(t,e){},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this;return i.createElement("button",{onClick:this.props.onClick,className:["navbarButton","menu"].filter(function(e){switch(e){case"menu":return t.props.menu;default:return!0}}).join(" ")},i.createElement("div",{className:["icon"].join(" ")},i.createElement("i",{className:["fa","fa-"+this.props.faIcon].join(" ")})),i.createElement("div",{className:["content"].join(" ")},i.createElement("span",null,this.props.label)))},e}(i.Component);e.NavbarButton=a;var c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={open:!1},n}return r(e,t),e.prototype.render=function(){var t=this;return i.createElement("div",{className:["navbarContainer"].join(" ")},i.createElement("div",{className:["navbarCollapse","open"].filter(function(e){switch(e){case"open":return t.state.open;default:return!0}}).join(" ")},i.createElement(a,{menu:!0,onClick:function(){t.setState(function(t,e){return o({},t,{open:!t.open})})},label:"Menu",faIcon:"bars"}),this.props.items.top.map(function(t){return i.createElement(a,o({onClick:t.onClick},t))}),i.createElement("div",{className:["flex"].join(" ")}),this.props.items.bottom.map(function(t){return i.createElement(a,o({},t))})))},e}(i.Component);e.Navbar=c},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(5),c=n(6),s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={view:"master",detail:null},n}return r(e,t),e.prototype.render=function(){var t=this;return i.createElement(a.SplitView,{state:this.state.view,masterView:i.createElement("div",{className:["column"].join(" ")},i.createElement(c.Toolbar,{buttons:{left:[],right:[]},title:"Master"}),i.createElement("div",{className:["padded"].join(" ")},i.createElement("h1",null,"Test View"),i.createElement("ul",null,[{title:"test 1",content:"This is the content for test 1."},{title:"test 2",content:"This is the content for test 2."}].map(function(e){return i.createElement("li",null,i.createElement("a",{onClick:function(){t.setState(function(t){return o({},t,{view:"detail",detail:e})})},href:"#"},e.title))})))),detailView:i.createElement("div",{className:["column"].join(" ")},i.createElement(c.Toolbar,{buttons:{left:[{faIcon:"chevron-left",onClick:function(){t.setState(function(t){return o({},t,{view:"master"})})}}],right:[{faIcon:"user"}]},title:"Detail"}),i.createElement("div",{className:["padded"].join(" ")},this.state.detail?i.createElement("div",null,i.createElement("h1",null,this.state.detail.title),i.createElement("p",null,this.state.detail.content)):i.createElement("h2",null,"Error")))})},e}(i.Component);e.TestRoute=s},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:"column"},o.createElement("h1",null,"Test View"))},e}(o.Component);e.TestView=i;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this;return o.createElement("div",{className:["splitView"].join(" ")},o.createElement("div",{className:["splitViewContainer","detail","both"].filter(function(e){switch(e){case"detail":return"detail"==t.props.state;case"both":return"both"==t.props.state}return!0}).join(" ")},o.createElement("div",{className:["master"].join(" ")},this.props.masterView),o.createElement("div",{className:["detail"].join(" ")},this.props.detailView)))},e}(o.Component);e.SplitView=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:["toolbar"].join(" ")},this.props.buttons.left.map(function(t){return o.createElement("button",{onClick:t.onClick},o.createElement("i",{className:["fa","fa-"+t.faIcon].join(" ")}))}),o.createElement("div",{className:["flex"].join(" ")}),o.createElement("span",{className:["title"].join(" ")},this.props.title),o.createElement("div",{className:["flex"].join(" ")}),this.props.buttons.right.map(function(t){return o.createElement("button",{onClick:t.onClick},o.createElement("i",{className:["fa","fa-"+t.faIcon].join(" ")}))}))},e}(o.Component);e.Toolbar=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(4),i=n(2),a=n(3);n(1);o.render(r.createElement("div",{className:"row"},r.createElement(i.Navbar,{items:{top:[{label:"User",faIcon:"user"},{label:"Channels",faIcon:"comments"},{label:"Direct Messages",faIcon:"inbox"}],bottom:[{label:"Info",faIcon:"info-circle"},{label:"Settings",faIcon:"sliders"}]}}),r.createElement(a.TestRoute,null)),document.getElementById("app"))}]);