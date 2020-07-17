let montoGastar= +prompt("Ingrese el monto a gastar:")
if (montoGastar>0 || montoGastar>=10){
    console.log(`Puedes comprar una Tarjeta de Regalo con S/. ${montoGastar}`)
} else if((montoGastar>=11 || montoGastar<=100) && montoGastar>0 ){
    console.log(`Puedes comprar Chocolates de regalo con S/. ${montoGastar}`)
} else if((montoGastar>=101 || montoGastar<=250) && montoGastar>0){
    console.log(`Puedes comprar Flores de regalo con S/. ${montoGastar}`)
}else if(montoGastar>=251 && montoGastar>0){
    console.log(`Puedes comprar un Anillo de regalo con S/. ${montoGastar}`)
} else {
    console.log("Ingrese datos correctos...")
}