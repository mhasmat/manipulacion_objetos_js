"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
// let edadIngresada = 0;

// const datos = JSON.parse(personasJSON);

// const arrayFiltrado = datos.filter(dato => dato.edad >= edadIngresada);
// console.log(arrayFiltrado);

// console.log("edad ingresada:",edadIngresada);

/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
// const container = document.querySelector('#contenedor');

// const renderArrayFiltrado = arrayFiltrado.forEach(elemento => {
//     let persona = document.createElement('p');
//     persona.innerHTML = `Nombre: ${elemento.nombre} / Edad: ${elemento.edad} años`;
    
//     container.appendChild(persona);
// });


/* 3 - BONUS TRACK

- Su misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

// 3)

const input = document.querySelector('#inputEdad');
const btnConsultar = document.querySelector('#btnConsultar');

btnConsultar.onclick = () => {        
    let edadIngresada = input.value;    
    console.log("edad ingresada:", edadIngresada);
    
    // 1)
    const datos = JSON.parse(personasJSON);
    
    const arrayFiltrado = datos.filter(dato => dato.edad >= edadIngresada);
    console.log(arrayFiltrado);
    
    
    // 2)
    // arrayFiltrado.forEach(elemento => {
    //     let persona = document.createElement('p');
    //     persona.innerHTML = `Nombre: ${elemento.nombre}  |  Edad: ${elemento.edad} años.`;
        
    //     document.querySelector('#contenedor').appendChild(persona);
    // });        
        
    // otra forma mejor:
    let text = "";
    arrayFiltrado.forEach(element => {
        text += `   
        <table>        
            <tr>
                <td><h2>Nombre: ${element.nombre}  |  </h2></td>
                <td><h3>Edad: ${element.edad}</h3></td>
            </tr>   
        </table>   
        `
        document.getElementById('contenedor').innerHTML = text;
    });        
};