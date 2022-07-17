const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
const sidebar=document.querySelector('.sidebar')
const mainSlide=document.querySelector('.main-slide')
const allSlidesLength=mainSlide.querySelectorAll('div').length
let activeSlideIndex=0
const containerHeight=window.innerHeight

sidebar.style.top=`-${(allSlidesLength-1)*100}vh`

upButton.addEventListener('click',()=>{
    nextSlide('up')
})
document.addEventListener('keydown',(event)=>{
    if (event.key==='w'||event.key==='ArrowUp') {
       nextSlide('up')
    }
    else if(event.key==='s'||event.key==='ArrowDown'){
        nextSlide('down')
    }
  //чтобы посмотреть какую клавишу нажал console.log(event.key)
})
downButton.addEventListener('click',()=>{
    nextSlide('down')
})
downButton.addEventListener("touchstart",()=>{
    nextSlide('up')
})

upButton.addEventListener("touchstart",()=>{
    nextSlide('down')
})


function nextSlide(direction) {
    if (direction==='up') {
        activeSlideIndex++
        if(activeSlideIndex===allSlidesLength){
            activeSlideIndex=0
        }
    }
else if (direction ==='down') {
        activeSlideIndex--
        if(activeSlideIndex<0){
            activeSlideIndex=allSlidesLength-1
        };
    };
   ;



    mainSlide.style.transform=`translateY(-${activeSlideIndex*containerHeight}px)`
    sidebar.style.transform=`translateY(+${activeSlideIndex*containerHeight}px)`
}



