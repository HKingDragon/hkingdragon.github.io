if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>s(e,d),f={module:{uri:d},exports:a,require:n};i[d]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/04/26/FAT32系统/index.html",revision:"c4a0a8d6da7dbde3e6fc2d704206852e"},{url:"2022/04/26/NTFS文件系统/index.html",revision:"b9a67c04f7e33f7b43a8bb89475b908c"},{url:"archives/2022/04/index.html",revision:"c67ab58e2a0a21a1b2365af92338b12d"},{url:"archives/2022/index.html",revision:"f0ac36926ee25f9b328f6fc1720fbd40"},{url:"archives/index.html",revision:"500abe94cae92a2762ad53231f112b99"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"9b03350a318c4e363d8f5c9931e803d6"},{url:"categories/数据恢复/index.html",revision:"bcfe930ed151a17207380c0dcec84f19"},{url:"css/index.css",revision:"00ddc6fc156bd085dba264ec589d7982"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ddb7bae33b1e665e2a32c5b5866f9a7b"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"1f9a1ae067c4c6e863285258e942828a"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index.html",revision:"2545c7a3539963edec163940b805cd39"},{url:"tags/文件系统/index.html",revision:"e2512e3c4ff514e10fe33e6ad9fafaac"}],{})}));
//# sourceMappingURL=service-worker.js.map
