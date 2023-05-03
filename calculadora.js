var botones = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ".", "0", "=", "/"];

function renderizarGUI(){
    //div Calculadora
    const divCalculadora = document.createElement("div");
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center");
        document.body.appendChild(divCalculadora);

    //div Pantalla
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    //input pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("value", "0");
    divPantalla.appendChild(pantalla);


    //div Botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "Botones");
    divCalculadora.appendChild(divBotones);

    for (let i = 0; i < botones.length; i++){
        //crear filas
        if (i%4 == 0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }
        let boton = document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);
        boton.setAttribute("class", "btn btn-info col-3 border-white")
        boton.innerHTML=botones[i];
        
        //agregar un escucahdor de eventos

        boton.addEventListener("click", function(){
            procesarEvento(boton);
        }) 
        divBotones.lastChild.appendChild(boton);
    }
    function procesarEvento(boton){
        let miPantalla = document.getElementById("pantalla");
        if (miPantalla.value == 0){
            miPantalla.value = "";
        }
        if (boton.innerHTML != "="){
        miPantalla.value += boton.innerHTML;
        }else{
            // Evaular la expresion con math
            try{
            let resultado = math.evaluate(miPantalla.value);
            miPantalla.value = resultado;
            }catch(error){
                miPantalla.value = "Formula Errada!!!";
            }
            
        }
    }
    function borrar(){
        let miPantalla = document.getElementById("pantalla");
        miPantalla.value = 0;
    } 
    const borrarTodo = document.createElement("button");
    borrarTodo.setAttribute("id", "borrado");
    borrarTodo.setAttribute("class", "btn btn-outline-danger")
    divBotones.appendChild(borrarTodo); 
    borrarTodo.innerHTML = "Borrar todo";

    borrarTodo.addEventListener("click", function(){
        borrar(borrarTodo);
    })
    
}
renderizarGUI();