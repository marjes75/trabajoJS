let horaEstacionamiento= +prompt("Ingrese las horas de estacionamiento")
let montoPagar=0
if (horaEstacionamiento>0 && horaEstacionamiento<=2){
    montoPagar=horaEstacionamiento*5
    console.log(`Debe cancelar S/. ${montoPagar} por ${horaEstacionamiento} horas de estacionamiento`)
}else if(horaEstacionamiento>2 && horaEstacionamiento<=5){
    montoPagar=10+((horaEstacionamiento-2)*4)
    console.log(`Debe cancelar S/. ${montoPagar} por ${horaEstacionamiento} horas de estacionamiento`)
}else if(horaEstacionamiento>5 && horaEstacionamiento<=10){
    montoPagar=22+((horaEstacionamiento-5)*3)
    console.log(`Debe cancelar S/. ${montoPagar} por ${horaEstacionamiento} horas de estacionamiento`)
}else if(horaEstacionamiento>10 || horaEstacionamiento>0){
    montoPagar=37+((horaEstacionamiento-10)*2)
    console.log(`Debe cancelar S/. ${montoPagar} por ${horaEstacionamiento} horas de estacionamiento`)
}else {
    console.log("Ingrese datos correctos...")
}