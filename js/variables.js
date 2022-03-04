
function Mostrarmonitor(){
    if (document.getElementById("blanco").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("blanco1").style.display = "block";
        
    }

    if (document.getElementById("opcion1").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        document.getElementById("b2").style.display = "none";
        console.log("Has seleccionado Opcion 1");
        

    } else if (document.getElementById("opcion2").selected == true) {

        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto2").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        console.log("Has seleccionado Opcion 2");
        document.getElementById("Pcs").style.display = "none";
       
    } else if (document.getElementById("opcion3").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        console.log("Has seleccionado Opción 3");
        

    } 

}