/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */e=e&&e.hasOwnProperty("default")?e.default:e,u=u&&u.hasOwnProperty("default")?u.default:u;var g=function(s){// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function l(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function t(){return{bindType:o.end,delegateType:o.end,handle:function t(e){if(s(e.target).is(this))return e.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}}}function e(){return("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"}}function n(t){var e=this,n=!1;return s(this).one(h.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||h.triggerTransitionEnd(e)},t),this}function i(){o=e(),s.fn.emulateTransitionEnd=n,h.supportsTransitionEnd()&&(s.event.special[h.TRANSITION_END]=t())}function r(t){
// We escape IDs in case of special selectors (selector = '#myId:something')
// $.escapeSelector does not exist in jQuery < 3
return t="function"==typeof s.escapeSelector?s.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}
/**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
var o=!1,a=1e6,h={TRANSITION_END:"bsTransitionEnd",getUID:function t(e){for(;
// eslint-disable-next-line no-bitwise
e+=~~(Math.random()*a),document.getElementById(e););return e},getSelectorFromElement:function t(e){var n=e.getAttribute("data-target");n&&"#"!==n||(n=e.getAttribute("href")||""),// If it's an ID
"#"===n.charAt(0)&&(n=r(n));try{var i;return 0<s(document).find(n).length?n:null}catch(t){return null}},reflow:function t(e){return e.offsetHeight},triggerTransitionEnd:function t(e){s(e).trigger(o.end)},supportsTransitionEnd:function t(){return Boolean(o)},isElement:function t(e){return(e[0]||e).nodeType},typeCheckConfig:function t(e,n,i){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var r=i[s],o=n[s],a=o&&h.isElement(o)?"element":l(o);if(!new RegExp(r).test(a))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}}};return i(),h}(e),s=(l="alert",h="4.0.0",f="."+(c="bs.alert"),d=".data-api",_=(o=e).fn[l],m=150,p='[data-dismiss="alert"]',v={CLOSE:"close"+f,CLOSED:"closed"+f,CLICK_DATA_API:"click"+f+d},E="alert",y="fade",C="show"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,T=
/* */
function(){function i(t){this._element=t}// Getters
var t=i.prototype;
// Public
return t.close=function t(e){e=e||this._element;var n=this._getRootElement(e),i;this._triggerCloseEvent(n).isDefaultPrevented()||this._removeElement(n)},t.dispose=function t(){o.removeData(this._element,c),this._element=null},// Private
t._getRootElement=function t(e){var n=g.getSelectorFromElement(e),i=!1;return n&&(i=o(n)[0]),i||(i=o(e).closest("."+E)[0]),i},t._triggerCloseEvent=function t(e){var n=o.Event(v.CLOSE);return o(e).trigger(n),n},t._removeElement=function t(e){var n=this;o(e).removeClass(C),g.supportsTransitionEnd()&&o(e).hasClass(y)?o(e).one(g.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(m):this._destroyElement(e)},t._destroyElement=function t(e){o(e).detach().trigger(v.CLOSED).remove()},// Static
i._jQueryInterface=function t(n){return this.each(function(){var t=o(this),e=t.data(c);e||(e=new i(this),t.data(c,e)),"close"===n&&e[n](this)})},i._handleDismiss=function t(e){return function(t){t&&t.preventDefault(),e.close(this)}},r(i,null,[{key:"VERSION",get:function t(){return h}}]),i}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
o(document).on(v.CLICK_DATA_API,p,T._handleDismiss(new T)),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
o.fn[l]=T._jQueryInterface,o.fn[l].Constructor=T,o.fn[l].noConflict=function(){return o.fn[l]=_,T._jQueryInterface},T),o,l,h,c,f,d,_,m,p,v,E,y,C,T,b=(w="button",A="4.0.0",S="."+(D="bs.button"),N=".data-api",O=(I=e).fn[w],k="active",P="btn",H='[data-toggle^="button"]',L='[data-toggle="buttons"]',R="input",x=".active",U=".btn",W={CLICK_DATA_API:"click"+S+N,FOCUS_BLUR_DATA_API:(j="focus")+S+N+" blur"+S+N
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */},K=
/* */
function(){function n(t){this._element=t}// Getters
var t=n.prototype;
// Public
return t.toggle=function t(){var e=!0,n=!0,i=I(this._element).closest(L)[0];if(i){var s=I(this._element).find(R)[0];if(s){if("radio"===s.type)if(s.checked&&I(this._element).hasClass(k))e=!1;else{var r=I(i).find(x)[0];r&&I(r).removeClass(k)}if(e){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!I(this._element).hasClass(k),I(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!I(this._element).hasClass(k)),e&&I(this._element).toggleClass(k)},t.dispose=function t(){I.removeData(this._element,D),this._element=null},// Static
n._jQueryInterface=function t(e){return this.each(function(){var t=I(this).data(D);t||(t=new n(this),I(this).data(D,t)),"toggle"===e&&t[e]()})},r(n,null,[{key:"VERSION",get:function t(){return A}}]),n}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
I(document).on(W.CLICK_DATA_API,H,function(t){t.preventDefault();var e=t.target;I(e).hasClass(P)||(e=I(e).closest(U)),K._jQueryInterface.call(I(e),"toggle")}).on(W.FOCUS_BLUR_DATA_API,H,function(t){var e=I(t.target).closest(U)[0];I(e).toggleClass(j,/^focus(in)?$/.test(t.type))}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
I.fn[w]=K._jQueryInterface,I.fn[w].Constructor=K,I.fn[w].noConflict=function(){return I.fn[w]=O,K._jQueryInterface},K),I,w,A,D,S,N,O,k,P,j,H,L,R,x,U,W,K,M=(B="carousel",F="4.0.0",Y="."+(V="bs.carousel"),q=".data-api",z=(Q=e).fn[B],Z=600,J=37,$=39,X={interval:5e3,keyboard:!0,slide:!(G=500),pause:"hover",wrap:!0},tt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},et="next",nt="prev",it="left",st="right",rt={SLIDE:"slide"+Y,SLID:"slid"+Y,KEYDOWN:"keydown"+Y,MOUSEENTER:"mouseenter"+Y,MOUSELEAVE:"mouseleave"+Y,TOUCHEND:"touchend"+Y,LOAD_DATA_API:"load"+Y+q,CLICK_DATA_API:"click"+Y+q},ot="carousel",at="active",lt="slide",ht="carousel-item-right",ct="carousel-item-left",ut="carousel-item-next",ft="carousel-item-prev",dt="carousel-item",gt=".active",_t=".active.carousel-item",mt=".carousel-item",pt=".carousel-item-next, .carousel-item-prev",vt=".carousel-indicators",Et="[data-slide], [data-slide-to]",yt='[data-ride="carousel"]'
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,Ct=
/* */
function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=Q(t)[0],this._indicatorsElement=Q(this._element).find(vt)[0],this._addEventListeners()}// Getters
var t=o.prototype;
// Public
return t.next=function t(){this._isSliding||this._slide(et)},t.nextWhenVisible=function t(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&Q(this._element).is(":visible")&&"hidden"!==Q(this._element).css("visibility")&&this.next()},t.prev=function t(){this._isSliding||this._slide(nt)},t.pause=function t(e){e||(this._isPaused=!0),Q(this._element).find(pt)[0]&&g.supportsTransitionEnd()&&(g.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function t(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function t(e){var n=this;this._activeElement=Q(this._element).find(_t)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)Q(this._element).one(rt.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=i<e?et:nt;this._slide(s,this._items[e])}},t.dispose=function t(){Q(this._element).off(Y),Q.removeData(this._element,V),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},// Private
t._getConfig=function t(e){return e=a({},X,e),g.typeCheckConfig(B,e,tt),e},t._addEventListeners=function t(){var e=this;this._config.keyboard&&Q(this._element).on(rt.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(Q(this._element).on(rt.MOUSEENTER,function(t){return e.pause(t)}).on(rt.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
Q(this._element).on(rt.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},G+e._config.interval)}))},t._keydown=function t(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next();break;default:}},t._getItemIndex=function t(e){return this._items=Q.makeArray(Q(e).parent().find(mt)),this._items.indexOf(e)},t._getItemByDirection=function t(e,n){var i=e===et,s=e===nt,r=this._getItemIndex(n),o=this._items.length-1,a;if((s&&0===r||i&&r===o)&&!this._config.wrap)return n;var l,h=(r+(e===nt?-1:1))%this._items.length;return-1===h?this._items[this._items.length-1]:this._items[h]},t._triggerSlideEvent=function t(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(Q(this._element).find(_t)[0]),r=Q.Event(rt.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return Q(this._element).trigger(r),r},t._setActiveIndicatorElement=function t(e){if(this._indicatorsElement){Q(this._indicatorsElement).find(gt).removeClass(at);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&Q(n).addClass(at)}},t._slide=function t(e,n){var i=this,s=Q(this._element).find(_t)[0],r=this._getItemIndex(s),o=n||s&&this._getItemByDirection(e,s),a=this._getItemIndex(o),l=Boolean(this._interval),h,c,u,f;if(u=e===et?(h=ct,c=ut,it):(h=ht,c=ft,st),o&&Q(o).hasClass(at))this._isSliding=!1;else if(!this._triggerSlideEvent(o,u).isDefaultPrevented()&&s&&o){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(o);var d=Q.Event(rt.SLID,{relatedTarget:o,direction:u,from:r,to:a});g.supportsTransitionEnd()&&Q(this._element).hasClass(lt)?(Q(o).addClass(c),g.reflow(o),Q(s).addClass(h),Q(o).addClass(h),Q(s).one(g.TRANSITION_END,function(){Q(o).removeClass(h+" "+c).addClass(at),Q(s).removeClass(at+" "+c+" "+h),i._isSliding=!1,setTimeout(function(){return Q(i._element).trigger(d)},0)}).emulateTransitionEnd(Z)):(Q(s).removeClass(at),Q(o).addClass(at),this._isSliding=!1,Q(this._element).trigger(d)),l&&this.cycle()}},// Static
o._jQueryInterface=function t(i){return this.each(function(){var t=Q(this).data(V),e=a({},X,Q(this).data());"object"==typeof i&&(e=a({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),Q(this).data(V,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function t(e){var n=g.getSelectorFromElement(this);if(n){var i=Q(n)[0];if(i&&Q(i).hasClass(ot)){var s=a({},Q(i).data(),Q(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),o._jQueryInterface.call(Q(i),s),r&&Q(i).data(V).to(r),e.preventDefault()}}},r(o,null,[{key:"VERSION",get:function t(){return F}},{key:"Default",get:function t(){return X}}]),o}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
Q(document).on(rt.CLICK_DATA_API,Et,Ct._dataApiClickHandler),Q(window).on(rt.LOAD_DATA_API,function(){Q(yt).each(function(){var t=Q(this);Ct._jQueryInterface.call(t,t.data())})}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
Q.fn[B]=Ct._jQueryInterface,Q.fn[B].Constructor=Ct,Q.fn[B].noConflict=function(){return Q.fn[B]=z,Ct._jQueryInterface},Ct),Q,B,F,V,Y,q,z,Z,J,$,G,X,tt,et,nt,it,st,rt,ot,at,lt,ht,ct,ut,ft,dt,gt,_t,mt,pt,vt,Et,yt,Ct,Tt=(It="collapse",wt="4.0.0",Dt="."+(At="bs.collapse"),St=".data-api",Nt=(bt=e).fn[It],Ot=600,kt={toggle:!0,parent:""},Pt={toggle:"boolean",parent:"(string|element)"},jt={SHOW:"show"+Dt,SHOWN:"shown"+Dt,HIDE:"hide"+Dt,HIDDEN:"hidden"+Dt,CLICK_DATA_API:"click"+Dt+St},Ht="show",Lt="collapse",Rt="collapsing",xt="collapsed",Ut="width",Wt="height",Kt=".show, .collapsing",Mt='[data-toggle="collapse"]'
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,Qt=
/* */
function(){function h(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=bt.makeArray(bt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=bt(Mt),i=0;i<n.length;i++){var s=n[i],r=g.getSelectorFromElement(s);null!==r&&0<bt(r).filter(t).length&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var t=h.prototype;
// Public
return t.toggle=function t(){bt(this._element).hasClass(Ht)?this.hide():this.show()},t.show=function t(){var e=this,n,i;if(!this._isTransitioning&&!bt(this._element).hasClass(Ht)&&(this._parent&&0===(n=bt.makeArray(bt(this._parent).find(Kt).filter('[data-parent="'+this._config.parent+'"]'))).length&&(n=null),!(n&&(i=bt(n).not(this._selector).data(At))&&i._isTransitioning))){var s=bt.Event(jt.SHOW);if(bt(this._element).trigger(s),!s.isDefaultPrevented()){n&&(h._jQueryInterface.call(bt(n).not(this._selector),"hide"),i||bt(n).data(At,null));var r=this._getDimension();bt(this._element).removeClass(Lt).addClass(Rt),(this._element.style[r]=0)<this._triggerArray.length&&bt(this._triggerArray).removeClass(xt).attr("aria-expanded",!0),this.setTransitioning(!0);var o=function t(){bt(e._element).removeClass(Rt).addClass(Lt).addClass(Ht),e._element.style[r]="",e.setTransitioning(!1),bt(e._element).trigger(jt.SHOWN)};if(g.supportsTransitionEnd()){var a,l="scroll"+(r[0].toUpperCase()+r.slice(1));bt(this._element).one(g.TRANSITION_END,o).emulateTransitionEnd(Ot),this._element.style[r]=this._element[l]+"px"}else o()}}},t.hide=function t(){var e=this;if(!this._isTransitioning&&bt(this._element).hasClass(Ht)){var n=bt.Event(jt.HIDE);if(bt(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",g.reflow(this._element),bt(this._element).addClass(Rt).removeClass(Lt).removeClass(Ht),0<this._triggerArray.length)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=g.getSelectorFromElement(r),a;if(null!==o)bt(o).hasClass(Ht)||bt(r).addClass(xt).attr("aria-expanded",!1)}this.setTransitioning(!0);var l=function t(){e.setTransitioning(!1),bt(e._element).removeClass(Rt).addClass(Lt).trigger(jt.HIDDEN)};this._element.style[i]="",g.supportsTransitionEnd()?bt(this._element).one(g.TRANSITION_END,l).emulateTransitionEnd(Ot):l()}}},t.setTransitioning=function t(e){this._isTransitioning=e},t.dispose=function t(){bt.removeData(this._element,At),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},// Private
t._getConfig=function t(e){return(e=a({},kt,e)).toggle=Boolean(e.toggle),// Coerce string values
g.typeCheckConfig(It,e,Pt),e},t._getDimension=function t(){var e;return bt(this._element).hasClass(Ut)?Ut:Wt},t._getParent=function t(){var n=this,e=null;g.isElement(this._config.parent)?(e=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=bt(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return bt(e).find(i).each(function(t,e){n._addAriaAndCollapsedClass(h._getTargetFromElement(e),[e])}),e},t._addAriaAndCollapsedClass=function t(e,n){if(e){var i=bt(e).hasClass(Ht);0<n.length&&bt(n).toggleClass(xt,!i).attr("aria-expanded",i)}},// Static
h._getTargetFromElement=function t(e){var n=g.getSelectorFromElement(e);return n?bt(n)[0]:null},h._jQueryInterface=function t(i){return this.each(function(){var t=bt(this),e=t.data(At),n=a({},kt,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new h(this,n),t.data(At,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},r(h,null,[{key:"VERSION",get:function t(){return wt}},{key:"Default",get:function t(){return kt}}]),h}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
bt(document).on(jt.CLICK_DATA_API,Mt,function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===t.currentTarget.tagName&&t.preventDefault();var i=bt(this),e=g.getSelectorFromElement(this);bt(e).each(function(){var t=bt(this),e,n=t.data(At)?"toggle":i.data();Qt._jQueryInterface.call(t,n)})}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
bt.fn[It]=Qt._jQueryInterface,bt.fn[It].Constructor=Qt,bt.fn[It].noConflict=function(){return bt.fn[It]=Nt,Qt._jQueryInterface},Qt),bt,It,wt,At,Dt,St,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Ut,Wt,Kt,Mt,Qt,Bt=(Vt="dropdown",Yt="4.0.0",zt="."+(qt="bs.dropdown"),Zt=".data-api",Jt=(Ft=e).fn[Vt],$t=27,Gt=32,Xt=9,te=38,ee=40,ne=3,ie=new RegExp("38|40|27"),se={HIDE:"hide"+zt,HIDDEN:"hidden"+zt,SHOW:"show"+zt,SHOWN:"shown"+zt,CLICK:"click"+zt,CLICK_DATA_API:"click"+zt+Zt,KEYDOWN_DATA_API:"keydown"+zt+Zt,KEYUP_DATA_API:"keyup"+zt+Zt},re="disabled",oe="show",ae="dropup",le="dropright",he="dropleft",ce="dropdown-menu-right",ue="dropdown-menu-left",fe="position-static",de='[data-toggle="dropdown"]',ge=".dropdown form",_e=".dropdown-menu",me=".navbar-nav",pe=".dropdown-menu .dropdown-item:not(.disabled)",ve="top-start",Ee="top-end",ye="bottom-start",Ce="bottom-end",Te="right-start",be="right-end",Ie="left-start",we="left-end",Ae={offset:0,flip:!0,boundary:"scrollParent"},De={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */},Se=
/* */
function(){function h(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var t=h.prototype;
// Public
return t.toggle=function t(){if(!this._element.disabled&&!Ft(this._element).hasClass(re)){var e=h._getParentFromElement(this._element),n=Ft(this._menu).hasClass(oe);if(h._clearMenus(),!n){var i={relatedTarget:this._element},s=Ft.Event(se.SHOW,i);if(Ft(e).trigger(s),!s.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){
/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===u)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;// For dropup with alignment we use the parent as popper container
Ft(e).hasClass(ae)&&(Ft(this._menu).hasClass(ue)||Ft(this._menu).hasClass(ce))&&(r=e),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&Ft(e).addClass(fe),this._popper=new u(r,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===Ft(e).closest(me).length&&Ft("body").children().on("mouseover",null,Ft.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),Ft(this._menu).toggleClass(oe),Ft(e).toggleClass(oe).trigger(Ft.Event(se.SHOWN,i))}}}},t.dispose=function t(){Ft.removeData(this._element,qt),Ft(this._element).off(zt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function t(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},// Private
t._addEventListeners=function t(){var e=this;Ft(this._element).on(se.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function t(e){return e=a({},this.constructor.Default,Ft(this._element).data(),e),g.typeCheckConfig(Vt,e,this.constructor.DefaultType),e},t._getMenuElement=function t(){if(!this._menu){var e=h._getParentFromElement(this._element);this._menu=Ft(e).find(_e)[0]}return this._menu},t._getPlacement=function t(){var e=Ft(this._element).parent(),n=ye;// Handle dropup
return e.hasClass(ae)?(n=ve,Ft(this._menu).hasClass(ce)&&(n=Ee)):e.hasClass(le)?n=Te:e.hasClass(he)?n=Ie:Ft(this._menu).hasClass(ce)&&(n=Ce),n},t._detectNavbar=function t(){return 0<Ft(this._element).closest(".navbar").length},t._getPopperConfig=function t(){var e=this,n={},i;return"function"==typeof this._config.offset?n.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets)||{}),t}:n.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},// Static
h._jQueryInterface=function t(n){return this.each(function(){var t=Ft(this).data(qt),e;if(t||(t=new h(this,"object"==typeof n?n:null),Ft(this).data(qt,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},h._clearMenus=function t(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=Ft.makeArray(Ft(de)),i=0;i<n.length;i++){var s=h._getParentFromElement(n[i]),r=Ft(n[i]).data(qt),o={relatedTarget:n[i]};if(r){var a=r._menu;if(Ft(s).hasClass(oe)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&Ft.contains(s,e.target))){var l=Ft.Event(se.HIDE,o);Ft(s).trigger(l),l.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&Ft("body").children().off("mouseover",null,Ft.noop),n[i].setAttribute("aria-expanded","false"),Ft(a).removeClass(oe),Ft(s).removeClass(oe).trigger(Ft.Event(se.HIDDEN,o)))}}}},h._getParentFromElement=function t(e){var n,i=g.getSelectorFromElement(e);return i&&(n=Ft(i)[0]),n||e.parentNode},// eslint-disable-next-line complexity
h._dataApiKeydownHandler=function t(e){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||Ft(e.target).closest(_e).length)):ie.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!Ft(this).hasClass(re))){var n=h._getParentFromElement(this),i=Ft(n).hasClass(oe);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=Ft(n).find(pe).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&0<r&&
// Up
r--,40===e.which&&r<s.length-1&&
// Down
r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=Ft(n).find(de)[0];Ft(o).trigger("focus")}Ft(this).trigger("click")}}},r(h,null,[{key:"VERSION",get:function t(){return Yt}},{key:"Default",get:function t(){return Ae}},{key:"DefaultType",get:function t(){return De}}]),h}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
Ft(document).on(se.KEYDOWN_DATA_API,de,Se._dataApiKeydownHandler).on(se.KEYDOWN_DATA_API,_e,Se._dataApiKeydownHandler).on(se.CLICK_DATA_API+" "+se.KEYUP_DATA_API,Se._clearMenus).on(se.CLICK_DATA_API,de,function(t){t.preventDefault(),t.stopPropagation(),Se._jQueryInterface.call(Ft(this),"toggle")}).on(se.CLICK_DATA_API,ge,function(t){t.stopPropagation()}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
Ft.fn[Vt]=Se._jQueryInterface,Ft.fn[Vt].Constructor=Se,Ft.fn[Vt].noConflict=function(){return Ft.fn[Vt]=Jt,Se._jQueryInterface},Se),Ft,Vt,Yt,qt,zt,Zt,Jt,$t,Gt,Xt,te,ee,ne,ie,se,re,oe,ae,le,he,ce,ue,fe,de,ge,_e,me,pe,ve,Ee,ye,Ce,Te,be,Ie,we,Ae,De,Se,Ne=(ke="modal",Pe="4.0.0",He="."+(je="bs.modal"),Le=".data-api",Re=(Oe=e).fn[ke],xe=300,Ue=150,We=27,Ke={backdrop:!0,keyboard:!0,focus:!0,show:!0},Me={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Qe={HIDE:"hide"+He,HIDDEN:"hidden"+He,SHOW:"show"+He,SHOWN:"shown"+He,FOCUSIN:"focusin"+He,RESIZE:"resize"+He,CLICK_DISMISS:"click.dismiss"+He,KEYDOWN_DISMISS:"keydown.dismiss"+He,MOUSEUP_DISMISS:"mouseup.dismiss"+He,MOUSEDOWN_DISMISS:"mousedown.dismiss"+He,CLICK_DATA_API:"click"+He+Le},Be="modal-scrollbar-measure",Fe="modal-backdrop",Ve="modal-open",Ye="fade",qe="show",ze=".modal-dialog",Ze='[data-toggle="modal"]',Je='[data-dismiss="modal"]',$e=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ge=".sticky-top",Xe=".navbar-toggler"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,tn=
/* */
function(){function s(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Oe(t).find(ze)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}// Getters
var t=s.prototype;
// Public
return t.toggle=function t(e){return this._isShown?this.hide():this.show(e)},t.show=function t(e){var n=this;if(!this._isTransitioning&&!this._isShown){g.supportsTransitionEnd()&&Oe(this._element).hasClass(Ye)&&(this._isTransitioning=!0);var i=Oe.Event(Qe.SHOW,{relatedTarget:e});Oe(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Oe(document.body).addClass(Ve),this._setEscapeEvent(),this._setResizeEvent(),Oe(this._element).on(Qe.CLICK_DISMISS,Je,function(t){return n.hide(t)}),Oe(this._dialog).on(Qe.MOUSEDOWN_DISMISS,function(){Oe(n._element).one(Qe.MOUSEUP_DISMISS,function(t){Oe(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},t.hide=function t(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=Oe.Event(Qe.HIDE);if(Oe(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=g.supportsTransitionEnd()&&Oe(this._element).hasClass(Ye);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Oe(document).off(Qe.FOCUSIN),Oe(this._element).removeClass(qe),Oe(this._element).off(Qe.CLICK_DISMISS),Oe(this._dialog).off(Qe.MOUSEDOWN_DISMISS),s?Oe(this._element).one(g.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(xe):this._hideModal()}}},t.dispose=function t(){Oe.removeData(this._element,je),Oe(window,document,this._element,this._backdrop).off(He),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function t(){this._adjustDialog()},// Private
t._getConfig=function t(e){return e=a({},Ke,e),g.typeCheckConfig(ke,e,Me),e},t._showElement=function t(e){var n=this,i=g.supportsTransitionEnd()&&Oe(this._element).hasClass(Ye);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&g.reflow(this._element),Oe(this._element).addClass(qe),this._config.focus&&this._enforceFocus();var s=Oe.Event(Qe.SHOWN,{relatedTarget:e}),r=function t(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,Oe(n._element).trigger(s)};i?Oe(this._dialog).one(g.TRANSITION_END,r).emulateTransitionEnd(xe):r()},t._enforceFocus=function t(){var e=this;Oe(document).off(Qe.FOCUSIN).on(Qe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Oe(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function t(){var e=this;this._isShown&&this._config.keyboard?Oe(this._element).on(Qe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Oe(this._element).off(Qe.KEYDOWN_DISMISS)},t._setResizeEvent=function t(){var e=this;this._isShown?Oe(window).on(Qe.RESIZE,function(t){return e.handleUpdate(t)}):Oe(window).off(Qe.RESIZE)},t._hideModal=function t(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Oe(document.body).removeClass(Ve),e._resetAdjustments(),e._resetScrollbar(),Oe(e._element).trigger(Qe.HIDDEN)})},t._removeBackdrop=function t(){this._backdrop&&(Oe(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function t(e){var n=this,i=Oe(this._element).hasClass(Ye)?Ye:"";if(this._isShown&&this._config.backdrop){var s=g.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=Fe,i&&Oe(this._backdrop).addClass(i),Oe(this._backdrop).appendTo(document.body),Oe(this._element).on(Qe.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&g.reflow(this._backdrop),Oe(this._backdrop).addClass(qe),!e)return;if(!s)return void e();Oe(this._backdrop).one(g.TRANSITION_END,e).emulateTransitionEnd(Ue)}else if(!this._isShown&&this._backdrop){Oe(this._backdrop).removeClass(qe);var r=function t(){n._removeBackdrop(),e&&e()};g.supportsTransitionEnd()&&Oe(this._element).hasClass(Ye)?Oe(this._backdrop).one(g.TRANSITION_END,r).emulateTransitionEnd(Ue):r()}else e&&e()},// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
t._adjustDialog=function t(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function t(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function t(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function t(){var s=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
// Adjust fixed content padding
Oe($e).each(function(t,e){var n=Oe(e)[0].style.paddingRight,i=Oe(e).css("padding-right");Oe(e).data("padding-right",n).css("padding-right",parseFloat(i)+s._scrollbarWidth+"px")}),// Adjust sticky content margin
Oe(Ge).each(function(t,e){var n=Oe(e)[0].style.marginRight,i=Oe(e).css("margin-right");Oe(e).data("margin-right",n).css("margin-right",parseFloat(i)-s._scrollbarWidth+"px")}),// Adjust navbar-toggler margin
Oe(Xe).each(function(t,e){var n=Oe(e)[0].style.marginRight,i=Oe(e).css("margin-right");Oe(e).data("margin-right",n).css("margin-right",parseFloat(i)+s._scrollbarWidth+"px")});// Adjust body padding
var e=document.body.style.paddingRight,n=Oe("body").css("padding-right");Oe("body").data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},t._resetScrollbar=function t(){
// Restore fixed content padding
Oe($e).each(function(t,e){var n=Oe(e).data("padding-right");void 0!==n&&Oe(e).css("padding-right",n).removeData("padding-right")}),// Restore sticky content and navbar-toggler margin
Oe(Ge+", "+Xe).each(function(t,e){var n=Oe(e).data("margin-right");void 0!==n&&Oe(e).css("margin-right",n).removeData("margin-right")});// Restore body padding
var e=Oe("body").data("padding-right");void 0!==e&&Oe("body").css("padding-right",e).removeData("padding-right")},t._getScrollbarWidth=function t(){
// thx d.walsh
var e=document.createElement("div");e.className=Be,document.body.appendChild(e);var n=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),n},// Static
s._jQueryInterface=function t(n,i){return this.each(function(){var t=Oe(this).data(je),e=a({},s.Default,Oe(this).data(),"object"==typeof n&&n);if(t||(t=new s(this,e),Oe(this).data(je,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},r(s,null,[{key:"VERSION",get:function t(){return Pe}},{key:"Default",get:function t(){return Ke}}]),s}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
Oe(document).on(Qe.CLICK_DATA_API,Ze,function(t){var e=this,n,i=g.getSelectorFromElement(this);i&&(n=Oe(i)[0]);var s=Oe(n).data(je)?"toggle":a({},Oe(n).data(),Oe(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=Oe(n).one(Qe.SHOW,function(t){t.isDefaultPrevented()||r.one(Qe.HIDDEN,function(){Oe(e).is(":visible")&&e.focus()})});tn._jQueryInterface.call(Oe(n),s,this)}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
Oe.fn[ke]=tn._jQueryInterface,Oe.fn[ke].Constructor=tn,Oe.fn[ke].noConflict=function(){return Oe.fn[ke]=Re,tn._jQueryInterface},tn),Oe,ke,Pe,je,He,Le,Re,xe,Ue,We,Ke,Me,Qe,Be,Fe,Ve,Ye,qe,ze,Ze,Je,$e,Ge,Xe,tn,en=(sn="tooltip",rn="4.0.0",an="."+(on="bs.tooltip"),ln=(nn=e).fn[sn],hn=150,cn="bs-tooltip",un=new RegExp("(^|\\s)"+cn+"\\S+","g"),gn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(dn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(fn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},mn="out",pn={HIDE:"hide"+an,HIDDEN:"hidden"+an,SHOW:(_n="show")+an,SHOWN:"shown"+an,INSERTED:"inserted"+an,CLICK:"click"+an,FOCUSIN:"focusin"+an,FOCUSOUT:"focusout"+an,MOUSEENTER:"mouseenter"+an,MOUSELEAVE:"mouseleave"+an},vn="fade",En="show",yn=".tooltip",Cn=".tooltip-inner",Tn=".arrow",bn="hover",In="focus",wn="click",An="manual"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,Dn=
/* */
function(){function c(t,e){
/**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
if(void 0===u)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}// Getters
var t=c.prototype;
// Public
return t.enable=function t(){this._isEnabled=!0},t.disable=function t(){this._isEnabled=!1},t.toggleEnabled=function t(){this._isEnabled=!this._isEnabled},t.toggle=function t(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=nn(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),nn(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(nn(this.getTipElement()).hasClass(En))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function t(){clearTimeout(this._timeout),nn.removeData(this.element,this.constructor.DATA_KEY),nn(this.element).off(this.constructor.EVENT_KEY),nn(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&nn(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function t(){var n=this;if("none"===nn(this.element).css("display"))throw new Error("Please use show on visible elements");var e=nn.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){nn(this.element).trigger(e);var i=nn.contains(this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var s=this.getTipElement(),r=g.getUID(this.constructor.NAME);s.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&nn(s).addClass(vn);var o="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,a=this._getAttachment(o);this.addAttachmentClass(a);var l=!1===this.config.container?document.body:nn(this.config.container);nn(s).data(this.constructor.DATA_KEY,this),nn.contains(this.element.ownerDocument.documentElement,this.tip)||nn(s).appendTo(l),nn(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,s,{placement:a,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Tn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function t(e){e.originalPlacement!==e.placement&&n._handlePopperPlacementChange(e)},onUpdate:function t(e){n._handlePopperPlacementChange(e)}}),nn(s).addClass(En),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&nn("body").children().on("mouseover",null,nn.noop);var h=function t(){n.config.animation&&n._fixTransition();var e=n._hoverState;n._hoverState=null,nn(n.element).trigger(n.constructor.Event.SHOWN),e===mn&&n._leave(null,n)};g.supportsTransitionEnd()&&nn(this.tip).hasClass(vn)?nn(this.tip).one(g.TRANSITION_END,h).emulateTransitionEnd(c._TRANSITION_DURATION):h()}},t.hide=function t(e){var n=this,i=this.getTipElement(),s=nn.Event(this.constructor.Event.HIDE),r=function t(){n._hoverState!==_n&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),nn(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};nn(this.element).trigger(s),s.isDefaultPrevented()||(nn(i).removeClass(En),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&nn("body").children().off("mouseover",null,nn.noop),this._activeTrigger[wn]=!1,this._activeTrigger[In]=!1,this._activeTrigger[bn]=!1,g.supportsTransitionEnd()&&nn(this.tip).hasClass(vn)?nn(i).one(g.TRANSITION_END,r).emulateTransitionEnd(hn):r(),this._hoverState="")},t.update=function t(){null!==this._popper&&this._popper.scheduleUpdate()},// Protected
t.isWithContent=function t(){return Boolean(this.getTitle())},t.addAttachmentClass=function t(e){nn(this.getTipElement()).addClass(cn+"-"+e)},t.getTipElement=function t(){return this.tip=this.tip||nn(this.config.template)[0],this.tip},t.setContent=function t(){var e=nn(this.getTipElement());this.setElementContent(e.find(Cn),this.getTitle()),e.removeClass(vn+" "+En)},t.setElementContent=function t(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?
// Content is a DOM node or a jQuery
i?nn(n).parent().is(e)||e.empty().append(n):e.text(nn(n).text()):e[i?"html":"text"](n)},t.getTitle=function t(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},// Private
t._getAttachment=function t(e){return dn[e.toUpperCase()]},t._setListeners=function t(){var i=this,e;this.config.trigger.split(" ").forEach(function(t){if("click"===t)nn(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==An){var e=t===bn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===bn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;nn(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}nn(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function t(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function t(e,n){var i=this.constructor.DATA_KEY;(n=n||nn(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),nn(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?In:bn]=!0),nn(n.getTipElement()).hasClass(En)||n._hoverState===_n?n._hoverState=_n:(clearTimeout(n._timeout),n._hoverState=_n,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===_n&&n.show()},n.config.delay.show):n.show())},t._leave=function t(e,n){var i=this.constructor.DATA_KEY;(n=n||nn(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),nn(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?In:bn]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=mn,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===mn&&n.hide()},n.config.delay.hide):n.hide())},t._isWithActiveTrigger=function t(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},t._getConfig=function t(e){return"number"==typeof(e=a({},this.constructor.Default,nn(this.element).data(),e)).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),g.typeCheckConfig(sn,e,this.constructor.DefaultType),e},t._getDelegateConfig=function t(){var e={};if(this.config)for(var n in this.config)this.constructor.Default[n]!==this.config[n]&&(e[n]=this.config[n]);return e},t._cleanTipClass=function t(){var e=nn(this.getTipElement()),n=e.attr("class").match(un);null!==n&&0<n.length&&e.removeClass(n.join(""))},t._handlePopperPlacementChange=function t(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},t._fixTransition=function t(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(nn(e).removeClass(vn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},// Static
c._jQueryInterface=function t(n){return this.each(function(){var t=nn(this).data(on),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new c(this,e),nn(this).data(on,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},r(c,null,[{key:"VERSION",get:function t(){return rn}},{key:"Default",get:function t(){return gn}},{key:"NAME",get:function t(){return sn}},{key:"DATA_KEY",get:function t(){return on}},{key:"Event",get:function t(){return pn}},{key:"EVENT_KEY",get:function t(){return an}},{key:"DefaultType",get:function t(){return fn}}]),c}(),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
nn.fn[sn]=Dn._jQueryInterface,nn.fn[sn].Constructor=Dn,nn.fn[sn].noConflict=function(){return nn.fn[sn]=ln,Dn._jQueryInterface},Dn),nn,sn,rn,on,an,ln,hn,cn,un,fn,dn,gn,_n,mn,pn,vn,En,yn,Cn,Tn,bn,In,wn,An,Dn,Sn=(On="popover",kn="4.0.0",jn="."+(Pn="bs.popover"),Hn=(Nn=e).fn[On],Ln="bs-popover",Rn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=a({},en.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Un=a({},en.DefaultType,{content:"(string|element|function)"}),Wn="fade",Mn=".popover-header",Qn=".popover-body",Bn={HIDE:"hide"+jn,HIDDEN:"hidden"+jn,SHOW:(Kn="show")+jn,SHOWN:"shown"+jn,INSERTED:"inserted"+jn,CLICK:"click"+jn,FOCUSIN:"focusin"+jn,FOCUSOUT:"focusout"+jn,MOUSEENTER:"mouseenter"+jn,MOUSELEAVE:"mouseleave"+jn
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */},Fn=
/* */
function(t){function i(){return t.apply(this,arguments)||this}n(i,t);var e=i.prototype;
// Overrides
return e.isWithContent=function t(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function t(e){Nn(this.getTipElement()).addClass(Ln+"-"+e)},e.getTipElement=function t(){return this.tip=this.tip||Nn(this.config.template)[0],this.tip},e.setContent=function t(){var e=Nn(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(e.find(Mn),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(Qn),n),e.removeClass(Wn+" "+Kn)},// Private
e._getContent=function t(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function t(){var e=Nn(this.getTipElement()),n=e.attr("class").match(Rn);null!==n&&0<n.length&&e.removeClass(n.join(""))},// Static
i._jQueryInterface=function t(n){return this.each(function(){var t=Nn(this).data(Pn),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Nn(this).data(Pn,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},r(i,null,[{key:"VERSION",
// Getters
get:function t(){return kn}},{key:"Default",get:function t(){return xn}},{key:"NAME",get:function t(){return On}},{key:"DATA_KEY",get:function t(){return Pn}},{key:"Event",get:function t(){return Bn}},{key:"EVENT_KEY",get:function t(){return jn}},{key:"DefaultType",get:function t(){return Un}}]),i}(en),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
Nn.fn[On]=Fn._jQueryInterface,Nn.fn[On].Constructor=Fn,Nn.fn[On].noConflict=function(){return Nn.fn[On]=Hn,Fn._jQueryInterface},Fn),Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Un,Wn,Kn,Mn,Qn,Bn,Fn,Vn=(qn="scrollspy",zn="4.0.0",Jn="."+(Zn="bs.scrollspy"),$n=".data-api",Gn=(Yn=e).fn[qn],Xn={offset:10,method:"auto",target:""},ti={offset:"number",method:"string",target:"(string|element)"},ei={ACTIVATE:"activate"+Jn,SCROLL:"scroll"+Jn,LOAD_DATA_API:"load"+Jn+$n},ni="dropdown-item",ii="dropdown-menu",si="active",ri='[data-spy="scroll"]',oi=".active",ai=".nav, .list-group",li=".nav-link",hi=".nav-item",ci=".list-group-item",ui=".dropdown",fi=".dropdown-item",di=".dropdown-toggle",gi="offset",_i="position"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,mi=
/* */
function(){function i(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+li+","+this._config.target+" "+ci+","+this._config.target+" "+fi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Yn(this._scrollElement).on(ei.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}// Getters
var t=i.prototype;
// Public
return t.refresh=function t(){var e=this,n=this._scrollElement===this._scrollElement.window?gi:_i,s="auto"===this._config.method?n:this._config.method,r=s===_i?this._getScrollTop():0,i;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Yn.makeArray(Yn(this._selector)).map(function(t){var e,n=g.getSelectorFromElement(t);if(n&&(e=Yn(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[Yn(e)[s]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function t(){Yn.removeData(this._element,Zn),Yn(this._scrollElement).off(Jn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},// Private
t._getConfig=function t(e){if("string"!=typeof(e=a({},Xn,e)).target){var n=Yn(e.target).attr("id");n||(n=g.getUID(qn),Yn(e.target).attr("id",n)),e.target="#"+n}return g.typeCheckConfig(qn,e,ti),e},t._getScrollTop=function t(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function t(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function t(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function t(){var e=this._getScrollTop()+this._config.offset,n=this._getScrollHeight(),i=this._config.offset+n-this._getOffsetHeight();if(this._scrollHeight!==n&&this.refresh(),i<=e){var s=this._targets[this._targets.length-1];this._activeTarget!==s&&this._activate(s)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){var o;this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function t(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");// eslint-disable-next-line arrow-body-style
n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=Yn(n.join(","));i.hasClass(ni)?(i.closest(ui).find(di).addClass(si),i.addClass(si)):(
// Set triggered link as active
i.addClass(si),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
i.parents(ai).prev(li+", "+ci).addClass(si),// Handle special case when .nav-link is inside .nav-item
i.parents(ai).prev(hi).children(li).addClass(si)),Yn(this._scrollElement).trigger(ei.ACTIVATE,{relatedTarget:e})},t._clear=function t(){Yn(this._selector).filter(oi).removeClass(si)},// Static
i._jQueryInterface=function t(n){return this.each(function(){var t=Yn(this).data(Zn),e;if(t||(t=new i(this,"object"==typeof n&&n),Yn(this).data(Zn,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},r(i,null,[{key:"VERSION",get:function t(){return zn}},{key:"Default",get:function t(){return Xn}}]),i}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
Yn(window).on(ei.LOAD_DATA_API,function(){for(var t=Yn.makeArray(Yn(ri)),e=t.length;e--;){var n=Yn(t[e]);mi._jQueryInterface.call(n,n.data())}}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
Yn.fn[qn]=mi._jQueryInterface,Yn.fn[qn].Constructor=mi,Yn.fn[qn].noConflict=function(){return Yn.fn[qn]=Gn,mi._jQueryInterface},mi),Yn,qn,zn,Zn,Jn,$n,Gn,Xn,ti,ei,ni,ii,si,ri,oi,ai,li,hi,ci,ui,fi,di,gi,_i,mi,pi=(Ei="tab",yi="4.0.0",Ti="."+(Ci="bs.tab"),bi=".data-api",Ii=(vi=e).fn.tab,wi=150,Ai={HIDE:"hide"+Ti,HIDDEN:"hidden"+Ti,SHOW:"show"+Ti,SHOWN:"shown"+Ti,CLICK_DATA_API:"click"+Ti+bi},Di="dropdown-menu",Si="active",Ni="disabled",Oi="fade",ki="show",Pi=".dropdown",ji=".nav, .list-group",Hi=".active",Li="> li > .active",Ri='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',xi=".dropdown-toggle",Ui="> .dropdown-menu .active"
/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */,Wi=
/* */
function(){function i(t){this._element=t}// Getters
var t=i.prototype;
// Public
return t.show=function t(){var i=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&vi(this._element).hasClass(Si)||vi(this._element).hasClass(Ni))){var e,s,n=vi(this._element).closest(ji)[0],r=g.getSelectorFromElement(this._element);if(n){var o="UL"===n.nodeName?Li:Hi;s=(s=vi.makeArray(vi(n).find(o)))[s.length-1]}var a=vi.Event(Ai.HIDE,{relatedTarget:this._element}),l=vi.Event(Ai.SHOW,{relatedTarget:s});if(s&&vi(s).trigger(a),vi(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){r&&(e=vi(r)[0]),this._activate(this._element,n);var h=function t(){var e=vi.Event(Ai.HIDDEN,{relatedTarget:i._element}),n=vi.Event(Ai.SHOWN,{relatedTarget:s});vi(s).trigger(e),vi(i._element).trigger(n)};e?this._activate(e,e.parentNode,h):h()}}},t.dispose=function t(){vi.removeData(this._element,Ci),this._element=null},// Private
t._activate=function t(e,n,i){var s=this,r,o=(r="UL"===n.nodeName?vi(n).find(Li):vi(n).children(Hi))[0],a=i&&g.supportsTransitionEnd()&&o&&vi(o).hasClass(Oi),l=function t(){return s._transitionComplete(e,o,i)};o&&a?vi(o).one(g.TRANSITION_END,l).emulateTransitionEnd(wi):l()},t._transitionComplete=function t(e,n,i){if(n){vi(n).removeClass(ki+" "+Si);var s=vi(n.parentNode).find(Ui)[0];s&&vi(s).removeClass(Si),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(vi(e).addClass(Si),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),g.reflow(e),vi(e).addClass(ki),e.parentNode&&vi(e.parentNode).hasClass(Di)){var r=vi(e).closest(Pi)[0];r&&vi(r).find(xi).addClass(Si),e.setAttribute("aria-expanded",!0)}i&&i()},// Static
i._jQueryInterface=function t(n){return this.each(function(){var t=vi(this),e=t.data(Ci);if(e||(e=new i(this),t.data(Ci,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},r(i,null,[{key:"VERSION",get:function t(){return yi}}]),i}(),
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
vi(document).on(Ai.CLICK_DATA_API,Ri,function(t){t.preventDefault(),Wi._jQueryInterface.call(vi(this),"show")}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
vi.fn.tab=Wi._jQueryInterface,vi.fn.tab.Constructor=Wi,vi.fn.tab.noConflict=function(){return vi.fn.tab=Ii,Wi._jQueryInterface},Wi),vi,Ei,yi,Ci,Ti,bi,Ii,wi,Ai,Di,Si,Ni,Oi,ki,Pi,ji,Hi,Li,Ri,xi,Ui,Wi;
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split("."),n=1,i=2,s=9,r=1,o=4;if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=g,t.Alert=s,t.Button=b,t.Carousel=M,t.Collapse=Tt,t.Dropdown=Bt,t.Modal=Ne,t.Popover=Sn,t.Scrollspy=Vn,t.Tab=pi,t.Tooltip=en,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.js.map