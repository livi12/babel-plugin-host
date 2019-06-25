"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findQuestionInit = void 0;

/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

/*a*/
var a = 'http://m.stardoctor.com/';
var b = "http://m.stardoctor.com/";
var c = "httpsss://m.stardoctor.com/";
var d = "wwwhttp://m.stardoctor.com/";
var m = "http://m.stardoctor.com/".concat(a);

var findQuestionInit = function findQuestionInit(params) {
  return newAjax.post("http://newapi/qst/question/findQuestionInit", {
    requestBody: params
  }).then(function (res) {
    res = res.data;
    var _res = res,
        rtn_code = _res.rtn_code,
        data = _res.data;

    if (rtn_code !== '0') {
      return Promise.reject(res);
    }

    return data;
  });
};
/*a*/


exports.findQuestionInit = findQuestionInit;

function printTips() {
  tips.forEach(function (tip, i) {
    return console.log("Tip ".concat(i, ":") + tip);
  });
}