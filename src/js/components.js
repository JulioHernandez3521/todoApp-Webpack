// import '../css/components.css';
// import weblog from '../assets/img/webpack-logo.png';

import { Todo } from "../classes";
import { todoList } from "../index";
import { todoToPublic } from "../mappers/TodoToPublic";

const divTodoList = document.querySelector('.todo-list');    
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilters  = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


const actualizaNumeroTodos  = () =>{
    const todoPendientes = document.querySelector('.todo-count')
    // console.log(todoList.getTodosPendientes())
    todoPendientes.innerHTML =`<strong>${todoList.getTodosPendientes()}</strong> pendiente(s)`

}

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
    actualizaNumeroTodos();
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
    actualizaNumeroTodos();
});


btnBorrar.addEventListener('click', ()=>{
    todoList.eliminarCompletos();

    for(let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
    actualizaNumeroTodos();
});

ulFilters.addEventListener('click',(e)=>{

    const filtro = e.target.text;
    if( !filtro ) return;

    anchorFiltros.forEach(ele => ele.classList.remove('selected'));
    event.target.classList.add('selected'); 

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        
            default:
                break;
        }
        
    }
})