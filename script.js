const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["Estudar paar prova", "Dormir cedo"]
 
for (const itemtarefa of tarefas) {
   const tarefaElement = document.createElement("li")
   const tarefaText = document.createTextNode(itemtarefa)
    
   tarefaElement.appendChild(tarefaText)
   listElement.appendChild(tarefaElement)
   
}