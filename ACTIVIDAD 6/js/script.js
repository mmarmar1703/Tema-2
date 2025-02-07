function Comprobar() {
    let numero = parseInt(document.getElementById("numero").value);
    let modulo = numero % 2;
    
    if (modulo == 0) {  
        document.getElementById("resultado").innerHTML = "El número es par.";
    }
    else {  
        document.getElementById("resultado").innerHTML = "El número es impar.";
    }
}