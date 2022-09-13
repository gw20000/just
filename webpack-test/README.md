 # 1 webpack 
 
 0, why does webpack generate ?  

  developing big build , you must develop in  modules ,  there will many many moudles (this are files ) many  modules(this is files ) embed in one html files ,  so  during loading this html file there will be many files to load , this means many ajax to send ,  this will generate issues  :  one thing is that will waste  Internet resouce   . Another thing is we must control (or think about / solve  )  moudules being loaded squence  for they have dependency relationships , well , with defer javascript ,this problem is soloved  . 
 
 1, what  webpack is ?  

 it's a frondend  packaging  tool  and  works  in nodejs environment .  

 2 , what things  webpack  is to do ? 

  webpack is to bundle modules together  into bundle.js .  in simple ,  webpack is used to inject one file to another .   help build a web project. 

   vary simple to say ,  webpack is a moudle bundler . 

   var var simple to say ,   package modules together 
   var var var simple to say ,  put moudles together 


# 2  webpack serve 
    npm run serve (webpack serve)   :   sort of  compile everything  and hold it in memory and serves it from memory 

# 3 how to start up  CSS moudle ?  wait to get solution and then pratice implimentation 

config css-loader to a object   and  config the module prop  of the opitons prop of the object  to be true. 



