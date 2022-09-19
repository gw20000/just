// import  a from "./a.js"
const a = require("./a.js")
function J() {
    console.log(a);
}

J()

try {
    window.J = J;
} catch (e) {
    console.warn(e)
}
