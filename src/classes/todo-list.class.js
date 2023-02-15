import { Todo } from "./todo.class";

export class TodoList {
    #todos;

    constructor () {
        this.#todos = [];
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
     * @param {Todo} todo 
     */
    nuevoTodo (todo) { 
        this.#todos.push(todo)
    }

    /**
     * 
     * @param {String|Number} id 
     */

    eliminarTodo (id){

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
                break;
            }
        }

    }

    eliminarCompletos(){
        
    }
}