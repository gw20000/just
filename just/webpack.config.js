const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    // entry means  where the get the files ;  we could add mutiple entry points if you want to get a complex project
    entry: {
        just: path.resolve(__dirname, "src/index.js")
    },
    //output means where to put the files  
    output: {
        path: path.resolve(__dirname, "dist"), // this is the distribution folder//this is finished version of the project // is what's actually going to be loaded into the browser , what the end user will see . 
        filename: "[name].[contenthash:5].bundle.js", // every time i compile , i get unique name ; browser is going to cache your file but it's going to cache that specific version ; as long as any module of the project changed, the build content hash will change ,that means  as i compile over and over again , the output dirctory will full of different version of files . that is not what i want .  
        clean: true,//  so , every time i compile(build ) , clear the output directory/ the distribution folder/the dist folder and just leaves me the new files
        assetModuleFilename: '[name][ext]' // use img origin name in html file 
    },
    devServer: {
        open: true,
        hot: true,
    },

    //🔥plugins
    // allow us to do things that loaders can't do  （plugin 可以在webpack 编译的生命周期的各个阶段通过钩子函数去做一些事情，理论上，loader能做的事情，plugin都能做）
    plugins: [
        new HtmlWebpackPlugin({
            title: "just",
            // filename:"index.html", // the name of the generated html file ,but default is that.
            template: path.resolve(__dirname, "public/temp.html")
        }),//🔥dynamically create a html file and automatically append script tag in to the html file . 


        // new webpack.optimize.UglifyJsPlugin(),

    ] // it's just a list of javascript functions  ， it's the first one that we are going to call .
    // but this function wants an options object to be passed in . 
    //inside of here ,we can define things like : what's the title of your page  

}