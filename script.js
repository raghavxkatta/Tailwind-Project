const navDialog=document.getElementById('nav-dialog')/* this is to toggle navigation bar */
function handleMenu(){
navDialog.classList.toggle('hidden')
}

/* Intital translation values for Left-to-Right(LTR) and... */
const initialTranslateLTR=-48*4
const initialTranslateRTL=36*4

/* Intersection Observer for the element */
function setupIntersectionObserver(element, isLTR, speed){/* ismein element jo hai woh element ka kaam karega and dusra parameter jo hai woh btaata hai kis side jaayega left to right ya vice versa and the third is for speed of the animation */


    /* Callback function when the element intersects with the viewport */
const IntersectionCallback=(entries)=>{
    /* to check if the element is intersecting with the viewport */
    const isIntersecting=entries[0].isIntersecting
    console.log(element,isIntersecting)/* Log the element and intersection status */
}    
const intersectionObserver= new IntersectionObserver(IntersectionCallback)
intersectionObserver.observe(element)
}
const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')


setupIntersectionObserver(line1,true,0.15)
setupIntersectionObserver(line2,false,0.15)
setupIntersectionObserver(line3,true,0.15)