if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>s(e,r),f={module:{uri:r},exports:a,require:n};i[r]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/04/26/FAT32系统/index.html",revision:"c4a0a8d6da7dbde3e6fc2d704206852e"},{url:"2022/04/26/NTFS文件系统/index.html",revision:"b9a67c04f7e33f7b43a8bb89475b908c"},{url:"archives/2022/04/index.html",revision:"f3b92f0b04e401fbc1051a3281f9a59f"},{url:"archives/2022/index.html",revision:"e930a4d5761259867348654fe4f43ce9"},{url:"archives/index.html",revision:"0f1dc2d88f75b699a9cb0afc5a2414a2"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"201ac36209be5ab0b8b5a9182576d7f2"},{url:"categories/数据恢复/index.html",revision:"041d18e034d339ab38bc0957e3857c4a"},{url:"css/index.css",revision:"00ddc6fc156bd085dba264ec589d7982"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"504e55fdda17db00285dbf47c6254423"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"1f9a1ae067c4c6e863285258e942828a"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index.html",revision:"07da4f2c3ba62ac2ad54024acd201f75"},{url:"tags/文件系统/index.html",revision:"a0d3bf318ce2caded0684689d592d055"}],{})}));
//# sourceMappingURL=service-worker.js.map
