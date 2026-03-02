'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2637f8d8b7013d239cd93c6ab3b48b3e",
"version.json": "1f833c6557f213fc86b41364a3e592bb",
"index.html": "c61b4a2d4be4d54c658938c58a25cdf9",
"/": "c61b4a2d4be4d54c658938c58a25cdf9",
"LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"main.dart.js": "16d0857f426dd6b14e04ecdd675c85aa",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eeed598297612a1058ea06ff80eb8b0c",
".git/ORIG_HEAD": "94625f8bdaf7e9ddc95657fa4ca21115",
".git/config": "9f833bcd1ee7792245a0009ae9f57528",
".git/objects/95/47a8c78d9c4013937b8c246edfad992ad2bb61": "910956a332c4d3d2c853973fd4e1b5ff",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/d0b86d53679ba5ca0f98091bec01712119ed57": "9e2b3208f8f03b3c972f7ed694b6e56b",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/3c/9c113fdbc0bcc316d1b2bab80c334219105ab0": "6f0e2b5399c4cf77019ffc1a5805437d",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/c4f4dadfadcecb7e766b8018783498ff937f4f": "7ef9a960da90a073d0f1030c0b2a0e36",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/969f9d707198e17090d8fcd1a3c4c6353cf8c7": "7fa5595fca5862d069469684ce538e07",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7dbe55d3df3fe897fab14cbf1cc38a9b14fbdb": "7edb20acb71550e404de67af7177611c",
".git/objects/bc/ad73fc474b00781e409d627638a336726154f3": "421b3ba01e28aeac880c14a782a7824e",
".git/objects/e2/ec38af737751439fa1fc7d3ffabc004b667e88": "075a5005358bffe65a4f20bdfed30ec4",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/063e16df53c38bcffa39397e584d9f99cdb84e": "38ab49f65544930081274312168ba415",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/d7c1e3ed4e6601b0f70eace099d95a62deacc3": "2e2d34114b00386f9b285f7b7c75dff5",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/3db9ef4b913beccd93391a996237fa1f704315": "07706327e388d4cf1005fcc3d1648797",
".git/objects/4b/859f0dc899122161f4557d52093545d17366bd": "82ca00194249dba97deb6233ca943236",
".git/objects/7d/73000f2183263e7d425b029d503d4ed6179868": "fe251644f1bba55b41b8ff85a6db73ad",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/602f394a43ba2cb06467192c6fdc815d7ee191": "0e78bd58e554529b90648c0ce19787de",
".git/objects/87/4cc77f9235a2e2db5fcb057ed7c1cd764b6a02": "8c534abefa1bda4e336657feb53f1543",
".git/objects/87/fc7b70277aae2aa64334456a309ae6dd6b8e8a": "b925c488e1c2361cc0526f95b309d300",
".git/objects/74/73a931965cebf45cd63f6ad713a0ce22d732d8": "4901d6ef6fd294e64fc31353c1353a11",
".git/objects/74/cd5e12ed8a74d5570ebb7cd6353889ae874d59": "19e9dbc516982f3f2284adca5f68f3a8",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/f6c2b99c509c92603ce63bf780cc639dc89673": "3141e526fc8bb28ea678a3caf31fce6c",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/e08ff6f5df2e1a390995389aa099c2a4f09682": "bde1c6a226dd6c4f2dbd3a7d74269306",
".git/objects/38/fb5417cd528a06bba991e031a8f4ba52081331": "f71020b9bd1045f4c55c303c0b763ada",
".git/objects/6e/dec30185df5a4ae9c41921e19edca6b7cd8b24": "12d2a509630c23d6b4abc77110388285",
".git/objects/65/f3947a82d566e33d2bcd4d57adc43246a72f57": "b319e3a0c1f8e1aa3b4d38bb343f56f7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/30/63ed33f8259199c26e5a3270718e8d4c60f2fc": "36a5bf15c9da346bb5b0cc4e942f6fe9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6c/d96f752efa3532b886a2f91dd639b944b0b713": "f1e19dc37cbe8d9c09cfef54b890fd77",
".git/objects/39/fe3e62d35c235cef5cd96471dccd5a0453651f": "f596f6c26c8099ac915dbd3717aa26f8",
".git/objects/99/6cb9503e6cec0655917f5aa2112a43bc2c95b1": "f930983543cdbc9e94c94e2f82d36fa1",
".git/objects/52/cc4ed32eebcf170c082bc347596e9d34441ece": "f049c565ee53a81ad3cbaa3f15b16556",
".git/objects/97/651c0e70d3a6c58944f867d368851566f700c3": "c320b6578b30db6f1a793593c818eb14",
".git/objects/d3/cefd5bdecf531609cf6a248bb434efe4a77462": "d07924327249ff093d1795b2395657aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/9cdbff6de619f1f2eaa3a69d39054266f1fcff": "9eac6856a027a6a7f5f6c98ed5a627bd",
".git/objects/d2/64deb454ebd65e2039add3fea13db9149fcba8": "338e3b89aba9c99a2a4efe9b1da38855",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/aff7c50bb42a783d796795d684aab6e5a4ad79": "71d1168821330d2738692dde7e9ddce9",
".git/objects/db/fa9eca5171cb65e9a41dcdf262756c3fa3189d": "5f45aaabc1fc5ceb0eac46d372fb4db5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/7e08b6058cc8995c8b1017b97b83758788e32c": "1a37f6e5e34e396c897df4849e2ff02c",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/c5/8becdf0108a011fb7e6aa8b1552a9b5d8aba7d": "3037961cb74f0fdfa77704ac636dbc20",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fced532ceefd427ab80792925207e1cf058c71": "24cc4f26df6e06fc807c6ed8e0357f6e",
".git/objects/77/6186bc18168dac9849da69a77560daf159c15f": "800164fec4cee4ee8d65d8375ff088b2",
".git/objects/70/5fa74d6bbdec3ff4dee559e71d30c25e64c9c7": "83e2b78e6625cb2eccb73d8c8d0ca1f1",
".git/objects/1e/ccb8096ed377bfd6658e42f6f9a4e262740aa0": "d756375d8ec571165899b1ca1d95c3d4",
".git/objects/8c/7a5d7daf7f264e1e5eab2202b0b3b330eeeb2a": "a9ff93148f7e9a15f087f5c6b395fc34",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/82/70e87dd759ffcc4787b5691bee0840a695407c": "82a5eb08e8277690b8074d13a7a5b43c",
".git/objects/40/92d5354306eba5fe72e5f9ac474303ae6755e4": "bb7fd119e6ec7066ecd678f23c782228",
".git/objects/14/f02c163d7e0cc108ba2769955be08fa67c0ab0": "775c6e06c93094d2d9f57ed161c202e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c381608cb5a87f1325ae531e3940873",
".git/logs/refs/heads/backup-main-1772416732": "9929bc2a143a9eb92e46d3a297f2f0a5",
".git/logs/refs/heads/main": "997000dd052d45b3d77198f18599efe0",
".git/logs/refs/remotes/origin/main": "2c893229f9a63e82412c7ec8c357d7e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/backup-main-1772416732": "94625f8bdaf7e9ddc95657fa4ca21115",
".git/refs/heads/main": "5d912da70ec348f036b770151d9e4f55",
".git/refs/remotes/origin/main": "5d912da70ec348f036b770151d9e4f55",
".git/gk/config": "45f136e5c0ab8c99f53869b113e79271",
".git/index": "739d0c612a3a63e4828059f5fd0c2aa9",
".git/COMMIT_EDITMSG": "61ce66ac0b33867715849bd14354e94f",
".git/FETCH_HEAD": "5375b9cbddb0fb7f0dbe2921db4554ae",
"assets/NOTICES": "bc2849beab124f493bce8efc3c62cf0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ed4d3fb2ddd3307b0b82a89d42fc46b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "980b94ef375f4860323822fb0ce6fef1",
"assets/fonts/MaterialIcons-Regular.otf": "2b954fb2c484dc1bb530f478fc26530a",
"assets/assets/logoApps.png": "1e0881269b4dcee543fc040ac725a16b",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
