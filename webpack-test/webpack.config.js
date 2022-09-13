const loaders = require("./loaders.config.js");
const path = require("path");
// var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // mode:'none',
  // entry: "./src/index.js", // is also OK 
  // entry means  where the get the files ;  we could add mutiple entry points if you want to get a complex project
  entry: {
    main: path.resolve(__dirname, "src/app.js"),// 'main' represents  main function  or entry function 
  },
  //output means where to put the files  
  output: {
    path: path.resolve(__dirname, "dist"), // this is the distribution folder//this is finished version of the project // is what's actually going to be loaded into the browser , what the end user will see . 
    filename: "[name][contenthash:5].bundle.js", // every time i compile , i get unique name ; browser is going to cache your file but it's going to cache that specific version ; as long as any module of the project changed, the build content hash will change ,that means  as i compile over and over again , the output dirctory will full of different version of files . that is not what i want .  
    clean: true,//  so , every time i compile(build ) , clear the output directory/ the distribution folder/the dist folder and just leaves me the new files
    assetModuleFilename: '[name][ext]' // use img origin name in html file 
  },

  //once installed， dev-server is auto configurated basically ， 
  //so ,we don't need configure it here if you are with basic demands on webpack-dev-server 
  // this is the settings for dev-server 
  //    利用 gzips 压缩 public/ 目录当中的所有内容并提供一个本地服务(serve)
  devServer: {
    // contentBase:path.resolve(__dirname,'dist'),// where files located 
    open: true, // launch the browser when you start  webpack dev server ( a web server )
    hot: true, // hot reload : hot is the hot module relading //  when watch you  change modules ,the related dependency graphy will auto compile and reload in broswer 
    // watchContentBase:true, // will also watch this folder (dist) if some other process is putting files inside of there  ,this is a  good one to have as well . both options are good to have 
    static: [
      {
        directory: path.join(__dirname, 'public'),
      },
      {
        directory: path.join(__dirname, 'assets'),
        publicPath: "/src"
      }
    ],
    compress: true,
    port: 9000, // port number 
    //we can config dev-server as proxy  to  retransmit the requests from the pages it host , so that there will be no cross-origin-request problem  during develpment time  . 
    proxy: {
      '/api': {
        // target: 'https://other-server.example.com',
        target: 'http://localhost:9000',
        // secure: false, //❓
        // changeOrigin: true, // ❓
        // pathRewrite: {
        //   '/api': '',///api仅作为代理转发的标识 , if you intend to do this 
        //  }
      },
    },

  },

  //source map 
  devtool: process.env.NODE_ENV === "production" ? false : "eval-source-map",



  ...loaders,



  //🔥plugins
  // allow us to do things that loaders can't do  （plugin 可以在webpack 编译的生命周期的各个阶段通过钩子函数去做一些事情，理论上，loader能做的事情，plugin都能做）
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just a Webpack-test Demo",
      // filename:"index.html", // the name of the generated html file ,but default is that.
      template: path.resolve(__filename, "/src/temp/temp.html")
    }),//🔥dynamically create a html file and automatically append script tag in to the html file . 


    // new webpack.optimize.UglifyJsPlugin(),

  ] // it's just a list of javascript functions  ， it's the first one that we are going to call .
  // but this function wants an options object to be passed in . 
  //inside of here ,we can define things like : what's the title of your page  

}

//小结：
// loader 和  plugin  are two extension points of   webpack  ; both they are essentially javascript function 
