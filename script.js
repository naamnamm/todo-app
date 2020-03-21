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

//step 1:
//grab input value
var newTask = document.getElementById("inputEntered"); //input

//grab div
var maindiv = document.getElementById('maindiv');

//create ul
var ul = document.createElement('ul');
ul.id = 'taskList';

//create li = <li></li>
var li = document.createElement('li');
li.className = 'setWidth'

//create button = <button></button>
var button = document.createElement('button');
button.id = 'cancel';
button.className = 'rightAlign';

//create label = <label>
var label = document.createElement('label');

//create checkbox = <input type='checkbox'>
var checkbox = document.createElement('input'); 
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("name", "checked");

//function addtask with input
function addTask(event) {
  //assign value to <li> input value </li>
  label.textContent = event.target.value
  keycode = event.key;
  if (keycode === 'Enter') {
    // event.preventDefault(); 
    maindiv.appendChild(ul);
    ul.appendChild(li);
    event.target.value = '';
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    button.appendChild(document.createTextNode('x'))
    console.log(maindiv.innerHTML)
    console.log(maindiv.lastChild);
  } 
}

newTask.addEventListener('keypress', addTask);

// to add class/id/attr to li: .className/.id = '';
// .setAttribute('title', 'Hello li');

// console.log(storeValue);

// I need to store this input obj (<li> input value </li>) in local storage

//------------------------------------


//Second try


// taskValue.addEventListener('keypress', function (e) {
//     var char = e.char || e.charCode || e.which;
//     var character = String.fromCharCode(char)
//     var key = e.key;
//     var log = console.log;
//     var inputChar = '';
//     log(char);
//     log(character);
//     log(typeof(key));
//     if (char !== 13) {
//         inputChar.concat(key);

//         log(inputChar.concat(key));
//     } else {
//         return inputChar;
//     }
// });


//resource
//https://dzone.com/articles/back-basics-%E2%80%93-using-keyboard
//https://www.youtube.com/watch?v=5-koI06rmcA






//------------------------------------------------------
// get the value when keypress event is triggered.
// Question is how?
//function addtask with enter key


//Third try

// taskValue.addEventListener("keypress", addTask)

// function addTask(event) {
//   var keycode = event.code
//   if (keycode === 'Enter') {
//     newTask.textContent = event.target.value;
//     taskList.appendChild(newTask);
//   } else {
//     console.log('not working');
//   }
// }

// var keycode = event.code
// if (keycode === 'Enter') {
//   document.getElementById("output").appendChild(el)
// }





//resource: //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
//https://stackoverflow.com/questions/4471582/keycode-vs-which

//-------------------------------------------------------
// Test input to see if it works -----------------------
//assign value to li = <li>value</li>
//newTask.textContent = taskValue
// var input = document.getElementById("inputEntered");

// var targetDisplay = document.getElementById('demo');

// input.addEventListener('input', addtoDemo);

// function addtoDemo(ev) {
//   targetDisplay.textContent = ev.target.value;
//   console.log(ev.target)
// }


