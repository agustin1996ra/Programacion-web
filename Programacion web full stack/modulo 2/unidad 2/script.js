var table = document.getElementsByTagName("tr");
var titulo = document.getElementsByTagName("h1");

function dibujar(){
    i =0;

    titulo[0].style.color="green";

    var recorrido = setInterval(() => {
        if(i < table.length){
            table[i].style.display="table-row"
            i++;
        }
        else {
            clearInterval(recorrido)
        }
    }, 100)
}

function modoDiurno(){

    document.body.style.backgroundColor = "lightslategrey";

    for (let i = 1; i < table.length; i++){
        table[i].style.color = "black";

        if (i%2 == 0) {
            table[i].style.backgroundColor = "palevioletred";
        } 
        else {
            table[i].style.backgroundColor = "pink";    
        }
       
    }
}

function modoNocturno(){

    document.body.style.backgroundColor = "darkslategrey";

    for (let i = 1; i < table.length; i++){
        table[i].style.color = "white";

        if (i%2 == 0) {
            table[i].style.backgroundColor = "grey";
        } 
        else {
            table[i].style.backgroundColor = "black";    
        }
       
    }
}