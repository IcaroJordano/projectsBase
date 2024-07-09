const input=document.querySelector('.input')
// Elemento Input
const div=document.querySelector('.lista')
// div de exibir os elementos da lista
let lista=JSON.parse(localStorage.getItem("LISTA"))
let itens=``
lista.map((e)=>{itens+=`<li>${e}</li>`;})
div.innerHTML=itens
input.addEventListener("keydown", function (event) {
  // adiciona ao input o evento de precionar teclas
  if (event.key === "Enter") {
    itens=``
    lista=JSON.parse(localStorage.getItem("LISTA"))
    console.log(1)
    // verifica se a tecla precionada e "Enter"
    // texto contendo tags para renderizar
    // busca o objeto LISTA e converte de string pra objeto
    if (!lista.includes(`${input.value}`)){
      console.log(lista)
      lista.push(input.value)
      lista.map((e)=>{itens+=`<li>${e}</li>`})
      div.innerHTML=itens
      localStorage.setItem("LISTA",JSON.stringify(lista))
    }
      }
});
function limpar(){
  localStorage.clear()
  localStorage.setItem("LISTA",JSON.stringify([]))
  let itens=``
  div.innerHTML=itens
  input.focus()
  input.cl
}