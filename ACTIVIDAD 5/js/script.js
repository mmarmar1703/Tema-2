function Calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = "El primer número es: " + a + "<br>El segundo número es: " + b + "<br>La suma es: " + (a+b) + "<br>La resta es: " + (a - b) +"<br>El producto es: " + (a*b) + "<br>La división: " + (a / b) + "<br>El resto es: " + (a % b) + "";
}