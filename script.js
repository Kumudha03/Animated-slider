var slider = document.getElementById('slider');
var currentSlideIndex = 0;
var radioBtns=document.getElementsByClassName('radio');

slider.addEventListener("touchstart", function (e) {
    var touchStartX = e.touches[0].clientX;
    slider.dataset.touchStartX = touchStartX;
})

slider.addEventListener("touchend", (e) => {
    var touchendX = e.changedTouches[0].clientX;
    var distanceMoved = touchendX - slider.dataset.touchStartX;
    if (Math.abs(distanceMoved) > 5) {
        var swipeDirection = distanceMoved < 0 ? 'right' : 'left';
         swipeDirection === 'left' ? currentSlideIndex-- : currentSlideIndex++;
         if(currentSlideIndex===-1){
             currentSlideIndex=3;
         }
         if(currentSlideIndex===4){
            currentSlideIndex=0;
         }
         updateSlides();
        }
    
})

function updateSlides(){
    radioBtns[currentSlideIndex].checked=true;
    delete slider.dataset.touchStartX;
}