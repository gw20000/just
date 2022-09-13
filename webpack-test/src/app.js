import resetStyle from "./css/reset.css"
// import varcss from "./css/var.less"  //  if you want use classname styles in javascript , you need to cofigure css loader  to  start CSS Module
// import logo from "../public/logo.svg"

import arr from "./arr.js"
import logo from "./assets/logo.png"//  after  being this moudle 's matched loader dealed with (turned into a js module) , the js module exports  path of the origin file (the return value of the loader)

import comp from "./component.js"

import qs from "qs"

console.log(arr);
console.log(resetStyle);
// console.log(varcss);



const BASE_URL = "http://www.backendtest.com";
const _config = {
    method: "GET",
    headers: {
        //any headers you want to add to your request  , note that some header names are forbidden in chrome browser
    },
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    // GET type request can't have a body config
    // body:{

    // },
    credentials: "include",
    cache: 'no-cache',
    // mode:"no-cors"
}


export const API = async (url, params = {}, method = 'GET') => {
    console.log("i do ")
    const config = Object.assign(_config, { method: method.toUpperCase() })
    let queryParams = ''


    if (config.method === 'GET') {

        queryParams = qs.stringify(params)
        console.log("queryParams:", queryParams)
    } else {
        config.body = JSON.stringify(params)
    }

    return fetch(`${BASE_URL}/${url}${config.method === 'GET' ? '?' + queryParams : ''}`, config)
        .then(resp => {

            // console.log(resp.json().then(data => console.log(data)))
            return resp.json()
        })
        .then(data => {
            console.log("success:", data)
            return data
        })
        .catch(err => {
            //    throw err;
            console.log("err:", err)
            return Promise.reject(err)
        });

}

const login = async userInfo => {
    console.log("do login")
    return API('api/login', userInfo, 'post')
}



document.body.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('touchend');
    comp(logo, "desc goes here ", 'normal', 3, 150, 'auto', () => {
        console.log(" touchend  cb excute ");
        login({ name: 'yxj', pwd: '139139' })
    })
});


document.body.addEventListener('click', () => {
    console.log('click');
    comp(null, "desc goes here ", 'success', 3, 150, 'auto', () => {
        console.log("click  cb excute");
        login({ name: 'yxj', pwd: '139139' })

    })
});


