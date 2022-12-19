// FunctionDeclaration
// path.parent.type = 'Program'

// ArrowFunctionExpression
// path.parent.type = 'CallExpression'

var mm = `(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

(() => {
  __webpack_require__.r = exports => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, {
              value: "Module"
          });
      }
      Object.defineProperty(exports, "__esModule", {
          value: true
      });
  };
})();


(() => {
  var app_style = __webpack_require__("../../packages/jax-dsl-xvm/lib/loaders/extract-css-loader.js!../../packages/jax-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../packages/jax-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/scenario/effect/sharepic/index.ux?uxType=page");
  var app_script = __webpack_require__("../../packages/jax-dsl-xvm/lib/loaders/script-loader.js!../../packages/jax-dsl-xvm/lib/loaders/module-loader.js!../../packages/jax-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/scenario/effect/sharepic/index.ux?uxType=page&&name=index&deviceType=watch-round");
  app_define("@app-component/index", [], (function($app_require$, $app_exports$, app_module) {
      if (app_script.default) {
          app_module.exports = app_script.default;
      }
      app_module.exports.style = app_style;
  }));
  app_bootstrap("@app-component/index");
})();`;

module.exports = function (babel) {
  const { types: t } = babel;
  return {
    visitor: {
      ArrowFunctionExpression(path, state) {
        if (
          path.parent &&
          path.parent.type === "CallExpression" &&
          path.parentPath &&
          path.parentPath.parent.type === "ExpressionStatement" &&
          path.parentPath.parentPath &&
          path.parentPath.parentPath.parent.type === "Program"
        ) {
          // console.log(mm.slice(path.node.start, path.node.end + 1));
          path.parentPath.replaceWith(path.node.body);
        }
      },
    },
  };
};
