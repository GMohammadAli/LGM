window.onscroll = function() {
    scrollFunction()
};
var count = 0;

function scrollFunction() {
    if (window.innerWidth > 700) {
        var scroll_current = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll_current > count) {
            document.querySelector(".header").style.left = "-100%";
        } else {

            document.querySelector(".header").style.left = "0px";

        }

       count= scroll_current;
    }
}



let button = document.querySelector(".play-button");
let icon = document.querySelector("#circle");
var video = document.querySelector("#video");
video.style.opacity = "0.4";


let autoplay = () => {
    video.play();
    video.style.opacity = "1";
    icon.className = "fas fa-pause";
    setTimeout(() => {
        button.style.opacity = "0";
    }, 1000);
}


icon.addEventListener("click", function() {
    autoplay();
})
video.addEventListener("click", function() {


    if (icon.className == "fas fa-play") {

        autoplay();
    } else {
        video.pause();
        video.style.opacity = "0.4";
        icon.className = "fas fa-play";
        button.style.opacity = "1";
    }


});



window.addEventListener("DOMContentLoaded", function(e) {
    const orderbutton = document.querySelectorAll("img[data-order]");
    orderbutton.forEach(function(button) {
        button.addEventListener("click", function(e) {
            const button = e.currentTarget;

            const number = {
                id: button.getAttribute("data-order")
            };
            const img = document.querySelector(".in-zippy");
            img.setAttribute("src", `images/${number.id}.jpg`);


        });
    });

});