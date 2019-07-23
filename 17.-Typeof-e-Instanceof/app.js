

function identifica (param){
    //console.log(typeof param);

    if(typeof param == "function"){
        param();
    }else{
        console.log(param);
    }
    
    console.log(typeof param) //identificando e imprimiendo el tipo de parametro
    console.log(param instanceof Persona); //comparando dos objetos y retornando true o false 
}

function Persona(){
    this.nombre = "didier";
    this.edad = "22"
}

var juan = new Persona();

identifica(function() { //enviandole una funcion como parametro
    console.log("soy anonima");

})

var fernando = new Persona();

identifica(fernando);  //enviandole una variable