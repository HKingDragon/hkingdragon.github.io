if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>s(e,d),f={module:{uri:d},exports:a,require:n};i[d]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/04/26/FAT32系统/index.html",revision:"a86f753236dfefbe653aa246102d7e0e"},{url:"2022/04/26/NTFS文件系统/index.html",revision:"614171bfa3cb3eb2fded05edab16d272"},{url:"2022/04/27/Linux入门/index.html",revision:"c49752ac0ed8448ae4ebaaed7d064ae4"},{url:"archives/2022/04/index.html",revision:"c077fdd2011008d3ce5e8cc8d30b02ef"},{url:"archives/2022/index.html",revision:"8ae315f8027c3a7d8e504a5614ce24f8"},{url:"archives/index.html",revision:"7e02a8f93208c900339883ae15027ae8"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"8ebe29b9ef80e9a222bf3d2441cceec9"},{url:"categories/数据恢复/index.html",revision:"a3c7f6250b68fc985bc567f335547f11"},{url:"categories/系统运维/index.html",revision:"34153c55ac295f322e70b8e8d8210997"},{url:"css/index.css",revision:"411e1025989dbd171e6f12be7334f515"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"38b5a4e5935903fcf25fe99027112a6d"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"1f9a1ae067c4c6e863285258e942828a"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index.html",revision:"0bbbf862de3ab9309fd5c781e538477d"},{url:"tags/Linux/index.html",revision:"aafa90d9ce3311264cf4ab1bd02ea6c6"},{url:"tags/文件系统/index.html",revision:"6f72b92709b6bc4bb639312e14a13e00"}],{})}));
//# sourceMappingURL=service-worker.js.map
