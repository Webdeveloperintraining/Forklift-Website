const date=new Date()
var year=date.getFullYear()
document.getElementById("year").innerHTML=year;

function hamburguerButtonAnimation(x) {
  x.classList.toggle("change");
};
