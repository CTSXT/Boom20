import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  let pokemons;
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
  .then((response) => response.json())
  .then((data) => pokemons=data;);
  pokemons.forEach(elem=>{
  let li=document.createElement('li');
    li.innerHTML =elem;
    ul.appendChild(li); 
  })
  
  
});
