// import '../css/components.css';
// import weblog from '../assets/img/webpack-logo.png';

import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');    
const txtInput = document.querySelector('.new-todo');

/**
 * 
 * @param {Todo} todo 
 * @returns {<HTMLDivElement>} li
 */
export const crearTodoHTML = (todo) =>{

    const todoHtml = `
    <li class="${(todo.getCompletado()) ? "completed": "" }" data-id="abc">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.getCompletado()) ? "checked": ""}>
            <label>${todo.getTarea()}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    `;

    const div = document.createElement('div');
    div.innerHTML = todoHtml;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}


txtInput.addEventListener('keyup', (e) => {

    if(e.keyCode === 13 && txtInput.value.trim().length > 0 ){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    } 

});