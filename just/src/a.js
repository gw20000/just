
import b from "./b.js"
// const b = require("./b.js")
console.log(b)
console.log("module a excutes");
console.log(module);
exports.a = "export content2 from module a "
// export const fna = () => { console.log('fn from module a ') }
// export default "export content3 from moudle a"
module.exports = "export content from moudle a"

