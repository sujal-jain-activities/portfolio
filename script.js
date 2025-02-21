var flask = 0
var a = document.getElementsByClassName("link").addEventListener("click", function() {
    if(flask == 0){
        a.style.color = "black"
        flask = 1
    }
    else{
        a.style.color = " rgb(0, 123, 255)"
        flask = 0
    }
})
