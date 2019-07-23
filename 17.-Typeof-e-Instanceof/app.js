

function identifica (param){
    //console.log(typeof param);

/*     if(typeof param == "function"){
        param();
    }else{
        console.log(param);
    } */
    console.log(typeof param)
    console.log(param instanceof Persona);
}

function Persona(){
    this.nombre = "didier";
    this.edad = "22"
}

var juan = new Persona();

/* identifica(function() {
    console.log("soy anonima");

}) */

var fernando = new Persona();

identifica(fernando);