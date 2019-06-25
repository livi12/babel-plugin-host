/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

/*a*/

var a = 'http://m.stardoctor.com/';
let b = `https://m.stardoctor.com/`;
let c = `httpsss://m.stardoctor.com/`;
let d = `wwwhttp://m.stardoctor.com/`;
let m = `http://m.stardoctor.com/${a}`;


export const findQuestionInit = (params) => newAjax.post('https://newapi/qst/question/findQuestionInit', {
    requestBody: params
}).then((res) => {
    res = res.data;
    const {
        rtn_code,
        data,
    } = res;
    if (rtn_code !== '0') {
        return Promise.reject(res);
    }
    return data;
});

/*a*/
function printTips() {
    tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
}
