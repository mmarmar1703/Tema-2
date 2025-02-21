function Comprobar() {
    let nota =parseFloat(document.getElementById("numero").value, 10);
    	if (nota >= 0 && nota <= 10){
        	document.getElementById("resultado").innerHTML = "La nota es válida";
            if (nota >= 0 && nota <= 5){
                document.getElementById("resultado").innerHTML = "Suspenso";
            }
            if (nota >= 5 && nota <= 7){
                document.getElementById("resultado").innerHTML = "Suficiente";
            }
            if (nota >= 7 && nota <= 8){
            document.getElementById("resultado").innerHTML = "Bien";
            }
            if (nota >= 9 && nota <= 10){
                document.getElementById("resultado").innerHTML = "Excelente";
            }
        }
        else {
        	document.getElementById("resultado").innerHTML = "Esta nota no es válida.";
        }
    }
