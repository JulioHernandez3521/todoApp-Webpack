export class Todo {
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
     * @returns <Todo> 
     */
    setCompletado ( estado ) {
        this.#completado = estado;
        return this;
    }
    /**
     * 
     * @param {String} newTarea 
     *  @returns <Todo> 
     */
    setTarea ( newTarea ) {
        this.#tarea = newTarea;
        return this;
    }


}