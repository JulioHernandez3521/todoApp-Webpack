// import '../css/components.css';
// import weblog from '../assets/img/webpack-logo.png';

import { Todo } from "../classes";
import { todoList } from "../index";
import { todoToPublic } from "../mappers/TodoToPublic";

const divTodoList = document.querySelector('.todo-list');    
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

/**
 * 
 * @param {Todo} todo 
 * @returns {<HTMLDivElement>} li
 */
export const crearTodoHTML = (todo) =>{

    const todoHtml = `
    <li class="${(todo.getCompletado()) ? "completed": "" }" data-id="${ todo.getId() }">
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
        todoList.nuevoTodo(todoToPublic(nuevoTodo));
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    } 

});


divTodoList.addEventListener('click', (e) =>{
    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');


    if(nombreElemento.includes('input')){
        todoList.toggleTodo(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    
});


btnBorrar.addEventListener('click', ()=>{
    todoList.eliminarCompletos();

    for(let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }

});