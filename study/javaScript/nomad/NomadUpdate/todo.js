const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
}
let toDos = [];

function saveToDos() {
	localStorage.setItem('todos', JSON.stringify(toDos));
}

function paintToDo(newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.innerText = newTodo;
	const button = document.createElement('button');
	button.innerText = '❌';
	const line = document.createElement('span');
	line.innerText = '•••••••••••••••••••';
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(line);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = '';
	toDos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
const savedToDos = localStorage.getItem('todos');

if (saveToDos !== null) {
	const parsedToDos = JSON.parse(localStorage.getItem('todos'));
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
