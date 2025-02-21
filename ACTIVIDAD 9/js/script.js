function Factorial() {
    let n =parseFloat(document.getElementById("numero").value, 10);
    let resultado = 1;

    for (let cuenta = 1; cuenta <= n; cuenta = cuenta + 1){
        resultado = resultado * cuenta;

    }

    document.getElementById("resultado").innerHTML = "El factorial es " + resultado;
}