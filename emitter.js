function Emitter(){
    this.events = {};
}
Emitter.prototype.on = function(type, listener){ // Permite almacenar funcionalidad, Con prototype podemos agregar metodos
    this.events[type] = this.events[type] || []; // Compara si esta vacia
    this.events[type].push(listener); //ingresamos una funcion al objeto events
}
Emitter.prototype.emit = function(type){ // Invocar funcionalidad
    if(this.events[type]){
        this.events[type].forEach(function (listener){
            listener(); //Buscamos la funcion en el array y solo se ejecuta esa
        });
    }
}
module.exports = Emitter;
