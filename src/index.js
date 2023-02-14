import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from "./js/components";
import './styles.css';


export const todoList = new TodoList();

const tarea = new Todo('Aprender TypeScript');

todoList.nuevoTodo(tarea);

crearTodoHTML(tarea)
