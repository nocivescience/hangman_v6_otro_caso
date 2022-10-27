class Persona{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
Persona.prototype.getAge=function(){
    return this.age
}
Persona.prototype.interes=['tv','internet']
const persona1=new Persona('ricardo',78);
console.log(persona1.getAge())