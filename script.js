// function 1
// target element ul -
// triggered action: a)input + b) enter
//- action:create li with 3 elements (1)(2)(3) - to be stored in LocalStorage [setItem()]
//      (1) input for check box - when user complete task
//          - when you check the box - cross out (2) [getItem(sibling(2) > cross out)]
//      (2) label/span for task entered. ex. cooking
//      (3) button for deleting to-do task
//          - once hit - remove (1)(2)(3) [Is it removeItem(1, 2, 3 siblings) or clear()] -- Is it display: none?
//-------------------------------------------

const log = console.log

function addTask(event) {
  var keycode = event.key;
  if (keycode === 'Enter' && event.target.value.length > 1) {
    //grab div
    var maindiv = document.getElementById("maindiv");
    //add border
    maindiv.style.border = '1px solid black';

    //grab ul
    var ul = document.getElementById("taskList");

    //create li = <li></li>
    var li = document.createElement('li');
    li.className = 'liStyling';
    li.id = 'liListing';
    ul.appendChild(li);
    
    //create checkbox = <input type='checkbox'>
    var checkbox = document.createElement('input'); 
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checked");
    checkbox.className = 'clearTask';
    li.appendChild(checkbox);

    //create label = <label>
    var label = document.createElement('label');
    label.textContent = event.target.value;
    label.className = 'labelStyling';
    li.appendChild(label);

    //create button = <button></button>
    var deletebtn = document.createElement('button');
    deletebtn.id = 'deleteTask';
    deletebtn.className = 'rightAlign deleteTask';
    li.appendChild(deletebtn);
    deletebtn.appendChild(document.createTextNode('x'))

    //get update list every time new task added
    let tasks = JSON.parse(localStorage.getItem('taskListing')) || [];

    tasks.push(event.target.value);
     
    //save or update tasks to local storage
    localStorage.setItem('taskListing', JSON.stringify(tasks));
    
    // saved is now an object. // saved is just to see what's saved on local storage.
    let saved = JSON.parse(JSON.stringify(tasks));

    //once entered - set input value to 0
    event.target.value = '';
  }
}

//grab input
var newTask = document.getElementById("inputEntered"); 
//add event listener
newTask.addEventListener('keypress', addTask);

//-----------------------------------------------

const saved = JSON.parse(localStorage.getItem('taskListing'));
log(saved);

saved.forEach(addLiToSavedObj);

function addLiToSavedObj(task) {
  if (saved.length >= 1) {
    //grab maindiv
    var maindiv = document.getElementById("maindiv");
    //add border
    maindiv.style.border = '1px solid black';

    //grab ul
    var ul = document.getElementById("taskList");

    //create li = <li></li>
    var li = document.createElement('li');
    li.className = 'liStyling';
    li.id = 'liListing';
    ul.appendChild(li);
    
    //create checkbox = <input type='checkbox'>
    var checkbox = document.createElement('input'); 
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checked");
    checkbox.className = 'clearTask';
    li.appendChild(checkbox);

    //create label = <label>
    var label = document.createElement('label');
    label.textContent = task;
    label.className = 'labelStyling';
    li.appendChild(label);

    //create button = <button></button>
    var deletebtn = document.createElement('button');
    deletebtn.id = 'deleteTask';
    deletebtn.className = 'rightAlign deleteTask';
    li.appendChild(deletebtn);
    deletebtn.appendChild(document.createTextNode('x'))

    console.log(task);
  }
}

//------------------------------------------

function deleteTask(e) {
  if (e.target.classList.contains('deleteTask')) {
    if (e.target.parentElement.nextSibling === null && e.target.parentElement.previousSibling === null ) {
      e.target.parentElement.remove();
      var maindiv = document.getElementById("maindiv");
      maindiv.style.border = 'none';
    } else {
      e.target.parentElement.remove();
    };
    
    //grab saved array
    const saved = JSON.parse(localStorage.getItem('taskListing'));
    
    //remove item from saved array
    let updateTask = saved.filter(item => item !== e.target.parentElement.firstElementChild.nextElementSibling.innerHTML); 

    //save update
    localStorage.setItem('taskListing', JSON.stringify(updateTask));
  }
};

// add event listener to remove action
var taskList = document.getElementById("taskList");
taskList.addEventListener('click', deleteTask);

//---------------------------------------------------

function clearTask(e) {
  var checkbox = e.target;
  var labelSibling = e.target.nextSibling;
  // log(e.target);
  // log(e.target.nextSibling);
  if (checkbox.checked) {
    labelSibling.style.textDecoration = 'line-through';
  } else {
    labelSibling.style.textDecoration = 'none';
  };
};

taskList.addEventListener('change', clearTask);

//---------------------------------------------------

//to figure out 
//with delete task fx why can't I target button?
// function deleteTask(e) {
//   log(e.parentElement);
//   log(e.target);
// }

// var deletebtn = document.getElementById("deleteTask");

// deletebtn.addEventListener('click', deleteTask);

//---------------------------------------------------


//resource
//https://dzone.com/articles/back-basics-%E2%80%93-using-keyboard
//https://www.youtube.com/watch?v=5-koI06rmcA







