if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>s(e,r),f={module:{uri:r},exports:a,require:n};i[r]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/04/26/FAT32系统/index.html",revision:"6402fd3540ffb6356f3d37a0ce04269e"},{url:"2022/04/26/NTFS文件系统/index.html",revision:"38d4e985cba4798d14a281ffe600daa6"},{url:"2022/04/27/Linux入门/index.html",revision:"89ae95d7057103c4ad9c8568d6912dc6"},{url:"archives/2022/04/index.html",revision:"69282472a033545acbdbb7706942e5fd"},{url:"archives/2022/index.html",revision:"c83b00e21f35e697744f32b7c6018ac5"},{url:"archives/index.html",revision:"a1c914a8401cdce884a6add61923f731"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"9dde1980589827fa52c01c37df6e7ab1"},{url:"categories/数据恢复/index.html",revision:"0003dfe9caa84bfba7c620d25a6ec2ce"},{url:"categories/系统运维/index.html",revision:"b05c444b69f1e735c9c2332c08e1ce5f"},{url:"css/index.css",revision:"00ddc6fc156bd085dba264ec589d7982"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4e04bfe9ff200b708378972001de6008"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"1f9a1ae067c4c6e863285258e942828a"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index.html",revision:"eb92f71e7d081be2326bd0938f4a5b00"},{url:"tags/Linux/index.html",revision:"aa9d3c9e6350a03ac1e1476761a6d846"},{url:"tags/文件系统/index.html",revision:"b98880c3da710a60876055578418300c"}],{})}));
//# sourceMappingURL=service-worker.js.map
