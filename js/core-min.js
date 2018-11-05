/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./core/DOMEval"],function(t,n,e,o,c,i,u,r,a,l,s,f,p,h){"use strict";function y(t){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var n=!!t&&"length"in t&&t.length,r=v.type(t);return"function"!==r&&!v.isWindow(t)&&("array"===r||0===n||"number"==typeof n&&0<n&&n-1 in t)}var g="3.2.1",
// Define a local copy of jQuery
v=function(t,n){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new v.fn.init(t,n)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
m=/^-ms-/,d=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
j=function(t,n){return n.toUpperCase()};return v.fn=v.prototype={
// The current version of jQuery being used
jquery:g,constructor:v,
// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){
// Return all the elements in a clean array
return null==t?o.call(this):t<0?this[t+this.length]:this[t];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){
// Build a new jQuery matched element set
var n=v.merge(this.constructor(),t);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return n.prevObject=this,n},
// Execute a callback for every element in the matched set.
each:function(t){return v.each(this,t)},map:function(r){return this.pushStack(v.map(this,function(t,n){return r.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var n=this.length,r=+t+(t<0?n:0);return this.pushStack(0<=r&&r<n?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:i,sort:t.sort,splice:t.splice},v.extend=v.fn.extend=function(t){var n,r,e,i,o,u,c=t||{},a=1,l=arguments.length,s=!1;
// Handle a deep copy situation
for("boolean"==typeof c&&(s=c,
// Skip the boolean and the target
c=arguments[a]||{},a++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof c||v.isFunction(c)||(c={}),
// Extend jQuery itself if only one argument is passed
a===l&&(c=this,a--);a<l;a++)
// Only deal with non-null/undefined values
if(null!=(n=arguments[a]))
// Extend the base object
for(r in n)e=c[r],
// Prevent never-ending loop
c!==(i=n[r])&&(
// Recurse if we're merging plain objects or arrays
s&&i&&(v.isPlainObject(i)||(o=Array.isArray(i)))?(u=o?(o=!1,e&&Array.isArray(e)?e:[]):e&&v.isPlainObject(e)?e:{},
// Never move original objects, clone them
c[r]=v.extend(s,u,i)):void 0!==i&&(c[r]=i));
// Return the modified object
return c},v.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(g+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===v.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var n=v.type(t);return("number"===n||"string"===n)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},isPlainObject:function(t){var n,r;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!t||"[object Object]"!==a.call(t))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(n=e(t))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
r=l.call(n,"constructor")&&n.constructor)&&s.call(r)===f)},isEmptyObject:function(t){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var n;for(n in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?r[a.call(t)]||"object":typeof t;
// Support: Android <=2.3 only (functionish RegExp)
},
// Evaluates a script in a global context
globalEval:function(t){h(t)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(t){return t.replace(m,"ms-").replace(d,j)},each:function(t,n){var r,e=0;if(y(t))for(r=t.length;e<r&&!1!==n.call(t[e],e,t[e]);e++);else for(e in t)if(!1===n.call(t[e],e,t[e]))break;return t},
// Support: Android <=4.0 only
trim:function(t){return null==t?"":(t+"").replace(b,"")},
// results is for internal usage only
makeArray:function(t,n){var r=n||[];return null!=t&&(y(Object(t))?v.merge(r,"string"==typeof t?[t]:t):i.call(r,t)),r},inArray:function(t,n,r){return null==n?-1:u.call(n,t,r)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,n){for(var r=+n.length,e=0,i=t.length;e<r;e++)t[i++]=n[e];return t.length=i,t},grep:function(t,n,r){
// Go through the array, only saving the items
// that pass the validator function
for(var e,i=[],o=0,u=t.length,c=!r;o<u;o++)(e=!n(t[o],o))!==c&&i.push(t[o]);return i},
// arg is for internal usage only
map:function(t,n,r){var e,i,o=0,u=[];
// Go through the array, translating each of the items to their new values
if(y(t))for(e=t.length;o<e;o++)null!=(i=n(t[o],o,r))&&u.push(i);
// Go through every key on the object,
else for(o in t)null!=(i=n(t[o],o,r))&&u.push(i);
// Flatten any nested arrays
return c.apply([],u)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(t,n){var r,e,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof n&&(r=t[n],n=t,t=r),v.isFunction(t))
// Simulated bind
return e=o.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return t.apply(n||this,e.concat(o.call(arguments)))}).guid=t.guid=t.guid||v.guid++,i},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:p}),"function"==typeof Symbol&&(v.fn[Symbol.iterator]=t[Symbol.iterator]),
// Populate the class2type map
v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,n){r["[object "+n+"]"]=n.toLowerCase()}),v});