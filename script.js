const input=document.querySelector('.input')
const div=document.querySelector('.lista')
const lista=[1,2,3,4,5,6,7]
let itens=``
lista.map((e)=>{itens+=`<li>${e}</li>`})
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (!itens.includes(`${input.value}`)){        itens+=`<li>${input.value}</li>`}

    div.innerHTML=itens
    }
});
