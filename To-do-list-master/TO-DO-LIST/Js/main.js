//Criação das varíaveis que irão selecionar no HTML os elementos que serão trabalhados
const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

//Varíavel tasks que irá analisar a string que será coletada na chave 'to_do_list' ou será um array vazio
const tasks = JSON.parse(localStorage.getItem('to_do_list')) || []

//criação da função que irá mostrar a tarefa
function showTasks(){
//Basicamente irá zerar todos os conteúdos do html 'ul', neste momento.
listElement.innerHTML=""

//Para cada item em tarefas
        for(item of tasks){
//cria uma 'li'
//o document.createTextNode() vai criar um elemento e retorná-lo para que você 
//o utilize da forma que quiser.
        const itemList = document.createElement('li')
        const batata = document.createElement('div')
        batata.setAttribute('class', 'list_batata')



        const itemText = document.createTextNode(item)
//Insere uma class e o seu nome na 'li' criada
        itemList.setAttribute('class', 'list_item')
//cria um elemento âncora, quer serve para criar uma hiperligação
        const linkElement = document.createElement('a')
        const linkElement2 = document.createElement('input')
        linkElement2.setAttribute("type", "checkbox");


//insere uma class e a nomeia com o setAttribute
        linkElement.setAttribute('class', 'material-icons')
        linkElement2.setAttribute('class', "material-symbols-outlined")

//Mesmo do exemplo acima
        const linkText = document.createTextNode('delete')
        const linkText2 = document.createTextNode('check')

//Irá colocar o 'linkText' dentro do linkElement 
        linkElement.appendChild(linkText)
        linkElement2.appendChild(linkText2)


//Serve para dizer qual o índice da string sinalizada, no caso 'item'
        const pos = tasks.indexOf(item)

        linkElement.setAttribute('onclick', `removeTask(${pos})`)
        
        linkElement2.setAttribute('onclick', `check()`)


//Irá colocar o 'itemText' dentro do itemList 
        itemList.appendChild(linkElement2)

        itemList.appendChild(batata)
        batata.appendChild(itemText)


//Irá colocar o 'linkElement' dentro do itemList 
        itemList.appendChild(linkElement)

//Irá colocar o 'itemList' dentro do listElement 
        listElement.appendChild(itemList)

}
}



//Chama a função
showTasks()

//Criação da função para adicionar tarefas
function addTask(){
                
//A variável task  pega o valor do elemento input
        const task = inputElement.value
//coloca(empurra)  o valor obtido anteriormente na variavel com JSON.parse ou array do início
        tasks.push(task)
//Limpa o input após a inserção, pois o input já foi empurrado.
        inputElement.value=''
//Chama as funções showTasks() e saveLocalstorage()


        showTasks()
        saveLocalStorage()


}

//Utilizado um setAttribute para que quando um botão for clicado, a função 'AddTask()' será chamada
buttonElement.setAttribute('onclick', 'addTask()')


//cria a constante que pega o input
const inputEle = document.getElementById('task');
inputEle.addEventListener('keyup', function addTask(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
// codigo da tecla enter
//A variável task  pega o valor do elemento input
        const task = inputElement.value
//coloca(empurra)  o valor obtido anteriormente na variavel com JSON.parse ou array do início
        tasks.push(task)
//Limpa o input após a inserção, pois o input já foi empurrado.
        inputElement.value=''
//Chama as funções showTasks() e saveLocalstorage()
        showTasks()
        saveLocalStorage()
                
}
});


//Criação da função removeTask
function removeTask(pos){
//remove o item da posição de índice em que foi clicado com o metodo splice
        tasks.splice(pos, 1)
        showTasks()
        saveLocalStorage()
}


function check(pos){
        console.log('batata')
        document.querySelector(".list_batata").classList.add('active');

//$('#checkbox').prop('checked', true); 


}

//Função que salva o input no localStorage ao tornar em string
function saveLocalStorage(){
        localStorage.setItem('to_do_list',JSON.stringify(tasks))
}