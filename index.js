const inputs = document.getElementById('taskInput');
var list = document.getElementById('lists');
var myForm = document.getElementById("form-content");

/** create fucntion for submit actions */
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = inputs.value;
    if(!task){
        alert("Please check input");
        return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);

    list.appendChild(task_el);
    /* add and customize input field */
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly')
    task_content_el.appendChild(task_input_el);
    
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    /* To add delete action */
    

    task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'X';

    /* add delete action for listed taskes */

    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_actions_el);
    list.appendChild(task_el);
    inputs.value = "";

    task_delete_el.addEventListener('click', () =>{
        list.removeChild(task_el);
    })

    
})