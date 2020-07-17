 nombre=prompt("Nombre del Trabajador: ")
let horasTrabajadas= +prompt("Horas Trabajadas: ")
let pagoHora= +prompt("Ingrese el pago monto por hora trabajadas: ")
let pagoSemanal=0
let sobreTiempo=0

if (horasTrabajadas>0 && horasTrabajadas<=40){
    pagoSemanal=horasTrabajadas*pagoHora
    console.log(`El pago del trabajador ${nombre}  es de S/. ${pagoSemanal}`)
} else if (horasTrabajadas>40 && horasTrabajadas>0){
    sobreTiempo=horasTrabajadas-40
    pagoSemanal=(2*sobreTiempo)+(pagoHora*(horasTrabajadas-sobreTiempo))
    console.log(`El pago del trabajador ${nombre} es de S/. ${pagoSemanal} con ${sobreTiempo} horas de sobretiempo`)
} else
    console.log("Ingrese datos correctos...")