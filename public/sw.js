if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/103-0966d086ace036b0.js",revision:"0966d086ace036b0"},{url:"/_next/static/chunks/1bfc9850-4b0c282882de9060.js",revision:"4b0c282882de9060"},{url:"/_next/static/chunks/75fc9c18-4275c2966b1879ef.js",revision:"4275c2966b1879ef"},{url:"/_next/static/chunks/787-647f3318b4ac5af3.js",revision:"647f3318b4ac5af3"},{url:"/_next/static/chunks/863-0b5dfabf87212b3f.js",revision:"0b5dfabf87212b3f"},{url:"/_next/static/chunks/886-fe80a3ae40782cf3.js",revision:"fe80a3ae40782cf3"},{url:"/_next/static/chunks/935-f47d20a7a3f6a004.js",revision:"f47d20a7a3f6a004"},{url:"/_next/static/chunks/framework-9b5d6ec4444c80fa.js",revision:"9b5d6ec4444c80fa"},{url:"/_next/static/chunks/main-f328696cba0f1db2.js",revision:"f328696cba0f1db2"},{url:"/_next/static/chunks/pages/AboutUs-806e59874a156be6.js",revision:"806e59874a156be6"},{url:"/_next/static/chunks/pages/BDnews-fcf52d5f725a2251.js",revision:"fcf52d5f725a2251"},{url:"/_next/static/chunks/pages/BDnews/BanglaCat/%5BBanglacat%5D-2b85570614f6cb41.js",revision:"2b85570614f6cb41"},{url:"/_next/static/chunks/pages/BDnews/BanglaNews-e1fb34858a6f39c6.js",revision:"e1fb34858a6f39c6"},{url:"/_next/static/chunks/pages/BDnews/BanglaNews/%5BDivision%5D-fadaaf1a2a681507.js",revision:"fadaaf1a2a681507"},{url:"/_next/static/chunks/pages/BDnews/English-540c6b1fec534ae2.js",revision:"540c6b1fec534ae2"},{url:"/_next/static/chunks/pages/BDnews/International-c7bfc6b3dad213fc.js",revision:"c7bfc6b3dad213fc"},{url:"/_next/static/chunks/pages/BDnews/National/news-26e0ee21386ed2a0.js",revision:"26e0ee21386ed2a0"},{url:"/_next/static/chunks/pages/ContactUs-d24d7fabb7f13e06.js",revision:"d24d7fabb7f13e06"},{url:"/_next/static/chunks/pages/Disclaimer-27ff82ecf7f14431.js",revision:"27ff82ecf7f14431"},{url:"/_next/static/chunks/pages/EnPaper/%5Bslug%5D-65bf1bca3caffbca.js",revision:"65bf1bca3caffbca"},{url:"/_next/static/chunks/pages/Newspapers-68ebd2775467a470.js",revision:"68ebd2775467a470"},{url:"/_next/static/chunks/pages/Newspapers/%5Bslug%5D-88e5704868263f6c.js",revision:"88e5704868263f6c"},{url:"/_next/static/chunks/pages/PrivacyPolicy-efb144b3c0983480.js",revision:"efb144b3c0983480"},{url:"/_next/static/chunks/pages/Read-0ea33fd2555e25a9.js",revision:"0ea33fd2555e25a9"},{url:"/_next/static/chunks/pages/Search-b4abe8b72151e006.js",revision:"b4abe8b72151e006"},{url:"/_next/static/chunks/pages/Somenews/%5Bsome%5D-bfc55494a8cbb23a.js",revision:"bfc55494a8cbb23a"},{url:"/_next/static/chunks/pages/Summarize-6ce287d5bbedf110.js",revision:"6ce287d5bbedf110"},{url:"/_next/static/chunks/pages/Terms-32473c686010dc37.js",revision:"32473c686010dc37"},{url:"/_next/static/chunks/pages/TopNews/%5BCategory%5D-ebd50ce48d61fa81.js",revision:"ebd50ce48d61fa81"},{url:"/_next/static/chunks/pages/_app-7da7d071a655dfd2.js",revision:"7da7d071a655dfd2"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/index-822c8e30c1892738.js",revision:"822c8e30c1892738"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-246c5233b889db27.js",revision:"246c5233b889db27"},{url:"/_next/static/css/85d4465df853c78c.css",revision:"85d4465df853c78c"},{url:"/_next/static/mDMZQjiZ5NwuRUEvBW1_N/_buildManifest.js",revision:"d7da90e2b68e113ea19ad44c97997045"},{url:"/_next/static/mDMZQjiZ5NwuRUEvBW1_N/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/icon-192x192.png",revision:"6bb949fb2205b7fc93a71472504d6a7a"},{url:"/icon-256x256.png",revision:"945bf94afbd90429dcb0ab0a3e8bf952"},{url:"/icon-384x384.png",revision:"7d5326a71f4a06a1fe9c9b8fe78dbd68"},{url:"/icon-512x512.png",revision:"e3ce58d194b4e04d937f17077492c327"},{url:"/logo.png",revision:"81695b2c2cc5eedf50376effc0bfc3a7"},{url:"/manifest.json",revision:"3a41033c7121d3b253ab528e8aadaaa5"},{url:"/robots.txt",revision:"f1b38fcc505b15196ba180c9f0ec9a75"},{url:"/sitemap-0.xml",revision:"3df14c4f20d29ea90f0bb95ec738f3e9"},{url:"/sitemap.xml",revision:"4f7aa9bcb667261bb481b555d0dbfa53"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
