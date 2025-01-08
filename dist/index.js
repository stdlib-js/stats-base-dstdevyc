"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(w,v){
var p=require('@stdlib/stats-base-dvarianceyc/dist').ndarray,x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,i,a,f){return x(p(e,r,i,a,f))}v.exports=j
});var d=t(function(z,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=s();function R(e,r,i,a){return l(e,r,i,a,m(e,a))}n.exports=R
});var y=t(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),E=s();_(q,"ndarray",E);c.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),u,o=b(O(__dirname,"./native.js"));g(o)?u=h:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
