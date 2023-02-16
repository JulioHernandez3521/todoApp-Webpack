export class Todo {

    static  objToTodo ( todo ) {
        const {completado, creado, id, tarea } = todo;
        const tempTodo = new Todo( tarea);
        tempTodo.setCompletado( completado );
        tempTodo.setId(id);
        tempTodo.setCreado(creado);
        return tempTodo;
    } 

    
    #tarea ='';
    #id = 0;
    #completado = false;
    #creado = 0;


    /**
     * 
     * @param {String} tarea 
     */
    constructor ( tarea ) {
        this.#tarea = tarea;

        this.#id          = new Date().getTime();
        this.#completado  = false;
        this.#creado      = new Date();
    }

    /**
     * 
     * @returns {<Number|String>} Id
     */
    getId(){
        return this.#id;
    }
    /**
     * 
     * @returns {<Boolean>} completado
     */
    getCompletado (){
        return  this.#completado;
    }
    /**
     * 
     * @returns {<Date|Number>} creado 
     */
    getCreado(){
        return this.#creado;
    }
    /**
     * 
     * @returns {<String>} tarea 
     */
    getTarea(){
        return this.#tarea;
    }

    /**
     * 
     * @param {Boolean} estado 
     */
    setCompletado ( estado ) {
        this.#completado = estado;
        // return this;
    }
    /**
     * 
     * @param {String|Number} id 
     */
    setId ( id ) {
        this.#id = id;
        // return this;
    }
    /**
     * 
     * @param {Date} creado 
     */
    setCreado (creado ) {
        this.#creado = creado;
        // return this;
    }
    /**
     * 
     * @param {String} newTarea 
     */
    setTarea ( newTarea ) {
        this.#tarea = newTarea;
        // return this;
    }


}