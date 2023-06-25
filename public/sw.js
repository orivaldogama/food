if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
          // eslint-disable-next-line no-undef
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, c) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let t = {}
    const f = (e) => a(e, n),
      d = { module: { uri: n }, exports: t, require: f }
    s[n] = Promise.all(i.map((e) => d[e] || f(e))).then((e) => (c(...e), t))
  }
}
// eslint-disable-next-line no-undef
define(['./workbox-50de5c5d'], function (e) {
  'use strict'
  // eslint-disable-next-line no-undef
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/0b308cfb-6425cb7ca273d65f.js',
          revision: '6425cb7ca273d65f'
        },
        {
          url: '/_next/static/chunks/666-feed1c7f8c5689af.js',
          revision: 'feed1c7f8c5689af'
        },
        {
          url: '/_next/static/chunks/framework-cda2f1305c3d9424.js',
          revision: 'cda2f1305c3d9424'
        },
        {
          url: '/_next/static/chunks/main-9dd3a265964fc530.js',
          revision: '9dd3a265964fc530'
        },
        {
          url: '/_next/static/chunks/pages/_app-a104095719b1ba42.js',
          revision: 'a104095719b1ba42'
        },
        {
          url: '/_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: '54de1933a164a1ff'
        },
        {
          url: '/_next/static/chunks/pages/index-2f5ff9b8ec55aa24.js',
          revision: '2f5ff9b8ec55aa24'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-8fa1640cc84ba8fe.js',
          revision: '8fa1640cc84ba8fe'
        },
        {
          url: '/_next/static/css/520f1d5138ab3ccb.css',
          revision: '520f1d5138ab3ccb'
        },
        {
          url: '/_next/static/css/8c9f7564d057ebe2.css',
          revision: '8c9f7564d057ebe2'
        },
        {
          url: '/_next/static/eTCTtePWV2EBLzUuDE5h8/_buildManifest.js',
          revision: '44c779c83e306fc3d4675b4c2a4e1cbd'
        },
        {
          url: '/_next/static/eTCTtePWV2EBLzUuDE5h8/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/media/10939feefdad71be-s.woff2',
          revision: '72b3ae37567ee5efdf2254b657c36ba9'
        },
        {
          url: '/_next/static/media/1b097aa12b72d9f9-s.woff2',
          revision: 'ba40202b1c1dcacbdbb7bcd2042a410f'
        },
        {
          url: '/_next/static/media/20b8b8f6f47c1e10-s.woff2',
          revision: '7def222d1a45cb1cb7d8c3ae675dbdcc'
        },
        {
          url: '/_next/static/media/370d1cc320ec5619-s.woff2',
          revision: 'a6ff41d10fa89e7f8fec937c243d7428'
        },
        {
          url: '/_next/static/media/376dd8dc38524313-s.p.woff2',
          revision: 'af4d371a10271dafeb343f1eace762bc'
        },
        {
          url: '/_next/static/media/3828f203592f7603-s.woff2',
          revision: 'e9fd398a43c9e51f9ee14e757eaf95d9'
        },
        {
          url: '/_next/static/media/51051a7edfeea436-s.woff2',
          revision: 'f1b74fe764967ea8636858297f750d66'
        },
        {
          url: '/_next/static/media/591327bf3b62a611-s.woff2',
          revision: '0ed299a4bb5262e17e2145783b2c18f1'
        },
        {
          url: '/_next/static/media/7777133e901cd5ed-s.p.woff2',
          revision: 'a09f2fccfee35b7247b08a1a266f0328'
        },
        {
          url: '/_next/static/media/839135d04a097cea-s.woff2',
          revision: '79e6e81d255edac7e8627c7e16baccf5'
        },
        {
          url: '/_next/static/media/87c72f23c47212b9-s.woff2',
          revision: '790d0c8dbcd491d29d58f1369c199d40'
        },
        {
          url: '/_next/static/media/8d1a51bb45dd4d14-s.woff2',
          revision: '185244e129c78b5a1e8de9b0319e5f93'
        },
        {
          url: '/_next/static/media/916d3686010a8de2-s.p.woff2',
          revision: '9212f6f9860f9fc6c69b02fedf6db8c3'
        },
        {
          url: '/_next/static/media/9a881e2ac07d406b-s.p.woff2',
          revision: '25b0e113ca7cce3770d542736db26368'
        },
        {
          url: '/_next/static/media/9b44cfc48addbfc9-s.woff2',
          revision: 'b8f12782fb372c92a5c8e3380f926e17'
        },
        {
          url: '/_next/static/media/bd427f25ac24d036-s.p.woff2',
          revision: '5426bf50c8455aab7a3e89d1138eb969'
        },
        {
          url: '/_next/static/media/d869208648ca5469-s.p.woff2',
          revision: '72993dddf88a63e8f226656f7de88e57'
        },
        {
          url: '/_next/static/media/f93b79c1ea023ab6-s.woff2',
          revision: '96b6d54684daa94742f7bfd72a981213'
        },
        {
          url: '/images/burgers/artesanal.jpg',
          revision: 'c902d127dbaad68bfef29b086a5bbb07'
        },
        {
          url: '/images/burgers/combo-artesanal.jpg',
          revision: 'd63d0da03564e58481a2d826879daf14'
        },
        {
          url: '/images/burgers/combo-salada.jpg',
          revision: '688585ee7bed624cf6599daaccf40338'
        },
        {
          url: '/images/burgers/combo-tudo.jpg',
          revision: '706d94026473e3778d07cc7a8a3862c6'
        },
        {
          url: '/images/burgers/duplo-salada.jpg',
          revision: 'fa5095dbc65079552265091edfeadab0'
        },
        {
          url: '/images/burgers/x-burger.jpg',
          revision: 'f7b873f4da47cf8fd435027fed304745'
        },
        {
          url: '/images/burgers/x-egg.jpg',
          revision: '0abe609686d9a6e3efef01f77dc260d6'
        },
        {
          url: '/images/burgers/x-frango.jpg',
          revision: '63532537a905e71d7491d565f470dfba'
        },
        {
          url: '/images/burgers/x-salada.jpg',
          revision: '391e3805c9683dff3e046781ea41ab5b'
        },
        {
          url: '/images/burgers/x-tudo.jpg',
          revision: 'adeb37fd968813a364f29dfa6fad75be'
        },
        {
          url: '/images/icons/icon-192x192.png',
          revision: '4a4c29dcbe2376318ff266476e7afd58'
        },
        {
          url: '/images/icons/icon-384x384.png',
          revision: '670129808815073478b1260f343a343e'
        },
        {
          url: '/images/icons/icon-512x512.png',
          revision: '1102e282c84eb6bfaf624e947e133b0d'
        },
        {
          url: '/images/logo.jpg',
          revision: '2037837018851d5060192f2ac1719ec0'
        },
        { url: '/manifest.json', revision: 'f7c87fc9d721e612d457d96783cc48e9' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              // eslint-disable-next-line no-unused-vars
              request: e,
              response: s,
              // eslint-disable-next-line no-unused-vars
              event: a,
              // eslint-disable-next-line no-unused-vars
              state: i
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
