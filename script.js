const log = console.log

function addTask(e) {
  var keycode = e.key;
  if (keycode === 'Enter' && e.target.value.length > 1) {
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
    label.textContent = e.target.value;
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

    const task = {
      text: e.target.value,
      isCompleted: false
    }

    tasks.push(task);
     
    //save or update tasks to local storage
    localStorage.setItem('taskListing', JSON.stringify(tasks));
    
    // saved is now an object. // saved is just to see what's saved on local storage.
    let saved = JSON.parse(JSON.stringify(tasks));

    //once entered - set input value to ''
    e.target.value = '';
  }
}

//grab input
var newTask = document.getElementById("inputEntered"); 
//add event listener
newTask.addEventListener('keypress', addTask);

//-----------------------------------------------

const saved = JSON.parse(localStorage.getItem('taskListing'));
log(saved);

saved.forEach(addLiToSavedTask);

//task is now an object
function addLiToSavedTask(task) {
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
    //everytime the above checkbox is fired - look up and change iscompleted to True

    //create label = <label>
    var label = document.createElement('label');

    label.textContent = task.text;
    label.className = 'labelStyling';
    li.appendChild(label);
    //task is now an object
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
    let updateTask = saved.filter(item => item.text !== e.target.parentElement.firstElementChild.nextElementSibling.innerHTML); 

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
  
  const saved = JSON.parse(localStorage.getItem('taskListing'));

  for (let i=0; i < saved.length; i++ ) {
    if (checkbox.checked) {
      if (saved[i].text === checkbox.nextSibling.textContent) {
        saved[i].isCompleted = true;
      } 
    } else {
      saved[i].isCompleted = false;
    }
    
    localStorage.setItem('taskListing', JSON.stringify(saved));
  }
}

taskList.addEventListener('change', clearTask);

//--------------------------------------------------

//add strikethrough to saved object
let label = [...document.getElementsByClassName('labelStyling')];
log(label);
log(typeof(label));
log(label.innerHTML);

label.forEach(addStrikeThrough);

function addStrikeThrough(task) {
  let updateList = JSON.parse(localStorage.getItem('taskListing'))
  for (i=0; i<updateList.length; i++) {
    if (updateList[i].isCompleted == true && task.innerText === updateList[i].text) {
      task.style.textDecoration = 'line-through';
    } 
  }
}
//--------------------------------------------------





// //if update[i].
// function addStrikeThroughToSaveItems(task) {
//   let label = document.getElementsByClassName('labelStyling');
//   if (task.isCompleted == true) {
//     label.style.textDecoration = 'line-through';
//   } else {
//     label.style.textDecoration = 'none';
//   }
// }

//loop through label 


  // let updateSaved = JSON.parse(localStorage.getItem('taskListing'))
  // if (updateSaved.isCompleted == true) {
  //   labelSibling.style.textDecoration = 'line-through';
  // } else {
  //   labelSibling.style.textDecoration = 'none';
  // };
  
      //log(saved[i]);
    
    //***splice position i > replace with save[i]
    // log(saved[i]);
  
    // log(saved);
    // localStorage.setItem('taskListing', JSON.stringify(saved));
  // let tasks = JSON.parse(localStorage.getItem('taskListing')) || [];

  // get all todo items from local storage
  // search and find the item in local storage
  // update the item's isCompleted property
  // save the update item in local storage







// const updateStrikeThrough = JSON.parse(localStorage.getItem('taskListing'));
// var labelSibling = e.target.nextSibling;
// if (saved.isCompleted == true) {
//   labelSibling.style.textDecoration = 'line-through';
// } else {
//   labelSibling.style.textDecoration = 'none';
// };

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







