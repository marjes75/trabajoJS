let aniosTrabajo=+prompt("Ingrese cantidad de años de trabajo:")
let sueldo=+prompt("Ingrese sueldo:")
let bonoMensual, pagoMensual=0
if ((aniosTrabajo>2 || aniosTrabajo<5) && aniosTrabajo>0){
    if (sueldo>1000 && sueldo>0){
        bonoMensual=0.2*sueldo
        pagoMensual=bonoMensual+sueldo
        console.log(`Por ${aniosTrabajo} de trabajo, su bono sera de ${bonoMensual}, su sueldo sera de ${pagoMensual}`)
    }else if(sueldo>0 && sueldo<1000){
        bonoMensual=0.25*sueldo
        pagoMensual=bonoMensual+sueldo
        console.log(`Por ${aniosTrabajo} de trabajo, su bono sera de ${bonoMensual}, su sueldo sera de ${pagoMensual}`)
    }else {
        console.log("Ingrese datos correctos...")
    }
} else if(aniosTrabajo>0 || aniosTrabajo>=5){
    bonoMensual=0.3*sueldo
    pagoMensual=bonoMensual+sueldo
    console.log(`Por ${aniosTrabajo} de trabajo, su bono sera de ${bonoMensual}, su sueldo sera de ${pagoMensual}`)
}else {
    console.log("Ingrese datos correctos...")
}