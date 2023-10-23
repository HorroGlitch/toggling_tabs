let choosePrice = document.getElementById("byPrice");
let chooseName = document.getElementById("byName");
let chooseRelevance = document.getElementById("byRelevance");

let priceButton = document.getElementById("buttonPrice");
let nameButton = document.getElementById("buttonName");
let relevanceButton = document.getElementById("buttonRelevance");



priceButton.addEventListener("click", ()=>{
  priceButton.style.backgroundColor="deepskyblue";
  nameButton.style.backgroundColor="white";
  relevanceButton.style.backgroundColor="white";
  choosePrice = true;
});

relevanceButton.addEventListener("click", ()=>{
  relevanceButton.style.backgroundColor="deepskyblue";
  nameButton.style.backgroundColor="white";
  priceButton.style.backgroundColor="white";
});

nameButton.addEventListener("click", ()=>{
  nameButton.style.backgroundColor="deepskyblue";
  priceButton.style.backgroundColor="white";
  relevanceButton.style.backgroundColor="white";
});


