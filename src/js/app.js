import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
    let pokemons;
  async function call(){
  const res=await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
  pokemons=await res.json();
    pokemons=pokemons.results;
         pokemons.forEach(elem=>{
  let li=document.createElement('li');
    li.innerText =elem.name;
    ul.appendChild(li); 
  });

  }
  call();
});
