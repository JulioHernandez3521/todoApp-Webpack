import { todoToPublic } from "../mappers/TodoToPublic";
import { Todo } from "./todo.class";

export class TodoList {
    #todos;

    constructor () {
        // this.#todos = [];
        this.cargarTodos();
    }

    /**
     * 
     * @returns {Array<Todo>} todos
     */
    getTodos (){
        return [...this.#todos];
    }

    /**
     * 
     * @param {Array<Todo>} newTodos 
     */
    setTodos( newTodos) {
        this.#todos = newTodos;
    }

    /**
     * 
     * @param {Todo} todo 
     */
    nuevoTodo (todo) { 
        this.#todos  = this.#todos.map(todoToPublic);
        this.#todos.push(todoToPublic(todo))
      
        this.#guardarLocalStorage();
        this.cargarTodos();
    }

    /**
     * 
     * @param {String|Number} id 
     */

    eliminarTodo (id){
        this.setTodos(this.#todos.filter(e =>  e.getId() != id ) );
        this.setTodos(this.#todos.map(todoToPublic));
        // console.log(this.#todos)
        this.#guardarLocalStorage();
        this.cargarTodos();
    }
    /**
     * 
     * @param {String|Number} id 
     */

    toggleTodo (id){
        for (let todo of this.#todos) {
            // console.log(id, todo.getId());
            if(id == todo.getId()){
                todo.setCompletado((!(todo.getCompletado()))); 
                todo = todoToPublic(todo);
                break;
            }
        }
        this.setTodos(this.#todos.map(todoToPublic));
        this.#guardarLocalStorage()
        this.cargarTodos();
    }

    eliminarCompletos(){
        this.setTodos(this.#todos.filter(e => !e.getCompletado()));
        this.setTodos(this.#todos.map(todoToPublic));
        this.#guardarLocalStorage();
        this.cargarTodos();
    }

    #guardarLocalStorage (){
        // this.#todos = (this.#todos.length > 1 ) ? this.#todos.forEach(todoToPublic) : this.#todos;
        localStorage.setItem('todos', JSON.stringify(this.#todos));
    }

    cargarTodos(){
        this.#todos = (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')): [];
        // console.log(this.#todos)
        this.#todos = this.#todos.map( Todo.objToTodo);

    }

    getTodosPendientes () {
        const t = this.#todos.filter(e => !(e.getCompletado()) );
        return t.length;
    }
}