// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-guest-book-js": () => import("./../../../src/pages/GuestBook.js" /* webpackChunkName: "component---src-pages-guest-book-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-life-archive-project-js": () => import("./../../../src/pages/LifeArchiveProject.js" /* webpackChunkName: "component---src-pages-life-archive-project-js" */),
  "component---src-pages-portfolio-2-js": () => import("./../../../src/pages/portfolio_2.js" /* webpackChunkName: "component---src-pages-portfolio-2-js" */),
  "component---src-pages-portfolio-js": () => import("./../../../src/pages/portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

