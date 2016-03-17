!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InfiniteScroll=t(require("react")):e.InfiniteScroll=t(e.React)}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=function(e,t,o){for(var r=!0;r;){var n=e,i=t,s=o;r=!1,null===n&&(n=Function.prototype);var l=Object.getOwnPropertyDescriptor(n,i);if(void 0!==l){if("value"in l)return l.value;var c=l.get;if(void 0===c)return;return c.call(s)}var p=Object.getPrototypeOf(n);if(null===p)return;e=p,t=i,o=s,r=!0,l=p=void 0}},c=o(2),p=r(c),a=o(1),u=r(a),h=function(e){function t(e){n(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.state={showLoader:!1,lastScrollTop:0,actionTriggered:!1},this.onScrollListener=this.onScrollListener.bind(this),this.debouncedOnScrollListener=(0,u["default"])(this.onScrollListener,150).bind(this)}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.el=this.props.height?this.refs.infScroll:window,this.el.addEventListener("scroll",this.debouncedOnScrollListener)}},{key:"componentWillUnMount",value:function(){this.el.removeEventListener("scroll",this.debouncedOnScrollListener)}},{key:"componentWillReceiveProps",value:function(e){this.setState({showLoader:!1,actionTriggered:!1})}},{key:"isElementAtBottom",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?.8:arguments[1],o=t*(e.scrollHeight-e.scrollTop),r=e.clientHeight;return r>o}},{key:"onScrollListener",value:function(e){var t=this.props.height?e.target:document.documentElement.scrollTop?document.documentElement:document.body;if(t.scrollTop<this.state.lastScrollTop)return void this.setState({actionTriggered:!1,lastScrollTop:t.scrollTop});if(!this.state.actionTriggered){var o=this.isElementAtBottom(t,this.props.scrollThreshold);o&&this.props.hasMore&&(this.props.next(),this.setState({actionTriggered:!0,showLoader:!0})),this.setState({lastScrollTop:t.scrollTop})}}},{key:"render",value:function(){var e={height:this.props.height||"auto",overflow:"auto"},t=this.props.hasChildren||!(!this.props.children||!this.props.children.length);return p["default"].createElement("div",{className:"infinite-scroll-component",ref:"infScroll",style:e},this.props.children,!this.state.showLoader&&!t&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.loader,!this.props.hasMore&&p["default"].createElement("p",{style:{textAlign:"center"}},this.props.endMessage||p["default"].createElement("b",null,"Yay! You have seen it all")))}}]),t}(c.Component);t["default"]=h,h.propTypes={next:c.PropTypes.func,hasMore:c.PropTypes.bool,children:c.PropTypes.node,loader:c.PropTypes.node.isRequired,scrollThreshold:c.PropTypes.number,endMessage:c.PropTypes.node,style:c.PropTypes.object,height:c.PropTypes.number,hasChildren:c.PropTypes.bool},e.exports=t["default"]},function(e,t){"use strict";function o(e,t){var o=void 0;return function(){var r=this,n=arguments,i=function(){o=null,e.apply(r,n)};clearTimeout(o),o=setTimeout(i,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},function(t,o){t.exports=e}])});