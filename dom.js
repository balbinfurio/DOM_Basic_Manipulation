// Funciona como un css 
// h1 {color: red }

// const parrafito = document.querySelector(".parrafito"); //las clases con un . al principio
// const pid = document.querySelector("#pid"); // los ID con un # al inicio

const h1 = document.querySelector("h1"); // los tags de html de colocan tal cual se llaman 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const res = document.querySelector("#result");

// En el addEventListener no se le colocan los parentesis al llamar la funcion 
btn.addEventListener('click', sumarInputValues)


function sumarInputValues()
{
    let ca1 = parseInt(input1.value);
    let ca2 = parseInt(input2.value);
    const suma = ca1 + ca2;
    res.innerText = "Resultado es: " + suma;
}