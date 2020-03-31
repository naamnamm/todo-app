function addTask(e) {
  let keycode = e.key;
  if (keycode === 'Enter' && e.target.value.length > 1) {
    //grab div
    let maindiv = document.getElementById("main-div");
    //add border
    maindiv.style.border = '1px solid #dedcdc';

    //grab ul
    let ul = document.getElementById("task-list");

    //create li = <li></li>
    let li = document.createElement('li');
    li.className = 'li-styling';
    ul.appendChild(li);
    
    //create checkbox = <input type='checkbox'>
    let checkbox = document.createElement('input'); 
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checked");
    checkbox.className = 'clear-task';
    li.appendChild(checkbox);

    //create label = <label>
    let label = document.createElement('label');
    label.textContent = e.target.value;
    label.className = 'label-styling';
    li.appendChild(label);

    //create button = <button></button>
    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-task';
    li.appendChild(deletebtn);
    deletebtn.appendChild(document.createTextNode('x'))

    //get update list every time new task added
    let tasks = JSON.parse(localStorage.getItem('task-listing')) || [];

    const task = {
      text: e.target.value,
      isCompleted: false
    }

    tasks.push(task);
     
    //save or update tasks to local storage
    localStorage.setItem('task-listing', JSON.stringify(tasks));
    
    // saved is now an object. // saved is just to see what's saved on local storage.
    let saved = JSON.parse(JSON.stringify(tasks));

    //once entered - set input value to ''
    e.target.value = '';
  }
}

let newTask = document.getElementById("input-entered"); 
newTask.addEventListener('keypress', addTask);

const saved = JSON.parse(localStorage.getItem('task-listing'));
saved.forEach(addLiToSavedTask);

function addLiToSavedTask(task) {
  if (saved.length >= 1) {
    //grab maindiv
    let maindiv = document.getElementById("main-div");
    maindiv.style.border = '1px solid #dedcdc';

    //grab ul
    let ul = document.getElementById("task-list");

    //create li = <li>
    let li = document.createElement('li');
    li.className = 'li-styling';
    ul.appendChild(li);
    
    //create checkbox = <input type='checkbox'>
    let checkbox = document.createElement('input'); 
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checked");
    checkbox.className = 'clearTask';
    checkbox.checked = task.isCompleted;
    li.appendChild(checkbox);

    //create label = <label>
    let label = document.createElement('label');
    label.textContent = task.text;
    label.className = 'label-styling';
    li.appendChild(label);
    if (task.isCompleted == true) {
      label.style.textDecoration = 'line-through';
    }

    //create button = <button></button>
    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-task';
    li.appendChild(deletebtn);
    deletebtn.appendChild(document.createTextNode('x'))
  }
}

function deleteTask(e) {
  if (e.target.classList.contains('delete-task')) {
    if (e.target.parentElement.nextSibling === null && e.target.parentElement.previousSibling === null ) {
      e.target.parentElement.remove();
      let maindiv = document.getElementById("main-div");
      maindiv.style.border = 'none';
    } else {
      e.target.parentElement.remove();
    };
    
    //grab saved array
    const saved = JSON.parse(localStorage.getItem('task-listing'));
    
    //remove item from saved array
    let updateTask = saved.filter(item => item.text !== e.target.parentElement.firstElementChild.nextElementSibling.innerHTML); 

    //save update
    localStorage.setItem('task-listing', JSON.stringify(updateTask));
  }
};

let taskList = document.getElementById("task-list");
taskList.addEventListener('click', deleteTask);

function clearTask(e) {
  let checkbox = e.target;
  let labelSibling = e.target.nextSibling;
  if (checkbox.checked) {
    labelSibling.style.textDecoration = 'line-through';
  } else {
    labelSibling.style.textDecoration = 'none';
  };
  
  const saved = JSON.parse(localStorage.getItem('task-listing'));

  for (let i=0; i < saved.length; i++ ) {
      if (saved[i].text === checkbox.nextSibling.textContent) {
        saved[i].isCompleted = checkbox.checked;
      } 
    localStorage.setItem('task-listing', JSON.stringify(saved));
  }
}

taskList.addEventListener('change', clearTask);






















