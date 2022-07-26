// Selecionando  os elementos input, os campos onde ficam os botões filtros,
// o botão de limpar todos os dados e a área onde os inputs serão
// alocados
const task_input = document.querySelector('.task-input input'),
filters = document.querySelectorAll('.filters span'),
clearAll =  document.querySelectorAll('.clear-btn'), 
taskBox = document.querySelector('.task-box');

let editId = false;
let isEditTask = false;
// Getting localStorage to do list
let tasks = JSON.parse(localStorage.getItem('to-do-list'));

// Do a 'for' operation for each element of an array(element in one of the filters)
// Creating the function btn
filters.forEach(function btn(){
// When btn is clicked, the function removeActive()
// This function remove class 'active' from 'span'
    btn.addEventListener('click', function removeActive(){
        document.querySelector('span.active').classList.remove('active');
// Then is add a class 'active' to btn
        btn.classList.add('active');
        showTasks(btn.id)
})
});

// Creating the function showTasks calling 'filter' as argument
function showTasks(filter){
// Creating an empty var
    let liTag = ""
// Creating a conditional with calls the JSON var
    if(tasks){
// For each element on JSON is referenced task and id,
// after that is created a function
        tasks.forEach((task, id) =>{
// var completed  is equal to task.status is exactly equal to 'complete'
// so '?' is used to represents if...else operator
// Basically it works comparing task.status and if is True give  'checked' value
// else the '' value is give
            let completed = task.status == 'completed' ? 'checked' : "";
// If filter is totally equal to task.status or to value 'all'
            if(filter == task.status || filter == "all"){
// Var 'liTag' is equal to itself more what comes next
                liTag += `<li class="task">
// Into parameter 'for' of label is putting the var 'id'
                            <label for="${id}
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="task-menu">
                                    <li onclick='editTAsk(${id}, "${todo.name}")'>
                                        <i class="uil uil-pen"></i>
                                        Edit
                                    </li>
                                    <li
                                </ul>
                            </div>
                </li>
            }
        })
    }

}