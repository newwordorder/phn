/*! 
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(m,u){function c(e,n){h(e).push(n)}function r(l,e,n){var t=l.children(e.headerTag),d=l.children(e.bodyTag);t.length>d.length?$(X,"contents"):t.length<d.length&&$(X,"titles");var r=e.startIndex;if(n.stepCount=t.length,e.saveState&&m.cookie){var a=m.cookie(R+b(l)),i=parseInt(a,0);!isNaN(i)&&i<n.stepCount&&(r=i)}n.currentIndex=r,t.each(function(e){var n=m(this),t=d.eq(e),r=t.data("mode"),a=null==r?Y.html:g(Y,/^\s*$/.test(r)||isNaN(r)?r:parseInt(r,0)),i=a===Y.html||t.data("url")===u?"":t.data("url"),s=a!==Y.html&&"1"===t.data("loaded"),o=m.extend({},ne,{title:n.html(),content:a===Y.html?t.html():"",contentUrl:i,contentMode:a,contentLoaded:s});c(l,o)})}function s(e){e.triggerHandler("canceled")}function a(e,n){return e.currentIndex-n}function e(e,n){var t=f(e);e.unbind(t).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(t),e.removeClass(n.clearFixCssClass+" vertical");var r=e.find(".content > *");r.removeData("loaded").removeData("mode").removeData("url"),r.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),e.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var a=m('<{0} class="{1}"></{0}>'.format(e.get(0).tagName,e.attr("class"))),i=e._id();return null!=i&&""!==i&&a._id(i),a.html(e.find(".content").html()),e.after(a),e.remove(),a}function o(e,n){var t=e.find(".steps li").eq(n.currentIndex);e.triggerHandler("finishing",[n.currentIndex])?(t.addClass("done").removeClass("error"),e.triggerHandler("finished",[n.currentIndex])):t.addClass("error")}function f(e){var n=e.data("eventNamespace");return null==n&&(n="."+b(e),e.data("eventNamespace",n)),n}function l(e,n){var t=b(e);return e.find("#"+t+V+n)}function d(e,n){var t=b(e);return e.find("#"+t+W+n)}function i(e,n){var t=b(e);return e.find("#"+t+G+n)}function p(e){return e.data("options")}function C(e){return e.data("state")}function h(e){return e.data("steps")}function v(e,n){var t=h(e);return(n<0||n>=t.length)&&$(J),t[n]}function b(e){var n=e.data("uid");return null==n&&(null==(n=e._id())&&(n="steps-uid-".concat(K),e._id(n)),K++,e.data("uid",n)),n}function g(e,n){if(Q("enumType",e),Q("keyOrValue",n),"string"==typeof n){var t=e[n];return t===u&&$("The enum key '{0}' does not exist.",n),t}if("number"==typeof n){for(var r in e)if(e[r]===n)return n;$("Invalid enum value '{0}'.",n)}else $("Invalid key or value type.")}function x(e,n,t){return T(e,n,t,_(t,1))}function y(e,n,t){return T(e,n,t,a(t,1))}function I(e,n,t,r){if((r<0||r>=t.stepCount)&&$(J),!(n.forceMoveForward&&r<t.currentIndex)){var a=t.currentIndex;return e.triggerHandler("stepChanging",[t.currentIndex,r])?(t.currentIndex=r,j(e,n,t),q(e,n,t,a),S(e,n,t),F(e,n,t),U(e,n,t,r,a,function(){e.triggerHandler("stepChanged",[r,a])})):e.find(".steps li").eq(a).addClass("error"),!0}}function _(e,n){return e.currentIndex+n}function n(e){var t=m.extend(!0,{},te,e);return this.each(function(){var e=m(this),n={currentIndex:t.startIndex,currentStep:null,stepCount:0,transitionElement:null};e.data("options",t),e.data("state",n),e.data("steps",[]),r(e,t,n),L(e,t,n),E(e,t),t.autoFocus&&0===K&&l(e,t.startIndex).focus(),e.triggerHandler("init",[t.startIndex])})}function t(e,n,t,r,a){(r<0||r>t.stepCount)&&$(J),A(e,r,a=m.extend({},ne,a)),t.currentIndex!==t.stepCount&&t.currentIndex>=r&&(t.currentIndex++,j(e,n,t)),t.stepCount++;var i=e.find(".content"),s=m("<{0}>{1}</{0}>".format(n.headerTag,a.title)),o=m("<{0}></{0}>".format(n.bodyTag));return(null==a.contentMode||a.contentMode===Y.html)&&o.html(a.content),0===r?i.prepend(o).prepend(s):d(e,r-1).after(o).after(s),O(e,t,o,r),P(e,n,t,s,r),D(e,n,t,r),r===t.currentIndex&&q(e,n,t),S(e,n,t),e}function A(e,n,t){h(e).splice(n,0,t)}function w(e){var n=m(this),t=p(n),r=C(n);if(t.suppressPaginationOnFocus&&n.find(":focus").is(":input"))return e.preventDefault(),!1;var a=37,i=39;e.keyCode===a?(e.preventDefault(),y(n,t,r)):e.keyCode===i&&(e.preventDefault(),x(n,t,r))}function F(n,e,t){if(0<t.stepCount){var r=t.currentIndex,a=v(n,r);if(!e.enableContentCache||!a.contentLoaded)switch(g(Y,a.contentMode)){case Y.iframe:n.find(".content > .body").eq(t.currentIndex).empty().html('<iframe src="'+a.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case Y.async:var i=d(n,r)._aria("busy","true").empty().append(H(e.loadingTemplate,{text:e.labels.loading}));m.ajax({url:a.contentUrl,cache:!1}).done(function(e){i.empty().html(e)._aria("busy","false").data("loaded","1"),n.triggerHandler("contentLoaded",[r])})}}}function T(e,n,t,r){var a=t.currentIndex;if(!(0<=r&&r<t.stepCount)||n.forceMoveForward&&r<t.currentIndex)return!1;var i=l(e,r),s=i.parent(),o=s.hasClass("disabled");return s._enableAria(),i.click(),a!==t.currentIndex||!o||(s._enableAria(!1),!1)}function k(e){e.preventDefault();var n=m(this),t=n.parent().parent().parent().parent(),r=p(t),a=C(t),i=n.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":s(t);break;case"finish":o(t,a);break;case"next":x(t,r,a);break;case"previous":y(t,r,a)}}function S(e,n,t){if(n.enablePagination){var r=e.find(".actions a[href$='#finish']").parent(),a=e.find(".actions a[href$='#next']").parent(),i;if(!n.forceMoveForward)e.find(".actions a[href$='#previous']").parent()._enableAria(0<t.currentIndex);n.enableFinishButton&&n.showFinishButtonAlways?(r._enableAria(0<t.stepCount),a._enableAria(1<t.stepCount&&t.stepCount>t.currentIndex+1)):(r._showAria(n.enableFinishButton&&t.stepCount===t.currentIndex+1),a._showAria(0===t.stepCount||t.stepCount>t.currentIndex+1)._enableAria(t.stepCount>t.currentIndex+1||!n.enableFinishButton))}}function q(e,n,t,r){var a=l(e,t.currentIndex),i=m('<span class="current-info audible">'+n.labels.current+" </span>"),s=e.find(".content > .title");if(null!=r){var o=l(e,r);o.parent().addClass("done").removeClass("error")._selectAria(!1),s.eq(r).removeClass("current").next(".body").removeClass("current"),i=o.find(".current-info"),a.focus()}a.prepend(i).parent()._selectAria().removeClass("done")._enableAria(),s.eq(t.currentIndex).addClass("current").next(".body").addClass("current")}function D(e,n,t,r){for(var a=b(e),i=r;i<t.stepCount;i++){var s=a+V+i,o=a+W+i,l=a+G+i,d=e.find(".title").eq(i)._id(l);e.find(".steps a").eq(i)._id(s)._aria("controls",o).attr("href","#"+l).html(H(n.titleTemplate,{index:i+1,title:d.html()})),e.find(".body").eq(i)._id(o)._aria("labelledby",l)}}function E(e,n){var t=f(e);e.bind("canceled"+t,n.onCanceled),e.bind("contentLoaded"+t,n.onContentLoaded),e.bind("finishing"+t,n.onFinishing),e.bind("finished"+t,n.onFinished),e.bind("init"+t,n.onInit),e.bind("stepChanging"+t,n.onStepChanging),e.bind("stepChanged"+t,n.onStepChanged),n.enableKeyNavigation&&e.bind("keyup"+t,w),e.find(".actions a").bind("click"+t,k)}function M(e,n,t,r){return!(r<0||r>=t.stepCount||t.currentIndex===r)&&(N(e,r),t.currentIndex>r&&(t.currentIndex--,j(e,n,t)),t.stepCount--,i(e,r).remove(),d(e,r).remove(),l(e,r).parent().remove(),0===r&&e.find(".steps li").first().addClass("first"),r===t.stepCount&&e.find(".steps li").eq(r).addClass("last"),D(e,n,t,r),S(e,n,t),!0)}function N(e,n){h(e).splice(n,1)}function L(n,t,r){var e='<{0} class="{1}">{2}</{0}>',a,i=g(Z,t.stepsOrientation)===Z.vertical?" vertical":"",s=m(e.format(t.contentContainerTag,"content "+t.clearFixCssClass,n.html())),o=m(e.format(t.stepsContainerTag,"steps "+t.clearFixCssClass,'<ul role="tablist"></ul>')),l=s.children(t.headerTag),d=s.children(t.bodyTag);n.attr("role","application").empty().append(o).append(s).addClass(t.cssClass+" "+t.clearFixCssClass+i),d.each(function(e){O(n,r,m(this),e)}),l.each(function(e){P(n,t,r,m(this),e)}),q(n,t,r),B(n,t,r)}function O(e,n,t,r){var a=b(e),i=a+W+r,s=a+G+r;t._id(i).attr("role","tabpanel")._aria("labelledby",s).addClass("body")._showAria(n.currentIndex===r)}function B(e,n,t){if(n.enablePagination){var r='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',a='<li><a href="#{0}" role="menuitem">{1}</a></li>',i="";n.forceMoveForward||(i+=a.format("previous",n.labels.previous)),i+=a.format("next",n.labels.next),n.enableFinishButton&&(i+=a.format("finish",n.labels.finish)),n.enableCancelButton&&(i+=a.format("cancel",n.labels.cancel)),e.append(r.format(n.actionContainerTag,n.clearFixCssClass,n.labels.pagination,i)),S(e,n,t),F(e,n,t)}}function H(e,n){for(var t=e.match(/#([a-z]*)#/gi),r=0;r<t.length;r++){var a=t[r],i=a.substring(1,a.length-1);n[i]===u&&$("The key '{0}' does not exist in the substitute collection!",i),e=e.replace(a,n[i])}return e}function P(e,n,t,r,a){var i=b(e),s=i+V+a,o=i+W+a,l=i+G+a,d=e.find(".steps > ul"),u=H(n.titleTemplate,{index:a+1,title:r.html()}),c=m('<li role="tab"><a id="'+s+'" href="#'+l+'" aria-controls="'+o+'">'+u+"</a></li>");c._enableAria(n.enableAllSteps||t.currentIndex>a),t.currentIndex>a&&c.addClass("done"),r._id(l).attr("tabindex","-1").addClass("title"),0===a?d.prepend(c):d.find("li").eq(a-1).after(c),0===a&&d.find("li").removeClass("first").eq(a).addClass("first"),a===t.stepCount-1&&d.find("li").removeClass("last").eq(a).addClass("last"),c.children("a").bind("click"+f(e),z)}function j(e,n,t){n.saveState&&m.cookie&&m.cookie(R+b(e),t.currentIndex)}function U(e,n,t,r,a,i){var s=e.find(".content > .body"),o=g(ee,n.transitionEffect),l=n.transitionEffectSpeed,d=s.eq(r),u=s.eq(a);switch(o){case ee.fade:case ee.slide:var c=o===ee.fade?"fadeOut":"slideUp",f=o===ee.fade?"fadeIn":"slideDown";t.transitionElement=d,u[c](l,function(){var e,n=C(m(this)._showAria(!1).parent().parent());n.transitionElement&&(n.transitionElement[f](l,function(){m(this)._showAria()}).promise().done(i),n.transitionElement=null)});break;case ee.slideLeft:var p=u.outerWidth(!0),h=a<r?-p:p,v=a<r?p:-p;m.when(u.animate({left:h},l,function(){m(this)._showAria(!1)}),d.css("left",v+"px")._showAria().animate({left:0},l)).done(i);break;default:m.when(u._showAria(!1),d._showAria()).done(i)}}function z(e){e.preventDefault();var n=m(this),t=n.parent().parent().parent().parent(),r=p(t),a=C(t),i=a.currentIndex;if(n.parent().is(":not(.disabled):not(.current)")){var s=n.attr("href"),o;I(t,r,a,parseInt(s.substring(s.lastIndexOf("-")+1),0))}return i===a.currentIndex?(l(t,i).focus(),!1):void 0}function $(e){throw 1<arguments.length&&(e=e.format(Array.prototype.slice.call(arguments,1))),new Error(e)}function Q(e,n){null==n&&$("The argument '{0}' is null or undefined.",e)}m.fn.extend({_aria:function(e,n){return this.attr("aria-"+e,n)},_removeAria:function(e){return this.removeAttr("aria-"+e)},_enableAria:function(e){return null==e||e?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(e){return null==e||e?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(e){return null==e||e?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(e){return e?this.attr("id",e):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(e){for(var n=1===arguments.length&&m.isArray(e)?e:arguments,t=this,r=0;r<n.length;r++){var a=new RegExp("\\{"+r+"\\}","gm");t=t.replace(a,n[r])}return t});var K=0,R="jQu3ry_5teps_St@te_",V="-t-",W="-p-",G="-h-",J="Index out of range.",X="One or more corresponding step {0} are missing.";m.fn.steps=function(e){return m.fn.steps[e]?m.fn.steps[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void m.error("Method "+e+" does not exist on jQuery.steps"):n.apply(this,arguments)},m.fn.steps.add=function(e){var n=C(this);return t(this,p(this),n,n.stepCount,e)},m.fn.steps.destroy=function(){return e(this,p(this))},m.fn.steps.finish=function(){o(this,C(this))},m.fn.steps.getCurrentIndex=function(){return C(this).currentIndex},m.fn.steps.getCurrentStep=function(){return v(this,C(this).currentIndex)},m.fn.steps.getStep=function(e){return v(this,e)},m.fn.steps.insert=function(e,n){return t(this,p(this),C(this),e,n)},m.fn.steps.next=function(){return x(this,p(this),C(this))},m.fn.steps.previous=function(){return y(this,p(this),C(this))},m.fn.steps.remove=function(e){return M(this,p(this),C(this),e)},m.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},m.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var Y=m.fn.steps.contentMode={html:0,iframe:1,async:2},Z=m.fn.steps.stepsOrientation={horizontal:0,vertical:1},ee=m.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},ne=m.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:Y.html,contentLoaded:!1},te=m.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:Z.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ee.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},onContentLoaded:function(){},onInit:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);