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
