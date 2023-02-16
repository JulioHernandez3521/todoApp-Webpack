import { Todo } from "../classes"

/**
 * 
 * @param {Todo} todo 
 * @returns {Object}
 */
export const todoToPublic = ( todo ) => {
    return {
        completado: todo.getCompletado(),
        creado: todo.getCreado(),
        id: todo.getId(),
        tarea : todo.getTarea(),
    }
} 