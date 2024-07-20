let home = document.getElementById("home");
let gitHub = document.getElementById("git");
let side_nav = document.querySelector(".side_nav-bar");
let closebtn = document.querySelector(".closebtn");

function openNav(){
    side_nav.style.width = "250px";
    closebtn.style.transition = "0.1s"
    closebtn.style.display = "inherit"
    closebtn.style.left = "6rem";
}

function closeNav(){
    side_nav.style.width = "10rem";
    closebtn.style.display = "none"
}