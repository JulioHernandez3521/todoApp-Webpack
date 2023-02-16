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
        this.#todos.push(todo)
        this.#guardarLocalStorage();
    }

    /**
     * 
     * @param {String|Number} id 
     */

    eliminarTodo (id){
        this.setTodos(this.#todos.filter(e => e.id != id ));
        this.#guardarLocalStorage();
    }
    /**
     * 
     * @param {String|Number} id 
     */

    toggleTodo (id){
        for (const todo of this.#todos) {
            // console.log(id, todo.getId());
            if(id == todo.getId()){
                todo.setCompletado(!(todo.getCompletado())); 
                this.#guardarLocalStorage()
                break;
            }
        }

    }

    eliminarCompletos(){
        this.setTodos(this.#todos.filter(e => !e.getCompletado()));
        this.#guardarLocalStorage();
    }

    #guardarLocalStorage (){
        localStorage.setItem('todos', JSON.stringify(this.#todos));
    }

    cargarTodos(){
        this.#todos = (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')): [];
        this.#todos = this.#todos.map( Todo.objToTodo);

    }
}