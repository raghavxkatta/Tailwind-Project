const navDialog=document.getElementById('nav-dialog')/* this is to toggle navigation bar */
function handleMenu(){
navDialog.classList.toggle('hidden')
}

/* Intital translation values for Left-to-Right(LTR) and... */
const initialTranslateLTR=-48*4
const initialTranslateRTL=36*4

/* An intersection observer is a tool that helps your website detect when an object is visible on yout screen */

/* Intersection Observer for the element */
function setupIntersectionObserver(element, isLTR, speed){/* ismein element jo hai woh element ka kaam karega and dusra parameter jo hai woh btaata hai kis side jaayega left to right ya vice versa and the third is for speed of the animation */


    /* Callback function when the element intersects with the viewport */   
const IntersectionCallback=(entries)=>{
    /* to check if the element is intersecting with the viewport */
    const isIntersecting=entries[0].isIntersecting
   if(isIntersecting){
    document.addEventListener('scroll',()=>scrollHandler(element, isLTR, speed))
   }
   else{
    document.removeEventListener('scroll',scrollHandler(element, isLTR, speed))
   }
}    
/* create a new intersection observer */
const intersectionObserver= new IntersectionObserver(IntersectionCallback)
/* Observe the element */
intersectionObserver.observe(element)
}
function scrollHandler(element,isLTR,speed){
    const translateX= (window.innerHeight-element.getBoundingClientRect().top)*speed/* window.innerHeight hume bta rha hai ki upar se leke kitna neeeche tk aa chuka hai aur boundingclientrect top se square tk kitna distance hai */
    /* toh jab dono ko subtract karoge toh aapko pta chal jaayega ki aapne kitna scroll kiya hai */
let totalTranslate=0
if(isLTR){
totalTranslate= translateX+initialTranslateLTR
}else{
totalTranslate=-(translateX+initialTranslateRTL)
}
    element.style.transform=`translateX(${totalTranslate}px)`
}
/* getting individual line elements */
const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')
const line4=document.getElementById('line4')

/* set up intersection observers for each line */
setupIntersectionObserver(line1,true,0.15)
setupIntersectionObserver(line2,false,0.15)
setupIntersectionObserver(line3,true,0.15)
setupIntersectionObserver(line4,true,0.8)