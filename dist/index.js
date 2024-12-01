"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(w,u){
var x=require('@stdlib/stats-base-dvarianceyc/dist'),f=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,i){return f(x(e,r,a,i))}u.exports=j
});var d=t(function(z,n){
var m=require('@stdlib/stats-base-dvarianceyc/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,i,p){return l(m(e,r,a,i,p))}n.exports=R
});var y=t(function(A,q){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),E=d();_(c,"ndarray",E);q.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),s,o=b(O(__dirname,"./native.js"));g(o)?s=h:s=o;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
