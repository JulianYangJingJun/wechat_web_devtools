'use strict';!function(require,directRequire){function a(){u={}}function b(a,b){delete u[b]}async function c(c){let d=await j(c);s&&s.srcPath==d.srcPath||(a(),s&&s.unWatch(b),s=d,s.watch(b))}function d(a){w.push(a),v&&clearTimeout(v),v=setTimeout(()=>{v=void 0,m.display({command:n.DISPLAY_INFO,type:'COMPILE_JS_TOO_LARGE_IGNORE',data:{files:[...w]}}),w=[]},1e3)}async function e(a,b){let{setting:c}=a,e=s.getFile(b,'utf8'),g=await k(a),h=g.subContext,i=h&&0===b.indexOf(h),j=g.workers,m=j&&0===b.indexOf(j);if(c.es6){let a=f.basename(b);if(512000>e.length)try{let c=await l({taskName:'processJS',config:{projectPath:s.srcPath,file:b,es6:'yes',sourceMaps:'map',sourceFileName:a},dataStr:e,useBackup:!0,maxTimeout:60000});if(c.error)throw c.error;e=c.map?`${c.code}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${new Buffer(c.map).toString('base64')}`:c.code}catch(a){let b=a;return b instanceof Error||(b=new Error(a.message),b.message=a.message),b.message}else d(b)}return e=`define("${b}", function(require, module, exports, process){ ${e}\n});`,i&&(e=`__subContextCode__['${b}'] = function(){${e}}`),m&&(e=`__workersCode__['${b}'] = ${JSON.stringify(e)}`),e}const f=require('path'),g=require('babel-code-frame'),h=require('babel-core'),i=require('./d28a711224425b00101635efe1034c99.js'),j=require('./162bf2ee28b76d3b3d95b685cede4146.js'),k=require('./48679210e49dc5028a8b6642263eba75.js'),l=require('./9beb6be9c4f08fd7406b0e6f964234ea.js'),m=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),n=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),{asDebug:o,subAsDebug:p,workerAsDebug:q,WeixinWorkerTpl:r}=require('./d9ce5316cc172b6017fdd2399a91117a.js');var s,t,u={};let v,w=[];module.exports=async function(b,d,g){if(await c(b),t!==b.setting.es6&&(t=b.setting.es6,a()),0===d.indexOf('__dev__/')){let a=d.replace('__dev__/',''),b=await i.getFile(a);return b}if(0===d.indexOf('__subdev__/')){let a=d.replace('__subdev__/',''),b=await i.getFile(a);return`__subVendorCode__['${a}']= function(){${b}}`}if(0===d.indexOf('__workerdev__/')){let a=d.replace('__workerdev__/',''),b=await i.getFile(a);return`__workerVendorCode__['${a}'] = ${JSON.stringify(b.toString('utf8'))}`}if(0===d.indexOf('__asdebug__/'))return o;if(0===d.indexOf('__subasdebug__/'))return p;if(0===d.indexOf('__workerasdebug__')){if(d.endsWith('workerasdebug.js'))return q;if(d.endsWith('weixinworker.js'))return r}if(!u[d]){let a=f.extname(d);u[d]='.js'===a?e(b,d):s.getFile(d,g)}return u[d]}}(require('lazyload'),require);