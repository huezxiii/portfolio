let scrollTop = (element) => {
    let elementClass = element.dataset.animate;
    
        let triggerBottom = window.innerHeight / 5 * 4;
        console.log(element.getBoundingClientRect())
        if(element.getBoundingClientRect().top < triggerBottom){
            element.classList.add(elementClass, "active");
        }else{
            element.classList.remove(elementClass, "active");
        }
}

let scroll_animate = document.querySelectorAll(".scroll_animate");

if(scroll_animate.length > 0){
    let animateCount = scroll_animate.length;
    for(let i = 0;i < animateCount;i++){
        scrollTop(scroll_animate[i])
    }
}

window.addEventListener("scroll", () => {
    if(scroll_animate.length > 0){
        let animateCount = scroll_animate.length;
        for(let i = 0;i < animateCount;i++){
            scrollTop(scroll_animate[i])
        }
    }
})