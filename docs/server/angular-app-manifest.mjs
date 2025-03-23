
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ibdaaexams/',
  locale: "en",
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ibdaaexams/login",
    "route": "/ibdaaexams"
  },
  {
    "renderMode": 2,
    "route": "/ibdaaexams/login"
  },
  {
    "renderMode": 2,
    "route": "/ibdaaexams/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23909, hash: '6a8ecbf5fc67bb5fc4253f05c769740954f620ae2d66d6c16328960233afaf1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17374, hash: '1b9bb5e07191b264d6b6c23a130f623b039d0c7fad385f6db967a70bc233911f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31999, hash: '4757b2cc2e0d70cbc8e2425ab39ad214fd2d762d409f9a122474dc75ae8e3c02', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29365, hash: 'add6061ef88ceecacde6606af2c41b3fb1a2bc40919ee01ce3afd5b5cfdce128', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-44Z3I3OM.css': {size: 7088, hash: '7TRgKqVc51o', text: () => import('./assets-chunks/styles-44Z3I3OM_css.mjs').then(m => m.default)}
  },
};
