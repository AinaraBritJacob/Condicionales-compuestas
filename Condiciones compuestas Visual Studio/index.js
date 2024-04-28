/*Crea un programa que verifique usuario y contraseña 
usuario: JuanGarcia23 y contraseña:cJ20ht3!
Crea un programa que indique si el alumno aprobo la materia:
Nota examen:8
Nota trabajos practicos >=6
Asistencia==true
Crea un programa que indique al usuario/a que basura puede sacar:
Lunes,Miercoles,Viernes:"Humedos"
Martes, Jueves, domingo:"Secos"
Sabado:"No pasa"
*/

//1)
let usuario= prompt("¿Cual es tu usuario?")
let contraseña= prompt("¿Cual es tu contraseña?")
if ((contraseña=="cJ20ht3!") && (usuario=="juanGarcia20")) {
    alert("Bienvenido" + usario)
} else {
    alert("Usuario y contraseña incorrecta")
}

//2)
let notaexamen=Number(prompt)("¿Cual es tu nota?")
let notatp= Number(prompt)("¿Cual es tu nota en trabajos practicos?")
let asistencia= prompt("¿Tu asistencia esta completa?")
if ((notaexamen>=8) && (notatp>=6) || (asistencia=="si")) {
    alert("Aprobo la maetria")
} else {
    alert("Desaprobo la materia")
}

//3)
let luneseMiercolesViernes = "Basura humeda"
let MartesJuevesDomingo = "basura seca"
let sabado ="No se saca basura"
if ((luneseMiercolesViernes=="Basura humeda") && (MartesJuevesDomingo=="basura seca") && (sabado=="No se saca basura")){
    alert("Lunes, miercoles y viernes se saca basura humeda, martes, jueves y domingo se saca basura seca y los sabados no se saca basura")
}else{

}
