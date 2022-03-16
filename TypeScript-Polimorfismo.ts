/* ********************************************************************************* 
* Polimorfismo por Herencia 
********************************************************************************** */
class Forma{
    nombre:string="";
    Dibujar(){
        console.log("Método Dibujar, clase Base" );
    }
}

class Rectangulo extends Forma{
    base:number = 0;
    altura:number = 0;
    Dibujar(){
        console.log( "Método Dibujar, clase hija Rectángulo" );
    }
}

class Circulo extends Forma{
    radio:number = 0;
    Dibujar(){
        console.log( "Método Dibujar, clase hija Círculo" )
    }
}

let rectangulo = new Rectangulo();
rectangulo.Dibujar();

let circulo = new Circulo();
circulo.Dibujar();

/* ********************************************************************************* 
* Polimorfismo por Abstracción 
********************************************************************************** */
abstract class Operacion{
    protected valorA:number = 0;
    protected valorB:number = 0;
    protected resultado:number = 0;

    abstract Operar():void;

    set ValorA(valor:number){
        this.valorA = valor;
    }
    set ValorB( valor:number){
        this.valorB = valor;
    }
    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Operar(){
        this.resultado = this.valorA + this.valorB;
    }
}

class Resta extends Operacion{
    Operar(){
        this.resultado = this.valorA - this.valorB;
    }
}

let suma = new Suma();
suma.ValorA = 30;
suma.ValorB = 15;
suma.Operar();
console.log( "Resultado de la suma: " + suma.Resultado);

let resta = new Resta();
resta.ValorA = 20;
resta.ValorB = 5;
resta.Operar();
console.log( "Resultado de la resta: " + resta.Resultado);
