const input=document.querySelector('.input')
const div=document.querySelector('.lista')


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let itens=``
    let listaAuxiliar=[]
    // console.log(typeof(localStorage.getItem("LISTA")))
    let lista=JSON.parse(localStorage.getItem("LISTA"))
    listaAuxiliar=[...lista]
    lista.map((e)=>{itens+=`<li>${e}</li>`;})
    // .map((e)=>{itens+=`<li>${e}</li>`})
    if (!itens.includes(`${input.value}`)){
        itens+=`<li>${input.value}</li>`;
        listaAuxiliar.push(input.value)}
    div.innerHTML=itens
    localStorage.setItem("LISTA",JSON.stringify(listaAuxiliar))
    }
});