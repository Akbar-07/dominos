function black_none() {
  document.querySelector(".for_navbar_black").style="display:none"
  document.querySelector(".css-15xvzt3").style="left:-500px"
}

function openMenu() {
  

  
     document.querySelector(".for_navbar_black").style="display:flex"
     document.querySelector(".css-15xvzt3").style="left:0"
  
  


}


function menuClose() {
  document.querySelector(".for_navbar_black").style="display:none"
  document.querySelector(".css-15xvzt3").style="left:-500px"
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("address")) {
      document.querySelector(".select_address").innerHTML=localStorage.getItem("address")
    }
  })
