const ESMHelper = require('./esm-helper');
const fixPathCjsWrapper = ESMHelper.requireESM('@sunjw8888/fix-path-cjs-wrapper');

function fixPath() {
    fixPathCjsWrapper.fixPathWrapper();
}

exports.fixPath = fixPath;
