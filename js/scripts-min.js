window.mr=window.mr||{},mr=function(t,a,e,o){"use strict";function i(e){e=void 0===e?a:e,r.documentReady.concat(r.documentReadyDeferred).forEach(function(t){t(e)}),t.status.documentReadyRan=!0,t.status.windowLoadPending&&n(t.setContext())}function n(e){t.status.documentReadyRan?(t.status.windowLoadPending=!1,e="object"==typeof e?a:e,r.windowLoad.concat(r.windowLoadDeferred).forEach(function(t){t(e)})):t.status.windowLoadPending=!0}var r={documentReady:[],documentReadyDeferred:[],windowLoad:[],windowLoadDeferred:[]};return(t=t||{}).status={documentReadyRan:!1,windowLoadPending:!1},a(o).ready(i),a(e).on("load",n),t.setContext=function(e){var t;return void 0!==e?function(t){return a(e).find(t)}:a},t.components=r,t.documentReady=i,t.windowLoad=n,t}(window.mr,jQuery,window,document),
//////////////// Utility Functions
mr=function(t,r,o,e){"use strict";return t.util={},t.util.requestAnimationFrame=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||o.msRequestAnimationFrame,t.util.documentReady=function(t){var e,a=(new Date).getFullYear();t(".update-year").text(a)},t.util.windowLoad=function(e){e("[data-delay-src]").each(function(){var t=e(this);t.attr("src",t.attr("data-delay-src")),t.removeAttr("data-delay-src")})},t.util.getURLParameter=function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[void 0,""])[1].replace(/\+/g,"%20"))||null},t.util.capitaliseFirstLetter=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},t.util.slugify=function(t,e){return void 0!==e?t.replace(/ +/g,""):t.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g,"").replace(/ +/g,"-")},t.util.sortChildrenByText=function(t,e){var a=r(t),o=a.children().get(),i=-1,n=1;void 0!==e&&(n=-(i=1)),o.sort(function(t,e){var a=r(t).text(),o=r(e).text();return a<o?i:o<a?n:0}),
// Append back into place
a.empty(),r(o).each(function(t,e){a.append(e)})},
// Set data-src attribute of element from src to be restored later
t.util.idleSrc=function(t,e){var a;e=void 0!==e?e:"",(t.is(e+"[src]")?t:t.find(e+"[src]")).each(function(t,e){var a=(e=r(e)).attr("src"),o;
// If there is no data-src, save current source to it
void 0===e.attr("data-src")&&e.attr("data-src",a),
// Clear the src attribute
e.attr("src","")})},
// Set src attribute of element from its data-src where it was temporarily stored earlier
t.util.activateIdleSrc=function(t,e){var a;e=void 0!==e?e:"",(t.is(e+"[data-src]")?t:t.find(e+"[data-src]")).each(function(t,e){var a=(e=r(e)).attr("data-src");
// Write the 'src' attribute using the 'data-src' value
e.attr("src",a)})},t.util.pauseVideo=function(t){var e;(t.is("video")?t:t.find("video")).each(function(t,e){var a;r(e).get(0).pause()})},
// Take a text value in either px (eg. 150px) or vh (eg. 65vh) and return a number in pixels.
t.util.parsePixels=function(t){var e=r(o).height(),a;
// Text text against regular expression for px value.
return/^[1-9]{1}[0-9]*[p][x]$/.test(t)?parseInt(t.replace("px",""),10):/^[1-9]{1}[0-9]*[v][h]$/.test(t)?e*((a=parseInt(t.replace("vh",""),10))/100):-1},t.util.removeHash=function(){
// Removes hash from URL bar without reloading and without losing search query
history.pushState("",e.title,o.location.pathname+o.location.search)},t.components.documentReady.push(t.util.documentReady),t.components.windowLoad.push(t.util.windowLoad),t}(mr,jQuery,window,document),
//////////////// Window Functions
mr=function(t,e,a,o){"use strict";return t.window={},t.window.height=e(a).height(),t.window.width=e(a).width(),e(a).on("resize",function(){t.window.height=e(a).height(),t.window.width=e(a).width()}),t}(mr,jQuery,window,document),
//////////////// Scroll Functions
mr=function(i,t,n,e){"use strict";i.scroll={};var a=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame;i.scroll.listeners=[],i.scroll.busy=!1,i.scroll.y=0,i.scroll.x=0;var o=function(t){
//////////////// Capture Scroll Event and fire scroll function
jQuery(n).off("scroll.mr"),jQuery(n).on("scroll.mr",function(t){!1===i.scroll.busy&&(i.scroll.busy=!0,a(function(t){i.scroll.update(t)})),t.stopPropagation&&t.stopPropagation()})};return i.scroll.update=function(t){
// Loop through all mr scroll listeners
var e=void 0!==n.mr_parallax;if(i.scroll.y=e?mr_parallax.mr_getScrollPosition():n.pageYOffset,i.scroll.busy=!1,e&&mr_parallax.mr_parallaxBackground(),0<i.scroll.listeners.length)for(var a=0,o=i.scroll.listeners.length;a<o;a++)i.scroll.listeners[a](t)},i.scroll.documentReady=o,i.components.documentReady.push(o),i}(mr,jQuery,window,document),
//////////////// Scroll Class Modifier
mr=function(r,e,t,a){"use strict";r.scroll.classModifiers={},
// Globally accessible list of elements/rules
r.scroll.classModifiers.rules=[],r.scroll.classModifiers.parseScrollRules=function(n){var t,e;return n.attr("data-scroll-class").split(";").forEach(function(t){var e,a,o={};if(2===(e=t.replace(/\s/g,"").split(":")).length){if(!(-1<(a=r.util.parsePixels(e[0]))))
// Error: scrollpoint component was malformed
//console.log('Error - Scrollpoint not found.');
return!1;if(o.scrollPoint=a,!e[1].length)
// Error: toggleClass component does not exist.
//console.log('Error - toggle class not found.');
return!1;var i=e[1];o.toggleClass=i,
// Set variable in object to indicate that element already has class applied
o.hasClass=n.hasClass(i),o.element=n.get(0),r.scroll.classModifiers.rules.push(o)}}),!!r.scroll.classModifiers.rules.length},r.scroll.classModifiers.update=function(t){
// Given the current scrollPoint, check for necessary changes
for(var e=r.scroll.y,a=r.scroll.classModifiers.rules,o=a.length,i;o--;)e>(i=a[o]).scrollPoint&&!i.hasClass&&(
// Set local copy and glogal copy at the same time;
i.element.classList.add(i.toggleClass),i.hasClass=r.scroll.classModifiers.rules[o].hasClass=!0),e<i.scrollPoint&&i.hasClass&&(
// Set local copy and glogal copy at the same time;
i.element.classList.remove(i.toggleClass),i.hasClass=r.scroll.classModifiers.rules[o].hasClass=!1)};var o=function(){e('.main-container [data-scroll-class*="pos-fixed"]').each(function(){var t=e(this);t.css("max-width",t.parent().outerWidth()),t.parent().css("min-height",t.outerHeight())})},i=function(e){
// Collect info on all elements that require class modification at load time
// Each element has data-scroll-class with a formatted value to represent class to add/remove at a particular scroll point.
e("[data-scroll-class]").each(function(){var t=e(this);
// Test the rules to be added to an array of rules.
r.scroll.classModifiers.parseScrollRules(t)||console.log("Error parsing scroll rules on: "+t)}),
// For 'position fixed' elements, give them a max-width for correct fixing behaviour
o(),e(t).on("resize",o),
// If there are valid scroll rules add classModifiers update function to the scroll event processing queue.
r.scroll.classModifiers.rules.length&&r.scroll.listeners.push(r.scroll.classModifiers.update)};return r.components.documentReady.push(i),r.scroll.classModifiers.documentReady=i,r}(mr,jQuery,window,document),
//////////////// Accordions
mr=function(o,d,t,c){"use strict";return o.accordions=o.accordions||{},o.accordions.documentReady=function(a){a(".accordion__title").on("click",function(){o.accordions.activatePanel(a(this))}),a(".accordion").each(function(){var t=a(this),e=t.outerHeight(!0);t.css("min-height",e)}),""!==t.location.hash&&"#"!==t.location.hash&&a(".accordion li"+a(this).attr("href")).length&&o.accordions.activatePanelById(t.location.hash,!0),jQuery(c).on("click",'a[href^="#"]:not(a[href="#"])',function(){a(".accordion > li > .accordion__title"+a(this).attr("href")).length&&o.accordions.activatePanelById(a(this).attr("href"),!0)})},o.accordions.activatePanel=function(t,e){var a=d(t),o=a.closest(".accordion"),i=a.closest("li"),n=c.createEvent("Event"),r=c.createEvent("Event");if(n.initEvent("panelOpened.accordions.mr",!0,!0),r.initEvent("panelClosed.accordions.mr",!0,!0),i.hasClass("active"))!0!==e&&(i.removeClass("active"),a.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(r));else if(o.hasClass("accordion--oneopen")){var s=o.find("li.active");s.length&&(s.removeClass("active"),s.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(r)),i.addClass("active"),i.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(n)}else i.is(".active")||i.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(n),i.addClass("active")},o.accordions.activatePanelById=function(t,e){var a;""!==t&&"#"!==t&&(a=d(".accordion > li > .accordion__title#"+t.replace("#",""))).length&&(d("html, body").stop(!0).animate({scrollTop:a.offset().top-50},1200),o.accordions.activatePanel(a,e))},o.components.documentReady.push(o.accordions.documentReady),o}(mr,jQuery,window,document),
//////////////// Alerts
mr=function(t,e,a,o){"use strict";return t.alerts=t.alerts||{},t.alerts.documentReady=function(t){t(".alert__close").on("click touchstart",function(){jQuery(this).closest(".alert").addClass("alert--dismissed")})},t.components.documentReady.push(t.alerts.documentReady),t}(mr,jQuery,window,document),
//////////////// Backgrounds
mr=function(t,e,a,o){"use strict";return t.backgrounds=t.backgrounds||{},t.backgrounds.documentReady=function(e){
//////////////// Append .background-image-holder <img>'s as CSS backgrounds
e(".background-image-holder").each(function(){var t=e(this).children("img").attr("src");e(this).css("background",'url("'+t+'")').css("background-position","initial").css("opacity","1")})},t.components.documentReady.push(t.backgrounds.documentReady),t}(mr,jQuery,window,document),
//////////////// Bars
mr=function(t,e,a,o){"use strict";return t.bars=t.bars||{},t.bars.documentReady=function(a){a('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function(){var t=a(this),e=t.outerHeight(!0);t.closest(".nav-container").css("min-height",e)})},t.components.documentReady.push(t.bars.documentReady),t}(mr,jQuery,window,document),
//////////////// Cookies
mr=function(t,e,a,s){"use strict";return t.cookies={getItem:function(t){return t&&decodeURIComponent(s.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(t,e,a,o,i,n){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var r="";if(a)switch(a.constructor){case Number:r=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:r="; expires="+a;break;case Date:r="; expires="+a.toUTCString();break}return s.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+r+(i?"; domain="+i:"")+(o?"; path="+o:"")+(n?"; secure":""),!0},removeItem:function(t,e,a){return!!this.hasItem(t)&&(s.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:"")+(e?"; path="+e:""),!0)},hasItem:function(t){return!!t&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(s.cookie)},keys:function(){for(var t=s.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=t.length,a=0;a<e;a++)t[a]=decodeURIComponent(t[a]);return t}},t}(mr,jQuery,window,document),
//////////////// Countdown
mr=function(r,t,e,a){"use strict";return r.countdown=r.countdown||{},r.countdown.options=r.countdown.options||{},r.countdown.documentReady=function(n){n(".countdown[data-date]").each(function(){var e=n(this),t=e.attr("data-date"),a=void 0!==e.attr("data-days-text")?"%D "+e.attr("data-days-text")+" %H:%M:%S":"%D days %H:%M:%S",a=void 0!==r.countdown.options.format?r.countdown.options.format:a,o=void 0!==e.attr("data-date-format")?e.attr("data-date-format"):a,i;void 0!==e.attr("data-date-fallback")&&(i=e.attr("data-date-fallback")||"Timer Done"),e.countdown(t,function(t){t.elapsed?e.text(i):e.text(t.strftime(o))})})},r.components.documentReadyDeferred.push(r.countdown.documentReady),r}(mr,jQuery,window,document),
//////////////// Datepicker
mr=function(t,e,a,o){"use strict";t.datepicker=t.datepicker||{};var i=t.datepicker.options||{};return t.datepicker.documentReady=function(t){t(".datepicker").length&&t(".datepicker").pickadate(i)},t.components.documentReadyDeferred.push(t.datepicker.documentReady),t}(mr,jQuery,window,document),
//////////////// Dropdowns
mr=function(e,t,s,o){"use strict";return e.dropdowns=e.dropdowns||{},e.dropdowns.done=!1,e.dropdowns.documentReady=function(a){var t=!1;a('html[dir="rtl"]').length&&(t=!0),e.dropdowns.done||(jQuery(o).on("click","body:not(.dropdowns--hover) .dropdown:not(.dropdown--hover), body.dropdowns--hover .dropdown.dropdown--click",function(t){var e=jQuery(this);jQuery(t.target).is(".dropdown--active > .dropdown__trigger")?(e.siblings().removeClass("dropdown--active").find(".dropdown").removeClass("dropdown--active"),e.toggleClass("dropdown--active")):(a(".dropdown--active").removeClass("dropdown--active"),e.addClass("dropdown--active"))}),jQuery(o).on("click touchstart","body:not(.dropdowns--hover)",function(t){jQuery(t.target).is('[class*="dropdown"], [class*="dropdown"] *')||a(".dropdown--active").removeClass("dropdown--active")}),jQuery("body.dropdowns--hover .dropdown").on("click",function(t){var e;t.stopPropagation(),jQuery(this).toggleClass("dropdown--active")}),
// Append a container to the body for measuring purposes
jQuery("body").append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>'),
// Menu dropdown positioning
!1===t?(e.dropdowns.repositionDropdowns(a),jQuery(s).on("resize",function(){e.dropdowns.repositionDropdowns(a)})):(e.dropdowns.repositionDropdownsRtl(a),jQuery(s).on("resize",function(){e.dropdowns.repositionDropdownsRtl(a)})),e.dropdowns.done=!0)},e.dropdowns.repositionDropdowns=function(t){t(".dropdown__container").each(function(){var t,e,a,o,i;jQuery(this).css("left",""),e=(t=jQuery(this)).offset().left,a=jQuery(".containerMeasure").offset().left,o=t.closest(".dropdown").offset().left,i=null,t.css("left",-e+a),t.find('.dropdown__content:not([class*="md-12"])').length&&(i=t.find(".dropdown__content")).css("left",o-a)}),t(".dropdown__content").each(function(){var t,e,a,o,i,n;o=(e=(t=jQuery(this)).offset().left)+(a=t.outerWidth(!0)),i=jQuery(s).outerWidth(!0),n=jQuery(".containerMeasure").outerWidth()-a,i<o&&t.css("left",n)})},e.dropdowns.repositionDropdownsRtl=function(t){var r=jQuery(s).width();t(".dropdown__container").each(function(){var t,e,a,o,i;jQuery(this).css("left",""),t=jQuery(this),e=r-(t.offset().left+t.outerWidth(!0)),a=jQuery(".containerMeasure").offset().left,o=r-(t.closest(".dropdown").offset().left+t.closest(".dropdown").outerWidth(!0)),i=null,t.css("right",-e+a),t.find('.dropdown__content:not([class*="md-12"])').length&&(i=t.find(".dropdown__content")).css("right",o-a)}),t(".dropdown__content").each(function(){var t,e,a,o,i,n;t=jQuery(this),o=(e=r-(t.offset().left+t.outerWidth(!0)))+(a=t.outerWidth(!0)),i=jQuery(s).outerWidth(!0),n=jQuery(".containerMeasure").outerWidth()-a,i<o&&t.css("right",n)})},e.components.documentReady.push(e.dropdowns.documentReady),e}(mr,jQuery,window,document),
//////////////// Forms
mr=function(p,f,h,t){"use strict";return p.forms=p.forms||{},p.forms.captcha={},p.forms.captcha.widgets=[],p.forms.captcha.done=!1,p.forms.documentReady=function(i){p.forms.captcha.widgets=[],
/// Checkbox & Radio Inputs
i('.input-checkbox input[type="checkbox"], .input-radio input[type="radio"]').each(function(t){var e=i(this),a=e.siblings("label"),o="input-assigned-"+t;void 0===e.attr("id")||""===e.attr("id")?e.attr("id",o):o=e.attr("id"),a.attr("for",o)}),
//////////////// Number Inputs
i(".input-number__controls > span").off("click.mr").on("click.mr",function(){var t=jQuery(this),e=t.closest(".input-number"),a=e.find('input[type="number"]'),o=a.attr("max"),i=a.attr("min"),n=1,r=parseInt(a.val(),10);e.is("[data-step]")&&(n=parseInt(e.attr("data-step"),10)),t.hasClass("input-number__increase")?r+n<=o&&a.val(r+n):i<=r-n&&a.val(r-n)}),
//////////////// File Uploads
i(".input-file .btn").off("click.mr").on("click.mr",function(){return i(this).siblings("input").trigger("click"),!1}),
//////////////// Handle Form Submit
i('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr("novalidate",!0).off("submit").on("submit",p.forms.submit),
//////////////// Handle Form Submit
i(t).on("change, input, paste, keyup",".attempted-submit .field-error",function(){i(this).removeClass("field-error")}),
//////////////// Check forms for Google reCaptcha site keys
i('form[data-recaptcha-sitekey]:not([data-recaptcha-sitekey=""])').each(function(){var t=jQuery(this),e=t.find("div.recaptcha"),a,o,i,n,r,s,d;s=void 0!==(s=t.attr("data-recaptcha-theme"))?s:"",d=void 0!==(d=t.attr("data-recaptcha-size"))?d:"",
// Store the site key for later use
p.forms.captcha.sitekey=t.attr("data-recaptcha-sitekey"),e.length||(
// Create a captcha div and insert it before the submit button.
a=t.find("button[type=submit]").closest('[class*="col-"]'),e=jQuery("<div>").addClass("recaptcha"),(o=jQuery("<div>").addClass("col-xs-12").append(e)).insertBefore(a)),
// Add the widget div to the widgets array
i={element:e.get(0),parentForm:t,theme:s,size:d},p.forms.captcha.widgets.push(i),
// mr.forms.captcha.done indicates whether the api script has been appended yet.
!1===p.forms.captcha.done?jQuery('script[src*="recaptcha/api.js"]').length||(r="https://www.google.com/recaptcha/api.js?onload=mrFormsCaptchaInit&render=explicit",(n=jQuery("<script async defer>")).attr("src",r),jQuery("body").append(n),p.forms.captcha.done=!0):"undefined"!=typeof grecaptcha&&p.forms.captcha.renderWidgets()})},p.forms.submit=function(t){
// return false so form submits through jQuery rather than reloading page.
t.preventDefault?t.preventDefault():t.returnValue=!1;var e=f("body"),a=f(t.target).closest("form"),o=void 0!==a.attr("action")?a.attr("action"):"",i=a.find('button[type="submit"], input[type="submit"]'),n=0,r=a.attr("original-error"),s=!!a.find("div.recaptcha").length,d,c,l,u,m;
// Do this if the form is intended to be submitted to MailChimp or Campaign Monitor
if(e.find(".form-error, .form-success").remove(),i.attr("data-text",i.text()),u=a.attr("data-error")?a.attr("data-error"):"Please fill all fields correctly",m=a.attr("data-success")?a.attr("data-success"):"Thanks, we'll be in touch shortly",e.append('<div class="form-error" style="display: none;">'+u+"</div>"),e.append('<div class="form-success" style="display: none;">'+m+"</div>"),c=e.find(".form-error"),l=e.find(".form-success"),a.addClass("attempted-submit"),-1!==o.indexOf("createsend.com")||-1!==o.indexOf("list-manage.com"))
// validateFields returns 1 on error;
if(console.log("Mail list form signup detected."),void 0!==r&&!1!==r&&c.html(r),1!==p.forms.validateFields(a)){a.removeClass("attempted-submit"),
// Hide the error if one was shown
c.fadeOut(200),
// Create a new loading spinner in the submit button.
i.addClass("btn--loading");try{f.ajax({url:a.attr("action"),crossDomain:!0,data:a.serialize(),method:"GET",cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(t){
// Request was a success, what was the response?
"success"!==t.result&&200!==t.Status?(
// Got an error from Mail Chimp or Campaign Monitor
// Keep the current error text in a data attribute on the form
c.attr("original-error",c.text()),
// Show the error with the returned error text.
c.html(t.msg).stop(!0).fadeIn(1e3),l.stop(!0).fadeOut(1e3),i.removeClass("btn--loading")):(
// Got success from Mail Chimp or Campaign Monitor
i.removeClass("btn--loading"),
// For some browsers, if empty `successRedirect` is undefined; for others,
// `successRedirect` is false.  Check for both.
void 0!==(d=a.attr("data-success-redirect"))&&!1!==d&&""!==d?h.location=d:(p.forms.resetForm(a),p.forms.showFormSuccess(l,c,1e3,5e3,500)))}})}catch(t){
// Keep the current error text in a data attribute on the form
c.attr("original-error",c.text()),
// Show the error with the returned error text.
c.html(t.message),p.forms.showFormError(l,c,1e3,5e3,500),i.removeClass("btn--loading")}}else
// There was a validation error - show the default form error message
p.forms.showFormError(l,c,1e3,5e3,500);else
// If no MailChimp or Campaign Monitor form was detected then this is treated as an email form instead.
void 0!==r&&!1!==r&&c.text(r),1===(n=p.forms.validateFields(a))?p.forms.showFormError(l,c,1e3,5e3,500):(a.removeClass("attempted-submit"),
// Hide the error if one was shown
c.fadeOut(200),
// Create a new loading spinner in the submit button.
i.addClass("btn--loading"),jQuery.ajax({type:"POST",url:""!==o?o:"mail/mail.php",data:a.serialize()+"&url="+h.location.href+"&captcha="+s,success:function(t){
// Swiftmailer always sends back a number representing number of emails sent.
// If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
i.removeClass("btn--loading"),f.isNumeric(t)?0<parseInt(t,10)&&(
// For some browsers, if empty 'successRedirect' is undefined; for others,
// 'successRedirect' is false.  Check for both.
void 0!==(d=a.attr("data-success-redirect"))&&!1!==d&&""!==d&&(h.location=d),p.forms.resetForm(a),p.forms.showFormSuccess(l,c,1e3,5e3,500),p.forms.captcha.resetWidgets()):(
// Keep the current error text in a data attribute on the form
c.attr("original-error",c.text()),
// Show the error with the returned error text.
c.text(t).stop(!0).fadeIn(1e3),l.stop(!0).fadeOut(1e3))},error:function(t,e,a){
// Keep the current error text in a data attribute on the form
c.attr("original-error",c.text()),
// Show the error with the returned error text.
c.text(a).stop(!0).fadeIn(1e3),l.stop(!0).fadeOut(1e3),i.removeClass("btn--loading")}}));return!1},p.forms.validateFields=function(t){var e=f(e),a=!1,o,i,n;if((t=f(t)).find('.validate-required[type="checkbox"]').each(function(){var t=f(this);f('[name="'+f(this).attr("name")+'"]:checked').length||(a=1,i=f(this).attr("data-name")||"check",t.parent().addClass("field-error"))}),t.find(".validate-required, .required, [required]").not('input[type="checkbox"]').each(function(){""===f(this).val()?(f(this).addClass("field-error"),a=1):f(this).removeClass("field-error")}),t.find('.validate-email, .email, [name*="cm-"][type="email"]').each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test(f(this).val())?f(this).removeClass("field-error"):(f(this).addClass("field-error"),a=1)}),t.find(".validate-number-dash").each(function(){/^[0-9][0-9-]+[0-9]$/.test(f(this).val())?f(this).removeClass("field-error"):(f(this).addClass("field-error"),a=1)}),
// Validate recaptcha
t.find("div.recaptcha").length&&void 0!==t.attr("data-recaptcha-sitekey")&&(n=f(t.find("div.recaptcha")),""!==grecaptcha.getResponse(t.data("recaptchaWidgetID"))?n.removeClass("field-error"):(n.addClass("field-error"),a=1)),t.find(".field-error").length){var r=f(t).find(".field-error:first");r.length&&f("html, body").stop(!0).animate({scrollTop:r.offset().top-100},1200,function(){r.focus()})}else e.find(".form-error").fadeOut(1e3);return a},p.forms.showFormSuccess=function(t,e,a,o,i){t.stop(!0).fadeIn(a),e.stop(!0).fadeOut(a),setTimeout(function(){t.stop(!0).fadeOut(i)},o)},p.forms.showFormError=function(t,e,a,o,i){e.stop(!0).fadeIn(a),t.stop(!0).fadeOut(a),setTimeout(function(){e.stop(!0).fadeOut(i)},o)},
// Reset form to empty/default state.
p.forms.resetForm=function(t){(t=f(t)).get(0).reset(),t.find(".input-radio, .input-checkbox").removeClass("checked"),t.find("[data-default-value]").filter('[type="text"],[type="number"],[type="email"],[type="url"],[type="search"],[type="tel"]').each(function(){var t=jQuery(this);t.val(t.attr("data-default-value"))})},
// Defined on the window scope as the recaptcha js api seems not to be able to call function in mr scope
h.mrFormsCaptchaInit=function(){p.forms.captcha.renderWidgets()},p.forms.captcha.renderWidgets=function(){p.forms.captcha.widgets.forEach(function(t){""===t.element.innerHTML.replace(/[\s\xA0]+/g,"")&&(t.id=grecaptcha.render(t.element,{sitekey:p.forms.captcha.sitekey,theme:t.theme,size:t.size,callback:p.forms.captcha.setHuman}),t.parentForm.data("recaptchaWidgetID",t.id))})},p.forms.captcha.resetWidgets=function(){p.forms.captcha.widgets.forEach(function(t){grecaptcha.reset(t.id)})},p.forms.captcha.setHuman=function(){jQuery("div.recaptcha.field-error").removeClass("field-error")},p.components.documentReadyDeferred.push(p.forms.documentReady),p}(mr,jQuery,window,document),
//////////////// Granim
mr=function(v,t,e,a){"use strict";return v.granim=v.granim||{},v.granim.documentReady=function(h){h("[data-gradient-bg]").each(function(t,e){var a=h(this),o="granim-"+t,i=a.attr("data-gradient-bg"),n=[],r=[],s={},d,c,l,u,m;
// Canvas element forms the gradient background
if(a.prepend('<canvas id="'+o+'"></canvas>'),!0===(
// Regular expression to match comma separated list of hex colour values
c=/^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(i))){for(
// If number of colours is odd - duplicate last colour to make even array
(d=(i=(i=i.replace(" ","")).split(",")).length)%2!=0&&i.push(i[d-1]),l=0;l<d/2;l++)(r=[]).push(i.shift()),r.push(i.shift()),n.push(r);
// attribute overrides - allows per-gradient override of global options.
s.states={"default-state":{gradients:n}}}u={element:"#"+o,name:"basic-gradient",direction:"left-right",opacity:[1,1],isPausedWhenNotInView:!0,states:{"default-state":{gradients:n}}},m=jQuery.extend({},u,v.granim.options,s),h(this).data("gradientOptions",m);var p=h(this),f=new Granim(m)})},v.components.documentReadyDeferred.push(v.granim.documentReady),v}(mr,jQuery,window,document),
//////////////// Instagram
mr=function(d,t,e,a){"use strict";return d.instagram=d.instagram||{},d.instagram.documentReady=function(o){var i,n,r={};if(o(".instafeed").length){
// Replace with your own Access Token and Client ID
var t="4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14",e="b9b1d8ae049d4153b24a6332f0088686",a,s;o(".instafeed[data-access-token][data-client-id]").length&&(""!==(a=o(".instafeed[data-access-token][data-client-id]").first().attr("data-access-token"))&&(t=a),""!==(s=o(".instafeed[data-access-token][data-client-id]").first().attr("data-client-id"))&&(e=s)),jQuery.fn.spectragram.accessData={accessToken:t,clientID:e}}o(".instafeed").each(function(){var t=o(this),e=t.attr("data-user-name"),a=12;i={query:"mediumrarethemes",max:12},
// Attribute Overrides taken from data attributes allow for per-feed customization
r.max=t.attr("data-amount"),r.query=t.attr("data-user-name"),n=jQuery.extend({},i,d.instagram.options,r),t.append("<ul></ul>"),t.children("ul").spectragram("getUserFeed",n)})},d.components.documentReadyDeferred.push(d.instagram.documentReady),d}(mr,jQuery,window,document),
//////////////// Maps
mr=function(w,t,e,b){"use strict";return w.maps=w.maps||{},w.maps.options=w.maps.options||{},w.maps.documentReady=function(t){
// Interact with Map once the user has clicked (to prevent scrolling the page = zooming the map
t(".map-holder").on("click",function(){t(this).addClass("interact")}).removeClass("interact");var e=t(".map-container[data-maps-api-key]");e.length&&(e.addClass("gmaps-active"),w.maps.initAPI(t),w.maps.init())},w.maps.initAPI=function(t){
// Load Google MAP API JS with callback to initialise when fully loaded
if(b.querySelector("[data-maps-api-key]")&&!b.querySelector(".gMapsAPI")&&t("[data-maps-api-key]").length){var e=b.createElement("script"),a=t("[data-maps-api-key]:first").attr("data-maps-api-key");""!==(a=void 0!==a?a:"")&&(e.type="text/javascript",e.src="https://maps.googleapis.com/maps/api/js?key="+a+"&callback=mr.maps.init",e.className="gMapsAPI",b.body.appendChild(e))}},w.maps.init=function(){void 0!==e.google&&void 0!==e.google.maps&&(w.maps.instances=[],jQuery(".gmaps-active").each(function(){var a=this,t=jQuery(this),e=766<jQuery(b).width(),o=void 0!==t.attr("data-zoom-controls"),i=void 0!==t.attr("data-zoom-controls")&&t.attr("data-zoom-controls"),n=void 0!==t.attr("data-latlong")&&t.attr("data-latlong"),r=!!n&&1*n.substr(0,n.indexOf(",")),s=!!n&&1*n.substr(n.indexOf(",")+1),d=new google.maps.Geocoder,c=void 0!==t.attr("data-address")?t.attr("data-address").split(";"):[""],l,u,m,p,f,h,v={},y={},g;(g=b.createEvent("Event")).initEvent("mapCreated.maps.mr",!0,!0),p={disableDefaultUI:!0,draggable:e,scrollwheel:!1,styles:[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],zoom:17,zoomControl:!1},
// Attribute overrides - allows data attributes on the map to override global options
v.styles=void 0!==t.attr("data-map-style")?JSON.parse(t.attr("data-map-style")):void 0,v.zoom=t.attr("data-map-zoom")?parseInt(t.attr("data-map-zoom"),10):void 0,v.zoomControlOptions=!1!==i?{position:google.maps.ControlPosition[i]}:void 0,m={icon:{url:("undefined"!=typeof mr_variant?"../":"")+"img/mapmarker.png",scaledSize:new google.maps.Size(50,50)},title:"We Are Here",optimised:!1},y.icon=void 0!==t.attr("data-marker-image")?t.attr("data-marker-image"):void 0,y.title=t.attr("data-marker-title"),f=jQuery.extend({},p,w.maps.options.map,v),h=jQuery.extend({},m,w.maps.options.marker,y),void 0!==c&&""!==c[0]?d.geocode({address:c[0].replace("[nomarker]","")},function(t,e){e===google.maps.GeocoderStatus.OK?(l=new google.maps.Map(a,f),w.maps.instances.push(l),jQuery(a).trigger("mapCreated.maps.mr").get(0).dispatchEvent(g),l.setCenter(t[0].geometry.location),c.forEach(function(t){var e;if(/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(t))var a=t.split(","),o=new google.maps.Marker(jQuery.extend({},h,{position:{lat:1*a[0],lng:1*a[1]},map:l}));else t.indexOf("[nomarker]")<0&&(e=new google.maps.Geocoder).geocode({address:t.replace("[nomarker]","")},function(t,e){e===google.maps.GeocoderStatus.OK?o=new google.maps.Marker(jQuery.extend({},h,{map:l,position:t[0].geometry.location})):console.log("Map marker error: "+e)})})):console.log("There was a problem geocoding the address.")}):void 0!==r&&""!==r&&!1!==r&&void 0!==s&&""!==s&&!1!==s&&(f.center={lat:r,lng:s},l=new google.maps.Map(a,f),u=new google.maps.Marker(jQuery.extend({},h,{position:{lat:r,lng:s},map:l})),w.maps.instances.push(l),jQuery(a).trigger("mapCreated.maps.mr").get(0).dispatchEvent(g))}))},w.components.documentReady.push(w.maps.documentReady),w}(mr,jQuery,window,document),
//////////////// Masonry
mr=function(n,r,t,e){"use strict";return n.masonry=n.masonry||{},n.masonry.documentReady=function(o){n.masonry.updateFilters(),o(e).on("click touchstart",".masonry__filters li:not(.js-no-action)",function(){var t=o(this),e=t.closest(".masonry").find(".masonry__container"),a="*";"*"!==t.attr("data-masonry-filter")&&(a=".filter-"+t.attr("data-masonry-filter")),t.siblings("li").removeClass("active"),t.addClass("active"),e.removeClass("masonry--animate"),e.on("layoutComplete",function(){o(this).addClass("masonry--active"),"undefined"!=typeof mr_parallax&&setTimeout(function(){mr_parallax.profileParallaxElements()},100)}),e.isotope({filter:a})})},n.masonry.windowLoad=function(){r(".masonry").each(function(){var t=r(this).find(".masonry__container"),e=r(this),a="*",o,i={};o={itemSelector:".masonry__item",filter:"*",masonry:{columnWidth:".masonry__item"}},
// Check for a default filter attribute
e.is("[data-default-filter]")&&(a=".filter-"+(a=e.attr("data-default-filter").toLowerCase()),e.find("li[data-masonry-filter]").removeClass("active"),e.find('li[data-masonry-filter="'+e.attr("data-default-filter").toLowerCase()+'"]').addClass("active")),
// Use data attributes to override the default settings and provide a per-masonry customisation where necessary.
i.filter="*"!==a?a:void 0,t.on("layoutComplete",function(){t.addClass("masonry--active"),"undefined"!=typeof mr_parallax&&setTimeout(function(){mr_parallax.profileParallaxElements()},100)}),t.isotope(jQuery.extend({},o,n.masonry.options,i))})},n.masonry.updateFilters=function(t){var e;r(
// If no argument is supplied, just apply the update to all masonry sets on the page.
t=void 0!==t?t:".masonry").each(function(){var a=r(this),t=a.find(".masonry__container"),e=a.find(".masonry__filters"),
// data-filter-all-text can be used to set the word for "all"
o=void 0!==e.attr("data-filter-all-text")?e.attr("data-filter-all-text"):"All",i;
// Ensure we are working with a .masonry element
a.is(".masonry")&&t.find(".masonry__item[data-masonry-filter]").length&&(
// Create empty ul for filters
(i=e.find("> ul")).length||(i=e.append("<ul></ul>").find("> ul")),
// To avoid cases where user leave filter attribute blank
// only take items that have filter attribute
t.find(".masonry__item[data-masonry-filter]").each(function(){var o=r(this),t=o.attr("data-masonry-filter"),e=[];
// If not undefined or empty
void 0!==t&&""!==t&&(
// Split tags from string into array
e=t.split(",")),r(e).each(function(t,e){
// Slugify the tag
var a=n.util.slugify(e);
// Add the filter class to the masonry item
o.addClass("filter-"+a),
// If this tag does not appear in the list already, add it
i.find('[data-masonry-filter="'+a+'"]').length||i.append('<li data-masonry-filter="'+a+'">'+e+"</li>")})}),
// Remove any unnused filter options in list
i.find("[data-masonry-filter]").each(function(){var t=r(this),e=t.text();"*"!==r(this).attr("data-masonry-filter")&&(a.find('.masonry__item[data-masonry-filter*="'+e+'"]').length||t.remove())}),n.util.sortChildrenByText(r(this).find(".masonry__filters ul")),
// Add a filter "all" option
i.find('[data-masonry-filter="*"]').length||i.prepend('<li class="active" data-masonry-filter="*">'+o+"</li>"));
//End of "if $masonry is .masonry"
})},n.masonry.updateLayout=function(t){var e;r(
// If no argument is supplied, just apply the update to all masonry sets on the page.
t=void 0!==t?t:".masonry").each(function(){var t=r(this),e=t.find(".masonry__item:not([style])"),a=t.find(".masonry__container");t.is(".masonry")&&(e.length&&a.isotope("appended",e).isotope("layout"),a.isotope("layout"))})},n.components.documentReady.push(n.masonry.documentReady),n.components.windowLoad.push(n.masonry.windowLoad),n}(mr,jQuery,window,document),
//////////////// Modals
mr=function(r,i,s,d){"use strict";return r.modals=r.modals||{},r.modals.documentReady=function(n){var t='<div class="all-page-modals"></div>',e=n("div.main-container");
// Autoshow modal by ID from location href
if(e.length?(jQuery(t).insertAfter(e),r.modals.allModalsContainer=n("div.all-page-modals")):(jQuery("body").append(t),r.modals.allModalsContainer=jQuery("body div.all-page-modals")),n(".modal-container").each(function(){
// Add modal close if none exists
var t=n(this),e=n(s),a=t.find(".modal-content");
// Set modal height
if(t.find(".modal-close").length||t.find(".modal-content").append('<div class="modal-close modal-close-cross"></div>'),void 0!==a.attr("data-width")){var o=1*a.attr("data-width").substr(0,a.attr("data-width").indexOf("%"));a.css("width",o+"%")}if(void 0!==a.attr("data-height")){var i=1*a.attr("data-height").substr(0,a.attr("data-height").indexOf("%"));a.css("height",i+"%")}
// Set iframe's src to data-src to stop autoplaying iframes
r.util.idleSrc(t,"iframe")}),n(".modal-instance").each(function(t){var e=n(this),a=e.find(".modal-container"),o=e.find(".modal-content"),i=e.find(".modal-trigger");
// Link modal with modal-id attribute
i.attr("data-modal-index",t),a.attr("data-modal-index",t),
// Set unique id for multiple triggers
void 0!==a.attr("data-modal-id")&&i.attr("data-modal-id",a.attr("data-modal-id")),
// Attach the modal to the body
a=a.detach(),r.modals.allModalsContainer.append(a)}),n(".modal-trigger").on("click",function(){var t=n(this),e,a;
// Determine if the modal id is set by user or is set programatically
return a=void 0!==t.attr("data-modal-id")?(e=t.attr("data-modal-id"),r.modals.allModalsContainer.find('.modal-container[data-modal-id="'+e+'"]')):(e=n(this).attr("data-modal-index"),r.modals.allModalsContainer.find('.modal-container[data-modal-index="'+e+'"]')),r.util.activateIdleSrc(a,"iframe"),r.modals.autoplayVideo(a),r.modals.showModal(a),!1}),jQuery(d).on("click",".modal-close",r.modals.closeActiveModal),jQuery(d).keyup(function(t){27===t.keyCode&&// escape key maps to keycode `27`
r.modals.closeActiveModal()}),n(".modal-container:not(.modal--prevent-close)").on("click",function(t){t.target===this&&r.modals.closeActiveModal()}),
// Trigger autoshow modals
n(".modal-container[data-autoshow]").each(function(){var t=n(this),e=1*t.attr("data-autoshow");r.util.activateIdleSrc(t),r.modals.autoplayVideo(t),
// If this modal has a cookie attribute, check to see if a cookie is set, and if so, don't show it.
void 0!==t.attr("data-cookie")&&r.cookies.hasItem(t.attr("data-cookie"))||r.modals.showModal(t,e)}),
// Exit modals
n(".modal-container[data-show-on-exit]").each(function(){var t=jQuery(this),e=t.attr("data-show-on-exit"),a=0;t.attr("data-delay")&&(a=parseInt(t.attr("data-delay"),10)||0),
// If a valid selector is found, attach leave event to show modal.
n(e).length&&(t.prepend(n('<i class="ti-close close-modal">')),jQuery(d).on("mouseleave",e,function(){n(".modal-active").length||void 0!==t.attr("data-cookie")&&r.cookies.hasItem(t.attr("data-cookie"))||r.modals.showModal(t,a)}))}),2===s.location.href.split("#").length){var a=s.location.href.split("#").pop();n('[data-modal-id="'+a+'"]').length&&(r.modals.closeActiveModal(),r.modals.showModal(n('[data-modal-id="'+a+'"]')))}jQuery(d).on("click",'a[href^="#"]',function(){var t=n(this).attr("href").replace("#","");n('[data-modal-id="'+t+'"]').length&&(r.modals.closeActiveModal(),setTimeout(r.modals.showModal,500,'[data-modal-id="'+t+'"]',0))}),
// Make modal scrollable
jQuery(d).on("wheel mousewheel scroll",".modal-content, .modal-content .scrollable",function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),this.scrollTop+=t.originalEvent.deltaY})},
////////////////
//////////////// End documentReady
////////////////
r.modals.showModal=function(e,t){var a=void 0!==t?1*t:0,o;i(e).length&&setTimeout(function(){var t=d.createEvent("Event");t.initEvent("modalOpened.modals.mr",!0,!0),i(e).addClass("modal-active").trigger("modalOpened.modals.mr").get(0).dispatchEvent(t)},a)},r.modals.closeActiveModal=function(){var t=jQuery("body div.modal-active"),e=d.createEvent("Event");r.util.idleSrc(t,"iframe"),r.util.pauseVideo(t),
// If this modal requires to be closed permanently using a cookie, set the cookie now.
void 0!==t.attr("data-cookie")&&r.cookies.setItem(t.attr("data-cookie"),"true",1/0,"/"),t.length&&(
// Remove hash from URL bar if this modal was opened via url bar ID
t.is("[data-modal-id]")&&s.location.hash==="#"+t.attr("data-modal-id")&&r.util.removeHash(),e.initEvent("modalClosed.modals.mr",!0,!0),t.removeClass("modal-active").trigger("modalClosed.modals.mr").get(0).dispatchEvent(e))},r.modals.autoplayVideo=function(t){var e;
// If modal contains HTML5 video with autoplay, play the video
t.find("video[autoplay]").length&&t.find("video").get(0).play()},r.components.documentReady.push(r.modals.documentReady),r}(mr,jQuery,window,document),
//////////////// Newsletter Providers
mr=function(s,a,t,e){"use strict";return s.newsletters=s.newsletters||{},s.newsletters.documentReady=function(a){var e,t,o,i,n,r;
// Treat Campaign Monitor forms
a('form[action*="createsend.com"]').each(function(){
// Override browser validation and allow us to use our own
(e=a(this)).attr("novalidate","novalidate"),
// Give each text input a placeholder value
e.is(".form--no-placeholders")?e.find("input[placeholder]").removeAttr("placeholder"):e.find("input:not([checkbox]):not([radio])").each(function(){var t=a(this);void 0!==t.attr("placeholder")?""===t.attr("placeholder")&&t.siblings("label").length&&(t.attr("placeholder",t.siblings("label").first().text()),e.is(".form--no-labels")&&t.siblings("label").first().remove()):t.siblings("label").length&&(t.attr("placeholder",t.siblings("label").first().text()),e.is(".form--no-labels")&&t.siblings("label").first().remove()),t.parent().is("p")&&t.unwrap()}),
// Wrap select elements in template code
e.find("select").wrap('<div class="input-select"></div>'),
// Wrap radios elements in template code
e.find('input[type="radio"]').wrap('<div class="input-radio"></div>'),
// Wrap checkbox elements in template code
e.find('input[type="checkbox"]').each(function(){t=a(this),i=t.attr("id"),(o=e.find("label[for="+i+"]")).length||(o=a('<label for="'+i+'"></label>')),t.before('<div class="input-checkbox" data-id="'+i+'"></div>'),a('.input-checkbox[data-id="'+i+'"]').prepend(t),a('.input-checkbox[data-id="'+i+'"]').prepend(o)}),e.find('button[type="submit"]').each(function(){var t=a(this);t.addClass("btn"),t.parent().is("p")&&t.unwrap()}),e.find("[required]").attr("required","required").addClass("validate-required"),e.addClass("form--active"),s.newsletters.prepareAjaxAction(e)}),
// Treat MailChimp forms
a('form[action*="list-manage.com"]').each(function(){
// Override browser validation and allow us to use our own
(e=a(this)).attr("novalidate","novalidate"),
// Give each text input a placeholder value
e.is(".form--no-placeholders")?e.find("input[placeholder]").removeAttr("placeholder"):e.find("input:not([checkbox]):not([radio])").each(function(){var t=a(this);void 0!==t.attr("placeholder")?""===t.attr("placeholder")&&t.siblings("label").length&&(t.attr("placeholder",t.siblings("label").first().text()),e.is(".form--no-labels")&&t.siblings("label").first().remove()):t.siblings("label").length&&(t.attr("placeholder",t.siblings("label").first().text()),e.is(".form--no-labels")&&t.siblings("label").first().remove())}),e.is(".form--no-labels")&&e.find("input:not([checkbox]):not([radio])").each(function(){var t=a(this);t.siblings("label").length&&t.siblings("label").first().remove()}),
// Wrap select elements in template code
e.find("select").wrap('<div class="input-select"></div>'),
// Wrap checboxes elements in template code
e.find('input[type="checkbox"]').each(function(){t=jQuery(this),n=t.parent(),(o=n.find("label")).length||(o=jQuery("<label>")),t.before('<div class="input-checkbox"></div>'),n.find(".input-checkbox").append(t),n.find(".input-checkbox").append(o)}),
// Wrap radio elements in template code
e.find('input[type="radio"]').each(function(){r=jQuery(this),n=r.closest("li"),(o=n.find("label")).length||(o=jQuery("<label>")),r.before('<div class="input-radio"></div>'),n.find(".input-radio").prepend(r),n.find(".input-radio").prepend(o)}),
// Convert MailChimp input[type="submit"] to div.button
e.find('input[type="submit"]').each(function(){var t=a(this),e=jQuery("<button/>").attr("type","submit").attr("class",t.attr("class")).addClass("btn").text(t.attr("value"));t.parent().is("div.clear")&&t.unwrap(),e.insertBefore(t),t.remove()}),e.find("input").each(function(){var t=a(this);t.hasClass("required")&&t.removeClass("required").addClass("validate-required")}),e.find('input[type="email"]').removeClass("email").addClass("validate-email"),e.find("#mce-responses").remove(),e.find(".mc-field-group").each(function(){a(this).children().first().unwrap()}),e.find("[required]").attr("required","required").addClass("validate-required"),e.addClass("form--active"),s.newsletters.prepareAjaxAction(e)}),
// Reinitialize the forms so interactions work as they should
s.forms.documentReady(s.setContext("form.form--active"))},s.newsletters.prepareAjaxAction=function(t){var e=a(t).attr("action");
// Alter action for a Mail Chimp-compatible ajax request url.
/list-manage\.com/.test(e)&&"//"===(e=e.replace("/post?","/post-json?")+"&c=?").substr(0,2)&&(e="http:"+e),
// Alter action for a Campaign Monitor-compatible ajax request url.
/createsend\.com/.test(e)&&(e+="?callback=?"),
// Set action on the form
a(t).attr("action",e)},s.components.documentReady.push(s.newsletters.documentReady),s}(mr,jQuery,window,document),
//////////////// Notifications
mr=function(r,o,t,s){"use strict";return r.notifications=r.notifications||{},r.notifications.documentReady=function(a){a(".notification").each(function(){var t=a(this);t.find(".notification-close").length||t.append('<div class="notification-close-cross notification-close"></div>')}),a(".notification[data-autoshow]").each(function(){var t=a(this),e=parseInt(t.attr("data-autoshow"),10);
// If this notification has a cookie attribute, check to see if a cookie is set, and if so, don't show it.
void 0!==t.attr("data-cookie")&&r.cookies.hasItem(t.attr("data-cookie"))||r.notifications.showNotification(t,e)}),a("[data-notification-link]:not(.notification)").on("click",function(){var t=jQuery(this).attr("data-notification-link"),e=a('.notification[data-notification-link="'+t+'"]');return jQuery(".notification--reveal").addClass("notification--dismissed"),e.removeClass("notification--dismissed"),r.notifications.showNotification(e,0),!1}),a(".notification-close").on("click",function(){var t=jQuery(this);
// Pass the closeNotification function a reference to the close button
if(r.notifications.closeNotification(t),"#"===t.attr("href"))return!1}),a(".notification .").on("click",function(){var t=jQuery(this).closest(".notification").attr("data-notification-link");r.notifications.closeNotification(t)})},r.notifications.showNotification=function(t,e){var a=jQuery(t),o=void 0!==e?1*e:0,i=s.createEvent("Event");
// If notification has autohide attribute, set a timeout
// for the autohide time plus the original delay time in case notification was called
// on page load
if(setTimeout(function(){i.initEvent("notificationOpened.notifications.mr",!0,!0),a.addClass("notification--reveal").trigger("notificationOpened.notifications.mr").get(0).dispatchEvent(i),a.closest("nav").addClass("notification--reveal"),a.find("input").length&&a.find("input").first().focus()},o),t.is("[data-autohide]")){var n=parseInt(t.attr("data-autohide"),10);setTimeout(function(){r.notifications.closeNotification(t)},n+o)}},r.notifications.closeNotification=function(t){var e=jQuery(t),a=s.createEvent("Event");t=e.is(".notification")?e:e.is(".notification-close")?e.closest(".notification"):o('.notification[data-notification-link="'+t+'"]'),a.initEvent("notificationClosed.notifications.mr",!0,!0),t.addClass("notification--dismissed").trigger("notificationClosed.notifications.mr").get(0).dispatchEvent(a),t.closest("nav").removeClass("notification--reveal"),
// If this notification requires to be closed permanently using a cookie, set the cookie now.
void 0!==t.attr("data-cookie")&&r.cookies.setItem(t.attr("data-cookie"),"true",1/0,"/")},r.components.documentReady.push(r.notifications.documentReady),r}(mr,jQuery,window,document),
//////////////// Parallax
mr=function(t,e,s,a){"use strict";return t.parallax=t.parallax||{},t.parallax.documentReady=function(t){var e=t(s),a=e.width(),o=e.height(),i=t("nav").outerHeight(!0);if(768<a){var n=t(".parallax:nth-of-type(1)"),r=t(".parallax:nth-of-type(1) .background-image-holder");r.css("top",-i),n.outerHeight(!0)===o&&r.css("height",o+i)}},t.parallax.update=function(){"undefined"!=typeof mr_parallax&&(mr_parallax.profileParallaxElements(),mr_parallax.mr_parallaxBackground())},t.components.documentReady.push(t.parallax.documentReady),t}(mr,jQuery,window,document),
//////////////// Progress Horizontal (bars)
mr=function(t,e,a,o){"use strict";return t.progressHorizontal=t.progressHorizontal||{},t.progressHorizontal.documentReady=function(t){var o=[];t(".progress-horizontal").each(function(){var t=jQuery(this).find(".progress-horizontal__bar"),e={},a=jQuery('<div class="progress-horizontal__progress"></div>');t.prepend(a),e.element=t,e.progress=a,e.value=parseInt(t.attr("data-value"),10)+"%",e.offsetTop=t.offset().top,e.animate=!1,jQuery(this).hasClass("progress-horizontal--animate")?e.animate=!0:a.css("width",e.value),o.push(e)})},t.components.documentReady.push(t.progressHorizontal.documentReady),t}(mr,jQuery,window,document),
//////////////// EasyPiecharts
mr=function(c,t,e,a){"use strict";return c.easypiecharts=c.easypiecharts||{},c.easypiecharts.pies=[],c.easypiecharts.options=c.easypiecharts.options||{},c.easypiecharts.documentReady=function(t){t(".radial").each(function(){var t=jQuery(this),e=0,a,o,i=110,n=3,r={},s={},d;r={animate:{duration:2e3,enabled:!0},barColor:"#000000",scaleColor:!1,size:i,lineWidth:3},void 0!==c.easypiecharts.options.size&&(i=c.easypiecharts.options.size),void 0!==t.attr("data-timing")&&(s.animate={duration:parseInt(t.attr("data-timing"),10),enabled:!0}),void 0!==t.attr("data-color")&&(s.barColor=t.attr("data-color")),void 0!==t.attr("data-size")&&(i=s.size=parseInt(t.attr("data-size"),10)),void 0!==t.attr("data-bar-width")&&(s.lineWidth=parseInt(t.attr("data-bar-width"),10)),t.css("height",i).css("width",i),"object"==typeof c.easypiecharts.options&&(d=jQuery.extend({},r,c.easypiecharts.options,s)),t.easyPieChart(d),t.data("easyPieChart").update(0)}),t(".radial").length&&(c.easypiecharts.init(),c.easypiecharts.activate(),c.scroll.listeners.push(c.easypiecharts.activate))},c.easypiecharts.init=function(){c.easypiecharts.pies=[],t(".radial").each(function(){var t={},e=jQuery(this);t.element=e,t.value=parseInt(e.attr("data-value"),10),t.top=e.offset().top,t.height=e.height()/2,t.active=!1,c.easypiecharts.pies.push(t)})},c.easypiecharts.activate=function(){c.easypiecharts.pies.forEach(function(t){Math.round(c.scroll.y+c.window.height)>=Math.round(t.top+t.height)&&!1===t.active&&(t.element.data("easyPieChart").enableAnimation(),t.element.data("easyPieChart").update(t.value),t.element.addClass("radial--active"),t.active=!0)})},c.components.documentReadyDeferred.push(c.easypiecharts.documentReady),c}(mr,jQuery,window,document),
//////////////// Flickity
mr=function(s,t,e,a){"use strict";return s.sliders=s.sliders||{},s.sliders.documentReady=function(r){r(".slider").each(function(t){var a=r(this),e=a.find("ul.slides");e.find(">li").addClass("slide");var o=e.find("li").length,i={cellSelector:".slide",cellAlign:"left",wrapAround:!0,pageDots:!1,prevNextButtons:!1,autoPlay:!0,draggable:!(o<2),imagesLoaded:!0,accessibility:!0,rightToLeft:!1,initialIndex:0,freeScroll:!1},n={};n.pageDots="true"===a.attr("data-paging")&&1<e.find("li").length||void 0,n.prevNextButtons="true"===a.attr("data-arrows")||void 0,n.draggable="false"!==a.attr("data-draggable")&&void 0,n.autoPlay="false"!==a.attr("data-autoplay")&&(a.attr("data-timing")?parseInt(a.attr("data-timing"),10):void 0),n.accessibility="false"!==a.attr("data-accessibility")&&void 0,n.rightToLeft="true"===a.attr("data-rtl")||void 0,n.initialIndex=a.attr("data-initial")?parseInt(a.attr("data-initial"),10):void 0,n.freeScroll="true"===a.attr("data-freescroll")||void 0,
// Set data attribute to inidicate the number of children in the slider
a.attr("data-children",o),r(this).data("sliderOptions",jQuery.extend({},i,s.sliders.options,n)),r(e).flickity(r(this).data("sliderOptions")),r(e).on("scroll.flickity",function(t,e){a.find(".is-selected").hasClass("controls--dark")?a.addClass("controls--dark"):a.removeClass("controls--dark")})}),s.parallax.update&&s.parallax.update()},s.components.documentReadyDeferred.push(s.sliders.documentReady),s}(mr,jQuery,window,document),
//////////////// Smoothscroll
mr=function(n,i,r,t){"use strict";return n.smoothscroll=n.smoothscroll||{},n.smoothscroll.sections=[],n.smoothscroll.init=function(){n.smoothscroll.sections=[],i("a.").each(function(){var t={},e=i(this),a=e.attr("href"),o;new RegExp("^#[^\r\n\t\f\v#.]+$","gm").test(a)&&i("section"+a).length&&(t.id=a,t.top=Math.round(i(a).offset().top),t.height=Math.round(i(a).outerHeight()),t.link=e.get(0),t.active=!1,n.smoothscroll.sections.push(t))}),n.smoothscroll.highlight()},n.smoothscroll.highlight=function(){n.smoothscroll.sections.forEach(function(t){n.scroll.y>=t.top&&n.scroll.y<t.top+t.height?!1===t.active&&(t.link.classList.add("--active"),t.active=!0):(t.link.classList.remove("--active"),t.active=!1)})},n.scroll.listeners.push(n.smoothscroll.highlight),n.smoothscroll.documentReady=function(o){
// Smooth scroll to inner links
var t=o("a."),e,a,i={};a={selector:".",selectorHeader:null,speed:750,easing:"easeInOutCubic",offset:0},t.length&&(t.each(function(t){var e=o(this),a;"#"!==e.attr("href").charAt(0)&&e.removeClass("")}),n.smoothscroll.init(),o(r).on("resize",n.smoothscroll.init),e=0,o("body[data-smooth-scroll-offset]").length&&(e=o("body").attr("data-smooth-scroll-offset"),e*=1),i.offset=0!==e?e:void 0,smoothScroll.init(jQuery.extend({},a,n.smoothscroll.options,i)))},n.components.documentReady.push(n.smoothscroll.documentReady),n.components.windowLoad.push(n.smoothscroll.init),n}(mr,jQuery,window,document),
//////////////// Tabs
mr=function(a,d,t,c){"use strict";return a.tabs=a.tabs||{},a.tabs.documentReady=function(o){o(".tabs").each(function(){var t=o(this);t.after('<ul class="tabs-content">'),t.find("li").each(function(){var t=o(this),e=t.find(".tab__content").wrap("<li></li>").parent(),a=e.clone(!0,!0);e.remove(),t.closest(".tabs-container").find(".tabs-content").append(a)})}),o(".tabs > li").on("click",function(){var t=o(this),e;a.tabs.activateTab(t),
// Update the URL bar if the currently clicked tab has an ID
t.is("[id]")&&(
// Create the hash from the tab's ID
e="#"+t.attr("id"),
// Check we are in a newish browser with the history API
history.pushState?history.pushState(null,null,e):location.hash=e)}),o(".tabs li.active").each(function(){a.tabs.activateTab(this)}),""!==t.location.hash&&a.tabs.activateTabById(t.location.hash),o('a[href^="#"]').on("click",function(){a.tabs.activateTabById(o(this).attr("href"))})},a.tabs.activateTab=function(t){var e=d(t),a=e.closest(".tabs-container"),o=1*e.index()+1,i=a.find("> .tabs-content > li:nth-of-type("+o+")"),n=c.createEvent("Event"),r,s;n.initEvent("tabOpened.tabs.mr",!0,!0),a.find("> .tabs > li").removeClass("active"),a.find("> .tabs-content > li").removeClass("active"),e.addClass("active").trigger("tabOpened.tabs.mr").get(0).dispatchEvent(n),i.addClass("active"),(
// If there is an <iframe> element in the tab, reload its content when the tab is made active.
r=i.find("iframe")).length&&r.attr("src",r.attr("src"))},a.tabs.activateTabById=function(t){""!==t&&"#"!==t&&d(".tabs > li#"+t.replace("#","")).length&&d(".tabs > li#"+t.replace("#","")).click()},a.components.documentReady.push(a.tabs.documentReady),a}(mr,jQuery,window,document),
//////////////// Toggle Class
mr=function(t,e,a,o){"use strict";return t.toggleClass=t.toggleClass||{},t.toggleClass.documentReady=function(n){n("[data-toggle-class]").each(function(){var i=n(this),t=i.attr("data-toggle-class").split("|");n(t).each(function(){var t=i,e=[],a="",o="",e;2===(e=this.split(";")).length?(o=e[0],a=e[1],n(t).on("click",function(){return t.hasClass("toggled-class")?t.removeClass("toggled-class"):t.toggleClass("toggled-class"),n(o).toggleClass(a),!1})):console.log('Error in [data-toggle-class] attribute. This attribute accepts an element, or comma separated elements terminated witha ";" followed by a class name to toggle')})})},t.components.documentReady.push(t.toggleClass.documentReady),t}(mr,jQuery,window,document),
//////////////// Typed Headline Effect
mr=function(n,t,e,a){"use strict";return n.typed=n.typed||{},n.typed.documentReady=function(i){i(".typed-text").each(function(){var t=i(this),e=t.attr("data-typed-strings")?t.attr("data-typed-strings").split(","):[],a={strings:[],typeSpeed:100,loop:!0,showCursor:!1},o={};o.strings=t.attr("data-typed-strings")?t.attr("data-typed-strings").split(","):void 0,i(t).typed(jQuery.extend({},a,n.typed.options,o))})},n.components.documentReady.push(n.typed.documentReady),n}(mr,jQuery,window,document),
//////////////// Twitter Feeds
mr=function(n,t,e,a){"use strict";return n.twitter=n.twitter||{},n.twitter.options=n.twitter.options||{},n.twitter.documentReady=function(o){o(".tweets-feed").each(function(t){o(this).attr("id","tweets-"+t)}).each(function(t){function e(t){for(var e=t.length,a=0,o='<ul class="slides">';a<e;)o+="<li>"+t[a]+"</li>",a++;
// Initialize twitter feed slider
if(o+="</ul>",i.html(o),i.closest(".slider").length)return n.sliders.documentReady(n.setContext()),o}var i=o("#tweets-"+t),a={domId:"",maxTweets:6,enableLinks:!0,showUser:!0,showTime:!0,dateFunction:"",showRetweet:!1,customCallback:e};a=jQuery.extend(a,n.twitter.options),void 0!==i.attr("data-widget-id")?a.id=i.attr("data-widget-id"):void 0!==i.attr("data-feed-name")&&""!==i.attr("data-feed-name")?a.profile={screenName:i.attr("data-feed-name").replace("@","")}:void 0!==n.twitter.options.profile?a.profile={screenName:n.twitter.options.profile.replace("@","")}:a.profile={screenName:"twitter"},a.maxTweets=i.attr("data-amount")?i.attr("data-amount"):a.maxTweets,i.closest(".twitter-feed--slider").length&&i.addClass("slider"),twitterFetcher.fetch(a)})},n.components.documentReady.push(n.twitter.documentReady),n}(mr,jQuery,window,document),
//////////////// Video
mr=function(o,t,e,a){"use strict";return o.video=o.video||{},o.video.options=o.video.options||{},o.video.options.ytplayer=o.video.options.ytplayer||{},o.video.documentReady=function(i){
//////////////// Youtube Background
i(".youtube-background").length&&i(".youtube-background").each(function(){var t=i(this),e={containment:"self",autoPlay:!0,mute:!0,opacity:1},a={};
// Attribute overrides - provides overrides to the global options on a per-video basis
a.videoURL=i(this).attr("data-video-url"),a.startAt=i(this).attr("data-start-at")?parseInt(i(this).attr("data-start-at"),10):void 0,t.closest(".videobg").append('<div class="loading-indicator"></div>'),t.YTPlayer(jQuery.extend({},e,o.video.options.ytplayer,a)),t.on("YTPStart",function(){t.closest(".videobg").addClass("video-active")})}),i(".videobg").find("video").length&&i(".videobg").find("video").closest(".videobg").addClass("video-active"),
//////////////// Video Cover Play Icons
i(".video-cover").each(function(){var t=i(this);t.find("iframe[src]").length&&(t.find("iframe").attr("data-src",t.find("iframe").attr("src")),t.find("iframe").attr("src",""))}),i(".video-cover .video-play-icon").on("click",function(){var t,e=i(this).closest(".video-cover");if(e.find("video").length){var a=e.find("video").get(0);return e.addClass("reveal-video"),a.play(),!1}if(e.find("iframe").length){var o=e.find("iframe");return o.attr("src",o.attr("data-src")),e.addClass("reveal-video"),!1}})},o.components.documentReady.push(o.video.documentReady),o}(mr,jQuery,window,document),
//////////////// Wizard
mr=function(a,t,e,o){"use strict";return a.wizard=a.wizard||{},a.wizard.documentReady=function(t){t(".wizard").each(function(){var t=jQuery(this),e={};e={headerTag:"h5",bodyTag:"section",transitionEffect:"slideLeft",autoFocus:!0},t.is('[role="application"][id^="steps-uid"]')||(t.steps(jQuery.extend({},e,a.wizard.options)),t.addClass("active"))})},a.components.documentReady.push(a.wizard.documentReady),a}(mr,jQuery,window,document);