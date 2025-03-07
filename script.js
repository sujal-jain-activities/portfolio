var flask = 0;
var links = document.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        if(flask == 0){
            this.style.color = "black";
            flask = 1;
        }
        else{
            this.style.color = "rgb(0, 123, 255)";
            flask = 0;
        }
    });
}


var sidebar = document.querySelector(".sidebar")
var i = document.querySelector(".i")
var tl = gsap.timeline()
tl.to(sidebar,{
    right:"0px",
    duration:0.6,
})
tl.from(a,{
    x:"-100px",
    duration:0.6,
    stagger:0.2,
})
tl.pause()

var close = document.getElementById("close");
i.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})



var nav = document.querySelector("nav");
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        nav.style.top = '-100px'; // Adjust this value based on your navbar height
    } else {
        // Scroll up
        nav.style.top = '0';
    }
    lastScrollTop = scrollTop;
});



var a = document.querySelector(".sidebar a")
a.addEventListener("click",()=>{
    tl.reverse()
})