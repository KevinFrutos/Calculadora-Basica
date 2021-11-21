// INPUT DE LAS OPERACIONES Y RESULTADOS
const in_pantalla = document.querySelector('#in_pantalla');

// OPERACIONES
const b_suma = document.querySelector('#b_suma');
const b_resta = document.querySelector('#b_resta');
const b_multiplicacion = document.querySelector('#b_multiplicacion');
const b_division = document.querySelector('#b_division');

// PARENTESIS
const b_parentesis_izquierdo = document.querySelector('#b_parentesis_izquierdo');
const b_parentesis_derecho = document.querySelector('#b_parentesis_derecho');

// BOTONES DE RESET, ELIMINAR Y RESULTADO
const b_reset = document.querySelector('#b_reset');
const b_eliminar = document.querySelector('#b_eliminar');
const b_resultado = document.querySelector('#b_resultado');

// NUMEROS Y EL PUNTO
const b_punto = document.querySelector('#b_punto');
const b_cero = document.querySelector('#b_cero');
const b_uno = document.querySelector('#b_uno');
const b_dos = document.querySelector('#b_dos');
const b_tres = document.querySelector('#b_tres');
const b_cuatro = document.querySelector('#b_cuatro');
const b_cinco = document.querySelector('#b_cinco');
const b_seis = document.querySelector('#b_seis');
const b_siete = document.querySelector('#b_siete');
const b_ocho = document.querySelector('#b_ocho');
const b_nueve = document.querySelector('#b_nueve');

let calculado = false;

// NUMEROS Y EL PUNTO
b_punto.onclick = () => {
    in_pantalla.value += '.';
}

b_cero.onclick = () => {
    in_pantalla.value += 0;
}

b_uno.onclick = () => {
    in_pantalla.value += 1;
}

b_dos.onclick = () => {
    in_pantalla.value += 2;
}

b_tres.onclick = () => {
    in_pantalla.value += 3;
}

b_cuatro.onclick = () => {
    in_pantalla.value += 4;
}

b_cinco.onclick = () => {
    in_pantalla.value += 5;
}

b_seis.onclick = () => {
    in_pantalla.value += 6;
}

b_siete.onclick = () => {
    in_pantalla.value += 7;
}

b_ocho.onclick = () => {
    in_pantalla.value += 8;
}

b_nueve.onclick = () => {
    in_pantalla.value += 9;
}

// PARENTESIS
b_parentesis_izquierdo.onclick = () => {
    in_pantalla.value += '(';
}

b_parentesis_derecho.onclick = () => {
    in_pantalla.value += ')';
}

// OPERACIONES
b_suma.onclick = () => {
    in_pantalla.value += '+';
}

b_resta.onclick = () => {
    in_pantalla.value += '-';
}

b_multiplicacion.onclick = () => {
    in_pantalla.value += '*';
}

b_division.onclick = () => {
    in_pantalla.value += '/';
}


// BOTONES DE RESET, ELIMINAR Y RESULTADO
b_reset.onclick = () => {
    in_pantalla.value = '';
}

b_eliminar.onclick = () => {
    if (calculado) {
        in_pantalla.value = '';
        calculado = false
    } else {
        let expresion = in_pantalla.value;
        in_pantalla.value = '';
        for (let i = 0; i < (expresion.length - 1); i++) {
            in_pantalla.value += expresion.charAt(i);
        }
    }
}

// USO LA FUNCION EVAL PARA QUE PASE EL STRING A UNA EXPRESION MATEMATICA QUE EL JAVASCIPT PUEDE EVALUAR Y CALCULAR.
b_resultado.onclick = () => {
    calculado = true;
    let resultado = eval(in_pantalla.value);
    in_pantalla.value = resultado;
}

// SI EL USUARIO CLICA A LA PANTALLA COPIA EL CONTENIDO EN EL PORTAPAPELES
in_pantalla.onclick = () => {
    navigator.clipboard.writeText(in_pantalla.value);
}

