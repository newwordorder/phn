/*!
 * jQuery - Spectragram by Adrian Quevedo
 * http://adrianquevedo.com/  - http://lab.adrianquevedo.com/ - http://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc. 
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */
// Utility for older browsers
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(i,e,t,a){var n={
//Initialize function
init:function(e,t){var a=this;a.elem=t,a.$elem=i(t),a.api="https://api.instagram.com/v1",a.accessData=i.fn.spectragram.accessData,a.options=i.extend({},i.fn.spectragram.options,e)},
//Users		
//Get the most recent media published by a user.
getRecentMedia:function(e){var t=this,a="/users/"+e+"/media/recent/?"+t.accessData.clientID+"&access_token="+t.accessData.accessToken;t.fetch(a).done(function(e){t.display(e)})},
//Search for a user by name.
getUserFeed:function(){var t=this,e="/users/search?q="+t.options.query+"&count="+t.options.max+"&access_token="+t.accessData.accessToken;t.fetch(e).done(function(e){e.data.length?t.getRecentMedia(e.data[0].id):i.error("Spectagram.js - Error: the username "+t.options.query+" does not exist.")})},
//Media
//Get a list of what media is most popular at the moment
getPopular:function(){var t=this,e="/media/popular?client_id="+t.accessData.clientID+"&access_token="+t.accessData.accessToken;t.fetch(e).done(function(e){t.display(e)})},
//Tags
//Get a list of recently tagged media
getRecentTagged:function(){var t=this,e="/tags/"+t.options.query+"/media/recent?client_id="+t.accessData.clientID+"&access_token="+t.accessData.accessToken;t.fetch(e).done(function(e){e.data.length?t.display(e):i.error("Spectagram.js - Error: the tag "+t.options.query+" does not have results.")})},fetch:function(e){var t,a=this.api+e;return i.ajax({type:"GET",dataType:"jsonp",cache:!1,url:a})},display:function(e){var t=this,a=t.options.size,n,s=t.options.max>=e.data.length?e.data.length:t.options.max;if(0===e.data.length)t.$elem.append(i(t.options.wrapEachWith).append(t.options.notFoundMsg));else for(var c=0;c<s;c++){var o;
// Skip if the caption is empty.
n="small"==a?e.data[c].images.thumbnail.url:"medium"==a?e.data[c].images.low_resolution.url:e.data[c].images.standard_resolution.url,null!=e.data[c].caption&&(
/**
						* 1. First it creates a dummy element <span/>
						* 2. And then puts the caption inside the element created previously.
						* 3. Extracts the html caption (this allows html codes to be included).
						* 4. Lastly, the most important part, create the Title attribute using double quotes
						* to enclose the text. This fixes the bug when the caption retrieved from Instagram 
						* includes single quotes which breaks the Title attribute.
						*/
o='title="'+i("<span/>").text(e.data[c].caption.text).html()+'"'),
// Now concatenate the titleIMG generated.
t.$elem.append(i(t.options.wrapEachWith).append("<a "+o+" target='_blank' href='"+e.data[c].link+"'><img src='"+n+"'></img></a>"))}"function"==typeof t.options.complete&&t.options.complete.call(t)}};jQuery.fn.spectragram=function(t,a){jQuery.fn.spectragram.accessData.clientID?this.each(function(){var e=Object.create(n);if(e.init(a,this),e[t])return e[t](this);i.error("Method "+t+" does not exist on jQuery.spectragram")}):i.error("You must define an accessToken and a clientID on jQuery.spectragram")},
//Plugin Default Options
jQuery.fn.spectragram.options={max:10,query:"coffee",size:"medium",wrapEachWith:"<li></li>",complete:null},
//Instagram Access Data
jQuery.fn.spectragram.accessData={accessToken:null,clientID:null}}(jQuery,window,document);