/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b02ec872e0d2a85230ce26198ba2207b"
  },
  {
    "url": "assets/css/0.styles.5a853aa8.css",
    "revision": "aef3cf59f129cb5cdf3110e1c339945c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e23aff19.js",
    "revision": "2f46594d0b6e819860f4cc268aa6f40b"
  },
  {
    "url": "assets/js/11.0489815e.js",
    "revision": "d896d3de774df08ffbe23c77bbd8ae9f"
  },
  {
    "url": "assets/js/12.46606f7f.js",
    "revision": "28ae294d3b364f3acd01532e396cdfc9"
  },
  {
    "url": "assets/js/13.4bd90d6b.js",
    "revision": "2979ffb48de6fa91138e2a0438ed9264"
  },
  {
    "url": "assets/js/14.f98154e7.js",
    "revision": "2dd1340702d4c32c3c95ec60565087a6"
  },
  {
    "url": "assets/js/15.947fcc15.js",
    "revision": "e64a5872da71317195abe7e6cd9c8e02"
  },
  {
    "url": "assets/js/16.53b3bfdc.js",
    "revision": "098f2827b69e4e826ef50b07f6e26016"
  },
  {
    "url": "assets/js/17.17b89328.js",
    "revision": "f49d397c6f29c31db2c7eca68005bff1"
  },
  {
    "url": "assets/js/18.5c86bb13.js",
    "revision": "e50bed3c5bb4d4136d835ac132e9959e"
  },
  {
    "url": "assets/js/19.33c3a101.js",
    "revision": "9625dc7728370f17250b3bce363fcc0a"
  },
  {
    "url": "assets/js/20.3e36926a.js",
    "revision": "d437246b41ba168f2c0a1ae46ab14768"
  },
  {
    "url": "assets/js/21.bdc3a198.js",
    "revision": "a9a1a1c9a255395c881f04249f544df3"
  },
  {
    "url": "assets/js/22.0abc52ff.js",
    "revision": "bdb02f27a6936164aec2d81993aac3ec"
  },
  {
    "url": "assets/js/23.7bf02098.js",
    "revision": "8697f264a3e354262c8ff87acd7dbad6"
  },
  {
    "url": "assets/js/24.f1abf837.js",
    "revision": "96f6605f07a5a6412ea774946828bf67"
  },
  {
    "url": "assets/js/25.e6931b9d.js",
    "revision": "735306dba8b41942d7b2ad202bc36b9f"
  },
  {
    "url": "assets/js/26.f09de90c.js",
    "revision": "68a8a2b963a874f6febb865784c7c710"
  },
  {
    "url": "assets/js/27.42060161.js",
    "revision": "a915676be37962bd5c4e69267a5bc642"
  },
  {
    "url": "assets/js/28.717990b1.js",
    "revision": "82a96d61804b5145704e2e5df5e0ca7a"
  },
  {
    "url": "assets/js/29.4ed9896e.js",
    "revision": "d27a4f517f5e0a8a05dd8953292c6ea1"
  },
  {
    "url": "assets/js/3.33ae8c26.js",
    "revision": "f6ab82ec5859c1bed79496a914b79619"
  },
  {
    "url": "assets/js/30.0673736a.js",
    "revision": "581f3ecd466da0365c300b0305ee6c70"
  },
  {
    "url": "assets/js/31.011c8229.js",
    "revision": "03afba750a487c66bf772b924c2a7ba9"
  },
  {
    "url": "assets/js/32.8eaa82f3.js",
    "revision": "8fdee60df1a582eb666eddec909657cc"
  },
  {
    "url": "assets/js/33.64d2f641.js",
    "revision": "317988e7a2e03292ff825de3bd68e630"
  },
  {
    "url": "assets/js/4.9eca588a.js",
    "revision": "1e7f5216285364999cbf574111b960ac"
  },
  {
    "url": "assets/js/5.10e8bef1.js",
    "revision": "0caee9232b40e9c311f6e2e8718f87a9"
  },
  {
    "url": "assets/js/6.c661fe35.js",
    "revision": "0bdf1e9256328e8fcda1ef906705eae5"
  },
  {
    "url": "assets/js/7.16c1c7a5.js",
    "revision": "dd99eaf98f2a0db9e4def71983786c9c"
  },
  {
    "url": "assets/js/8.8357bd9f.js",
    "revision": "d750ee2ef98ebe257f645dde4eca76d3"
  },
  {
    "url": "assets/js/9.fb2acc1e.js",
    "revision": "02d7c80aa92e74058b3ab5702a5b1d2a"
  },
  {
    "url": "assets/js/app.eabe0b71.js",
    "revision": "d85dd9ddaf0b199bcb96e97af5d394e0"
  },
  {
    "url": "assets/js/vendors~docsearch.fa3c3b39.js",
    "revision": "ae785aa16f247f1f2a82e0fa5b9eb668"
  },
  {
    "url": "blog/index.html",
    "revision": "2863b8073575926e0d2e156e53bcb0b4"
  },
  {
    "url": "img/general-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/general-16-16.png",
    "revision": "c4b622f7b32d2636af981175c9e157fe"
  },
  {
    "url": "img/general-256-256.png",
    "revision": "ba88591a057b1b9e67a848abb63e3596"
  },
  {
    "url": "img/general-32-32.png",
    "revision": "83f778451654a93d77279332ff9ed4c8"
  },
  {
    "url": "img/general-48-48.png",
    "revision": "f2889f73712dba6250c3ebd243ecc577"
  },
  {
    "url": "img/general-64-64.png",
    "revision": "d22fa82a5bfa00194a640424cc09b160"
  },
  {
    "url": "img/general-90-90.png",
    "revision": "e9ffbe0d10b7488544b10752d0058ab2"
  },
  {
    "url": "img/marketplace-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/marketplace-512-512.png",
    "revision": "50529c682ce62b8443e5a67fdea2caf3"
  },
  {
    "url": "index.html",
    "revision": "47e6833ea747aeadce37074873ef1573"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "4e23e40bcf5721e3271a8f7cf598f779"
  },
  {
    "url": "pages/1b12ed/index.html",
    "revision": "d91eafbe778b96be11211eafc160e76c"
  },
  {
    "url": "pages/22640f/index.html",
    "revision": "16ae4c27457a5cfc4d78c52920af7e08"
  },
  {
    "url": "pages/2b8e22/index.html",
    "revision": "5c1e928784f3f53f6f949c9a39943d7b"
  },
  {
    "url": "pages/2f674a/index.html",
    "revision": "2b7b60e4d6b501489d3c4baca4fef995"
  },
  {
    "url": "pages/33d574/index.html",
    "revision": "6421e9ac86b54a802a585952148192f7"
  },
  {
    "url": "pages/3e7666/index.html",
    "revision": "a23cd350c0df90c82529eacd4e578fd7"
  },
  {
    "url": "pages/514a88/index.html",
    "revision": "1c5ba18fe2d14e2e400ece8f89e831d6"
  },
  {
    "url": "pages/52d5c3/index.html",
    "revision": "8f27fe3769031052427a4b9ec6f3bb0c"
  },
  {
    "url": "pages/5dfce5/index.html",
    "revision": "4cf8e3f11cc5c434879f640f44bc2284"
  },
  {
    "url": "pages/793dcb/index.html",
    "revision": "d0c073b25de5d84e9a940f9d458185fc"
  },
  {
    "url": "pages/9cc27d/index.html",
    "revision": "ee1c3efe66012e97c3d61408b05ded43"
  },
  {
    "url": "pages/a20ce8/index.html",
    "revision": "6ef298a41d6bd48e697fc6dd890749e9"
  },
  {
    "url": "pages/a2f161/index.html",
    "revision": "f74779f603155695af0f17400ab972d3"
  },
  {
    "url": "pages/c791f0/index.html",
    "revision": "cb1d12c2b83f11dcd042f5758f33ce45"
  },
  {
    "url": "pages/db78e2/index.html",
    "revision": "6be38fec0349e89750ef5e9e5ed2410f"
  },
  {
    "url": "pages/dd027d/index.html",
    "revision": "72392a2e4c8715eaf524d09788a49fad"
  },
  {
    "url": "pages/e42d5f/index.html",
    "revision": "48b5342e8f022f1d60ac502308e01485"
  },
  {
    "url": "pages/ed7f92/index.html",
    "revision": "8b9705b032c0a77374f4f17bab3a092c"
  },
  {
    "url": "pages/f14bdb/index.html",
    "revision": "0835128dc45be831fe0ccaffcc6510f1"
  },
  {
    "url": "pages/zhet/index.html",
    "revision": "1eebb9bc16269dc3fe644c9bdc3a5d46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
