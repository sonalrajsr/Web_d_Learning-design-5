let varlue = 3;
let navigator = document.querySelectorAll(".navigator");
let strip = document.querySelectorAll(".second-box");

gsap.to(navigator[varlue-1],{
    opacity: 1
})
navigator.forEach(function(val, index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate: (3-(index+1))*10,
            duration: 1
        })
        fedout()
        gsap.to(this, {
            opacity: 1
        })
    })
})

function fedout(){
    gsap.to(".navigator",{
        opacity: 0.3
    })
}
gsap.to("#circle",{
    rotate: 0,
    duration:1
})