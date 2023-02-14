import { Todo } from "./todo.class";

export class TodoList {
    constructor () {
        this.todos = [];
    }

    /**
     * 
     * @param {Todo} todo 
     */
    nuevoTodo (todo) { 
        this.todos.push(todo)
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

    }

    eliminarCompletos(){
        
    }
}