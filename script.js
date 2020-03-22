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

  if (keycode === 'Enter') {
    //grab div
    var maindiv = document.getElementById("maindiv");
    //add border
    maindiv.style.border = '1px solid black';

    //grab ul
    var ul = document.getElementById("taskList");

    //create li = <li></li>
    var li = document.createElement('li');
    li.className = 'liStyling';
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


    log(deletebtn.parentElement);
    log(deletebtn.parentElement.parentElement);
    event.target.value = '';
  } 
}

//grab input
var newTask = document.getElementById("inputEntered"); 

newTask.addEventListener('keypress', addTask);
//------------------------------------------

//why i can't target button? - do i need to store btn? // how to store data to local storage?
// function deleteTask(e) {
//   log(e.parentElement);
//   log(e.target);
// }

// var deletebtn = document.getElementById("deleteTask");

// deletebtn.addEventListener('click', deleteTask);

//---------------------------------------------------

function deleteTask(e) {
  if (e.target.classList.contains('deleteTask')) {
    if (e.target.parentElement.nextSibling === null) {
      e.target.parentElement.remove();
      var maindiv = document.getElementById("maindiv");
      maindiv.style.border = 'none';
    } else {
      e.target.parentElement.remove();
    };
  }
};

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


//resource
//https://dzone.com/articles/back-basics-%E2%80%93-using-keyboard
//https://www.youtube.com/watch?v=5-koI06rmcA







