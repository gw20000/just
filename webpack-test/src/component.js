import  styles from "./css/pop.less"
function popImg(src,content,type='normal',duration=4,width=50,height,cb) {

   const  pop = document.createElement('div');

   if(src){
      const img = document.createElement('img');
      img.src = src;
      pop.appendChild(img);
   }
  if(content) {
      const desc = document.createElement('div');
      desc.innerHTML= content;
      pop.appendChild(desc);
   }
  

   pop.style.width = width + "px";
  if(height) pop.style.height = height + "px";
   pop.classList.add(styles[type]);
   pop.classList.add(`${styles.pop}`);
   pop.style.animation = ` ${styles.pop_animation} ${duration}s  ease-in-out forwards`;

   document.body.appendChild(pop);

   // pop.clientHeight;
  
   let timer = setTimeout(() => {
      pop.remove();
      clearTimeout(timer);
       timer = null;
       if (typeof cb ==='function') cb();
   }, duration*1000,{once:true});
   return pop;
}

export default  popImg