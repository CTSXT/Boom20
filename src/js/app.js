import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const ul =document.querySelector("ul");
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
  .then(res=>res.json())
  .then(data=>{
    data.results.forEach(elem=>{
  let li=document.createElement('li');
    li.innerText =elem.name;
    ul.appendChild(li); 
  });
  });
  
});
