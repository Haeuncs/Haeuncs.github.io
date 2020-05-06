const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/src/pages/index.js"))),
  "component---src-pages-portfolio-2-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/src/pages/portfolio_2.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/src/pages/portfolio.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/leehaeun/test/Haeuncs.github.io/src/templates/blog-post.js")))
}

