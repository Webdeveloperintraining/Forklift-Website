const date=new Date()
var year=date.getFullYear()
document.getElementById("year").innerHTML=year;

function hamburguerMenu(){
  document.getElementById("side-menu").style.width = "100%";
  disableScroll()
  document.querySelector('.closebtn').addEventListener("click",()=>{  document.getElementById("side-menu").style.width = "0"; enableScroll();});
};

function disableScroll() {
  // Get the current page scroll position
  scrollTop =
  window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}