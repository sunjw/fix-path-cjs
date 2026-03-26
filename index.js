const ReqESM = require('@sunjw8888/require-esm');
const fixPathCjsWrapper = ReqESM.requireESM('@sunjw8888/fix-path-cjs-wrapper');

function fixPath() {
    fixPathCjsWrapper.fixPathWrapper();
}

exports.fixPath = fixPath;
