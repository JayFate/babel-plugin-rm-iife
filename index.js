
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
          path.parentPath.replaceWith(path.node.body);
        }
      },
    },
  };
};
