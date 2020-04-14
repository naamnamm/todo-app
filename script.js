function addTask(e) {
  let keycode = e.key;
  if (keycode === 'Enter' && e.target.value.length > 1) {
    const task = {
      text: e.target.value,
      isCompleted: false
    }

    renderTask(task);

    let tasks = JSON.parse(localStorage.getItem('task-listing')) || [];
    
    tasks.push(task);
     
    localStorage.setItem('task-listing', JSON.stringify(tasks));

    e.target.value = '';
  }
}

let newTask = document.getElementById("input-entered"); 
newTask.addEventListener('keypress', addTask);


const saved = JSON.parse(localStorage.getItem('task-listing'));
saved.forEach(addLiToSavedTask);

function addLiToSavedTask(task) {
  if (saved.length >= 1) 
    renderTask(task);
}


function renderTask(task) {
  let maindiv = document.getElementById("main-div");
  maindiv.style.border = '1px solid #dedcdc';

  let ul = document.getElementById("task-list");

  let li = document.createElement('li');
  li.className = 'li-styling';
  ul.appendChild(li);
    
  let checkbox = document.createElement('input'); 
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checked");
  checkbox.id = Math.floor(Math.random() * new Date().getTime());
  checkbox.className = 'clear-task';
  checkbox.checked = task.isCompleted;
  li.appendChild(checkbox);
  checkbox.addEventListener('change', clearTask);

  let label = document.createElement('label');
  label.textContent = task.text;
  label.className = 'label-styling';
  label.setAttribute('for', checkbox.id)
  li.appendChild(label);
  if (task.isCompleted == true) {
    label.style.textDecoration = 'line-through';
  }

  let deletebtn = document.createElement('button');
  deletebtn.className = 'delete-task';
  li.appendChild(deletebtn);
  deletebtn.appendChild(document.createTextNode('x'))
  deletebtn.addEventListener('click', deleteTask)
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
    
    const saved = JSON.parse(localStorage.getItem('task-listing'));
    
    let updateTask = saved.filter(item => item.text !== e.target.parentElement.firstElementChild.nextElementSibling.innerHTML); 

    localStorage.setItem('task-listing', JSON.stringify(updateTask));
  }
};


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
























