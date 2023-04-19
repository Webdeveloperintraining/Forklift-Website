const date=new Date()
var year=date.getFullYear()
document.getElementById("year").innerHTML=year;


/* Set the width of the side navigation to 250px */
/*function openNav() {
  document.getElementById("side-menu").style.width = "100%";
}*/
/* Set the width of the side navigation to 0 */
/*function closeNav() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}*/

function hamburguerMenu(){
  document.getElementById("side-menu").style.width = "100%";
  document.querySelector('.closebtn').addEventListener("click",()=>{  document.getElementById("side-menu").style.width = "0";});
  document.getElementById("main").style.marginLeft = "0";
  /*x.classList.toggle("change");*/
  //x.addEventListener("click",closeNav());
  //openNav()
  //closeNav()
  /*
  let nav= document.querySelector(".main-nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  */
};

