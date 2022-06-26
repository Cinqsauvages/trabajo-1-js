let numero = prompt('ingrese la cantidad de personas que quiera archivar')
parseInt(numero)

for (i = 0; i < numero; i++) {
    let nombre = prompt('Ingrese un nombre')
    let apellido = prompt('Ingrese el apellido')
    let edad = prompt('Ingrese la edad')

    if (nombre == '' || edad =='' || apellido == ''){
        alert("error al agregar persona, vuelva a intentar")
        break
    }

    let resultado = nombre + ' ' + apellido + ', ' + edad + ' ' + 'años'

    console.log(resultado)


}