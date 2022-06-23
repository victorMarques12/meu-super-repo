const valorA = 79;
const valorB = 50;
const valorC = 51;

let somaDosAngulos = valorA + valorB + valorC;

let anguloPositivo = valorA > 0 && valorB > 0 && valorC > 0;

if(anguloPositivo)
    if(somaDosAngulos === 180){
    console.log(true);
    }else{
    console.log(false);
}else{
    console.log("erro: angulo invalido")
}
