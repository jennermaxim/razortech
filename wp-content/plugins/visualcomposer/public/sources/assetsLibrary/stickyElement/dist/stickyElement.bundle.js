!function(t){function i(i,k={}){this.selector=i,t.vcStickyElements=[],this.vp=p(),this.body=document.querySelector("body"),this.options={wrap:k.wrap||!0,marginTop:k.marginTop||0,stickyFor:k.stickyFor||0,stickyClass:k.stickyClass||null,stickyAttribute:k.stickyAttribute||null,stickyContainer:k.stickyContainer||"body",isFullWidth:k.isFullWidth||!1,stickyZIndex:k.isFullWidth||null,stickyVisibility:k.stickyVisibility||null},b=b.bind(this),s=s.bind(this),e=e.bind(this),c=c.bind(this),y=y.bind(this),n=n.bind(this),o=o.bind(this),r=r.bind(this),l=l.bind(this),a=a.bind(this),d=d.bind(this),u=u.bind(this),p=p.bind(this),b=b.bind(this),f=f.bind(this),v=v.bind(this),b(),t.addEventListener("load",b),t.addEventListener("scroll",b),s()}function s(){f(document.querySelectorAll(this.selector),(t=>e(t)))}function e(t){t.sticky={},t.sticky.active=!1,t.sticky.marginTop=parseInt(t.getAttribute("data-margin-top"))||this.options.marginTop,t.sticky.stickyFor=parseInt(t.getAttribute("data-sticky-for"))||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.stickyAttribute=t.getAttribute("data-sticky-attribute")||this.options.stickyAttribute,t.sticky.stickyOffsetAttribute="data-vcv-sticky-element-active-offset",t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=t.getAttribute("data-vce-sticky-container")||this.options.stickyContainer,t.sticky.stickyZIndex=t.getAttribute("data-vce-sticky-z-index")||this.options.stickyZIndex,t.sticky.isFullWidth="true"===t.getAttribute("data-vce-full-width")||this.options.isFullWidth,t.sticky.stickyVisibility="true"===t.getAttribute("data-vce-sticky-visibility")||this.options.stickyVisibility,t.sticky.container=d(t),t.sticky.container.rect=u(t.sticky.container,!0,t.sticky.isFullWidth),t.sticky.rect=u(t,!1,t.sticky.isFullWidth),v(t,k({zIndex:t.sticky.stickyZIndex},t.sticky.isFullWidth)),"img"===t.tagName.toLowerCase()&&(t.onload=()=>t.sticky.rect=u(t,!1,t.sticky.isFullWidth)),c(t)}function c(i){i.sticky.rect.top+i.sticky.rect.height<i.sticky.container.rect.top+i.sticky.container.rect.height&&i.sticky.stickyFor<this.vp.width&&!i.sticky.active&&(i.sticky.active=!0),t.vcStickyElements.indexOf(i)<0&&t.vcStickyElements.push(i),i.sticky.resizeEvent||(y(i),i.sticky.resizeEvent=!0),i.sticky.scrollEvent||(function(i){i.sticky.scrollListener=()=>r(i),t.addEventListener("scroll",i.sticky.scrollListener)}(i),i.sticky.scrollEvent=!0),l(i)}function y(i){i.sticky.resizeListener=()=>setTimeout((()=>o(i)),0),t.addEventListener("resize",i.sticky.resizeListener)}function n(i){i&&i.sticky&&t.removeEventListener("resize",i.sticky.resizeListener)}function o(t){this.vp=p(),t.sticky.rect=u(t,!1,t.sticky.isFullWidth),t.sticky.container.rect=u(t.sticky.container,!0,t.sticky.isFullWidth),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),l(t)}function r(t){t&&t.sticky&&t.sticky.active&&l(t)}function k(t,i){return i&&(delete t.width,delete t.left),t}function l(t){v(t,k({position:"",width:"",top:"",left:"",opacity:1,visibility:"visible"},t.sticky.isFullWidth)),t.sticky.rect.width||(t.sticky.rect=u(t,!1,t.sticky.isFullWidth)),t.sticky.wrap&&(v(t.parentNode,k({display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px",position:t.sticky.stickyVisibility?"absolute":""},t.sticky.isFullWidth)),v(t.parentNode.parentNode,{position:"relative"})),t.sticky.stickyVisibility&&v(t,k({width:"",top:"",left:"",position:"absolute",opacity:0,visibility:"hidden"},t.sticky.isFullWidth)),0===t.sticky.rect.top&&t.sticky.container===this.body?(t.sticky.stickyVisibility&&v(t.parentNode,k({height:""},t.sticky.isFullWidth)),v(t,k({position:"fixed",top:t.sticky.marginTop+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px",visibility:"visible",opacity:1},t.sticky.isFullWidth)),t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),t.sticky.stickyAttribute&&t.setAttribute(t.sticky.stickyAttribute,!0),t.removeAttribute(t.sticky.stickyOffsetAttribute)):this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(t.sticky.stickyVisibility&&v(t.parentNode,k({height:""},t.sticky.isFullWidth)),v(t,k({position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px",visibility:"visible",opacity:1},t.sticky.isFullWidth)),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),t.sticky.stickyAttribute&&t.removeAttribute(t.sticky.stickyAttribute),t.setAttribute(t.sticky.stickyOffsetAttribute,!0),v(t,k({top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height)+"px"},t.sticky.isFullWidth))):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),t.sticky.stickyAttribute&&t.setAttribute(t.sticky.stickyAttribute,!0),t.removeAttribute(t.sticky.stickyOffsetAttribute),v(t,k({top:t.sticky.marginTop+"px"},t.sticky.isFullWidth)))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),t.sticky.stickyAttribute&&t.removeAttribute(t.sticky.stickyAttribute),t.removeAttribute(t.sticky.stickyOffsetAttribute),v(t,k({position:"",width:"",top:"",left:"",opacity:"",height:"",visibility:""},t.sticky.isFullWidth)),t.sticky.wrap&&!t.sticky.stickyVisibility&&v(t.parentNode,k({display:"",width:"",height:"",position:""},t.sticky.isFullWidth)))}function a(){f(t.vcStickyElements,(t=>{t.sticky.rect=u(t,!1,t.sticky.isFullWidth),t.sticky.container.rect=u(t.sticky.container,!0,t.sticky.isFullWidth),c(t),l(t)}))}function d(t){let i=h(t,t.sticky.stickyContainer);return t.sticky.stickyContainer&&!i&&(i=h(t,"[data-vcv-layout-zone]")),i||(i=this.body),i}function h(t,i){let s,e;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(t){return"function"==typeof document.body[t]&&(s=t,!0)}));t;){if(e=t.parentElement,e&&e[s](i))return e;t=e}return null}function u(i,s=!1,e=!1){v(i,k({position:"",width:"",top:"",left:""},e)),s||v(i.parentElement,k({position:"",width:"",top:"",left:""},e));const c=i.getBoundingClientRect(),y=document.body,n=document.documentElement,o=t.pageYOffset||n.scrollTop||y.scrollTop,r=t.pageXOffset||n.scrollLeft||y.scrollLeft,l=n.clientTop||y.clientTop||0,a=n.clientLeft||y.clientLeft||0;return{top:c.top+o-l,left:c.left+r-a,width:c.width,height:c.height}}function p(){return{width:Math.max(document.documentElement.clientWidth,t.innerWidth||0),height:Math.max(document.documentElement.clientHeight,t.innerHeight||0)}}function b(){this.scrollTop=(t.pageYOffset||document.scrollTop)-(document.clientTop||0)||0}function f(t,i){for(let s=0,e=t.length;s<e;s++)i(t[s])}function v(t,i){if(t)for(let s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t.style[s]=i[s])}i.prototype.destroy=function(){f(t.vcStickyElements,(i=>{n(i),function(i){i&&i.sticky&&t.removeEventListener("scroll",i.sticky.scrollListener)}(i),i.sticky.stickyClass&&i.classList.remove(i.sticky.stickyClass),i.sticky.stickyAttribute&&i.removeAttribute(i.sticky.stickyAttribute),i.removeAttribute(i.sticky.stickyOffsetAttribute),v(i,k({position:"",width:"",top:"",left:""},i.sticky.isFullWidth)),i.sticky.wrap&&v(i.parentNode,k({display:"",width:"",height:"",position:""},i.sticky.isFullWidth)),delete i.sticky})),t.vcStickyElements=[]},t.vcSticky=i}(window),function(){"use strict";!function(t){t.vcStickySettings=null,t.vcv.on("ready",(function(i,s){if("merge"!==i){var e={wrap:!0,stickyAttribute:"data-vcv-sticky-element-active"},c=i?500:10;t.vcSticky?setTimeout((function(){t.vcStickySettings&&t.vcStickySettings.destroy(),t.vcStickySettings=new t.vcSticky("[data-vce-sticky-element]",e)}),c):console.error("vcSticky library is not enqueued")}}))}(window)}();