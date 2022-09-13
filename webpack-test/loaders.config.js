module.exports = {

  //🔥loaders : to deal with the modules(files) once loaded 
  // except js files ,  webpack doesn't konw how to handle these types of file ,such as a image file ,a svg file, a css file and so on . so we do need to add loaders .  
  // webpack by default understands json and javascript but it doesn't konw what an image file is ; nor does it konw what an svg file or html file or css file or saas file or csv file .  all these other types of file  , it  doesn't know how to handle them . that what the loaders do 
  // in symple , loader is used to turn to non-javascript files into modules  (🔥loader 是 用来处理源码字符串的，变成一个路径导出)
  //and then they can be imported into javascript file 
  //and then they will be copied into our distribution folder
  // we use loaders to bring in others things like we are going to add some css      in just a moment 
  // in simple ,  loaders  turn  every file into  a  javascrpit module . 

  module: {
    rules: [
      //  {
      //    test: /\.svg$/,
      //    use:"svg-inline-loader"
      //  },

      //css
      //    {
      //       test:/\.css$/i,//i  represents a match mode  that means don't distinguish lowercase from  uppercase of the char of the string  . 

      //       use:["style-loader","css-loader"] // css loader looks for the file and  truns it into a module and give it over to javascript( combine module id and classname  to convert classname  to global  unique classname build with hash to avoid classname pollution ) ,style loader will take the thing that's been imported by javascript file and inject it into our html file (将css loader 导出的结果 做为style标签的innerHTML 插入到head标签中)
      //       //during the js excuting , it will inject style tags into head tag . so  you won't see these style tags in static html file . 
      //    },





      //css module
      {
        test: /\.css$/i,//i  represents a match mode  that means don't distinguish lowercase from  uppercase of the thar of the string  . 
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },

          {
            loader: "css-loader",
            options: {
              modules: true,

            }
          }
        ] // css loader looks for the file and  truns it into a module and give it over to javascript( combine module id and classname  to convert classname  to global  unique classname build with hash to avoid classname pollution ) ,style loader will take the thing that's been imported by javascript file and inject it into our html file (将css loader 导出的结果 做为style标签的innerHTML 插入到head标签中)
        //during the js excuting , it will inject style tags into head tag . so  you won't see these style tags in static html file . 
      },


      //images
      {
        test: /\.(png|svg|gif|webg|ico|jpg|jpeg)$/,
        type: "asset/resource", // asset resource loader is natively built in webpack version 5 

        // 项目中超过10KB文件单独提取存放
        // 小于10KB文件转换为Data URLs嵌入代码中
        // use: {
        //     loader: 'url-loader',
        //     options: {
        //         limit: 10 * 1024 // 10KB
        //     }
        // }
      },

      //js for bable (对js代码做降级处理 because old version bs don't support  modern features of js  like ES6+ )
      //make js in our project more  backward compatible than it was before because we're using babel . 
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ['@babel/preset-env',],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      },


      //less 
      //    {
      //       test:/\.less$/i,

      //       use:[ "style-loader", "css-loader", "less-loader"]  
      //    },




      //  less module
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,

            }
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
}
