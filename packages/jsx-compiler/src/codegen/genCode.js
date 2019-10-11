const generate = require('@babel/generator').default;

const generateOptions = {
  sourceMaps: true
};

/**
 * Generate code and map from babel ast.
 * @param ast
 */
function genCode(ast, options) {
  return generate(ast, Object.assign({}, generateOptions, options));
}

module.exports = genCode;
