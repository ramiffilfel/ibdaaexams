
export default {
  basePath: '/ibdaaexams',
  supportedLocales: {
  "en": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
