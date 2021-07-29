const card=document.querySelectorAll(".card-inner");

for(let item in card){
  card[item].addEventListener("click", function () {
    card[item].classList.toggle('is-flipped');
  }); 
}


