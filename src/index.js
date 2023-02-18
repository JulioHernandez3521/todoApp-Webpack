import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from "./js/components";
import './styles.css';


export const todoList = new TodoList();

const todos = todoList.getTodos();
todos.forEach(e => crearTodoHTML(e));
// console.log(todos)
