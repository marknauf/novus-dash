"use strict";var precacheConfig=[["/novus-dash/index.html","5f6eb467620f7282653d930c3132c75f"],["/novus-dash/static/css/main.39eaf2e4.css","39eaf2e4c94b520bdd40d46238d82db9"],["/novus-dash/static/js/1.8647ec08.chunk.js","8320443e9a12d3d934df625c106b7fa7"],["/novus-dash/static/js/2.222184b8.chunk.js","7154732970ed8c48559a906c669b2548"],["/novus-dash/static/js/4.9402d001.chunk.js","570417f329845337c6a0bf5e088c45a6"],["/novus-dash/static/js/5.17429692.chunk.js","213065b774aeef0491112f4454286d7b"],["/novus-dash/static/js/6.c77a984c.chunk.js","29b801894f4fd9db3f425e198c0ffc74"],["/novus-dash/static/js/main.5bf429be.js","c6948044b831ba0d711a005e2c5cf3b9"],["/novus-dash/static/media/Linearicons-Free.03e91f12.woff2","03e91f122aa5fd425abbe23c85546eb0"],["/novus-dash/static/media/Linearicons-Free.2f3e9f80.ttf","2f3e9f80fff7d699dd3de6904d7d1647"],["/novus-dash/static/media/Linearicons-Free.65060723.woff","65060723fe964f85afa0a82d0bb78cf9"],["/novus-dash/static/media/Linearicons-Free.71ad32ce.svg","71ad32ce1ab07350277dfcf1f7a503a5"],["/novus-dash/static/media/Linearicons-Free.b9b7f23c.eot","b9b7f23cb61b1f503e1249b63d980448"],["/novus-dash/static/media/Pe-icon-7-stroke.01798bc1.ttf","01798bc13e33afc36a52f2826638d386"],["/novus-dash/static/media/Pe-icon-7-stroke.71394c0c.eot","71394c0c7ad6c1e7d5c77e8ac292fba5"],["/novus-dash/static/media/Pe-icon-7-stroke.b38ef310.woff","b38ef310874bdd008ac14ef3db939032"],["/novus-dash/static/media/Pe-icon-7-stroke.c45f7de0.svg","c45f7de008ab976a8e817e3c0e5095ca"],["/novus-dash/static/media/abstract1.74469765.jpg","744697657fa614add7943a9b16f1487e"],["/novus-dash/static/media/abstract1.e108c06f.jpg","e108c06fd5e5a60817cf7f585e88f184"],["/novus-dash/static/media/abstract10.15dbcbc9.jpg","15dbcbc92ed3e5cc0d486d98449e3a6b"],["/novus-dash/static/media/abstract2.277c3c2e.jpg","277c3c2e889ea72e77ce563f124eb584"],["/novus-dash/static/media/abstract3.2462ce56.jpg","2462ce56f689f50ec23f1842b43698c4"],["/novus-dash/static/media/abstract4.b8ef214f.jpg","b8ef214f5c715371c2e575483804f12a"],["/novus-dash/static/media/abstract5.47b02d2c.jpg","47b02d2c4d1e42d0cac93c0d323b0e94"],["/novus-dash/static/media/abstract6.329bba4a.jpg","329bba4a1c4113c3707f59f3f76e635b"],["/novus-dash/static/media/abstract7.dba374f1.jpg","dba374f193cb519062dff7fc65babb25"],["/novus-dash/static/media/abstract8.6651e71f.jpg","6651e71fa9915bfc01adbe667eb2bb97"],["/novus-dash/static/media/abstract9.fbf8d4ee.jpg","fbf8d4ee4f2fe5c4e31c88afb65c9682"],["/novus-dash/static/media/city1.ebc5562d.jpg","ebc5562d1cffc3bdb49fb28166eccda7"],["/novus-dash/static/media/city2.b44931fe.jpg","b44931fe45e3a9107a41ace44080992b"],["/novus-dash/static/media/city3.d50a28d0.jpg","d50a28d0e346721067a1b73796472d92"],["/novus-dash/static/media/city4.126ace39.jpg","126ace3903af0c90ec8531126054987a"],["/novus-dash/static/media/city5.77f23573.jpg","77f235733dc4450e2ff44e3136b89492"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),c=createCacheKey(s,hashParamName,t,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var s=new Request(t,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/novus-dash/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});