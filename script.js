const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  if(window.scrollY > 200){
    header.classList.add("small");
  }else{
    header.classList.remove("small");
  }
});
const nav = document.getElementById("navigation");
function toggleNav(){
  if(nav.classList.contains("fa-bars")){
    nav.classList.remove("fa-bars");
    nav.classList.add("fa-times");
    navmenu.style.right="0";
  }else if(nav.classList.contains("fa-times")){
    nav.classList.remove("fa-times");
    nav.classList.add("fa-bars");
    navmenu.style.right="-97px";
  }else{
    console.log("Cross and Menu Icon Eror")
  }
}