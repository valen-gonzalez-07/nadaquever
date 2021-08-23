const pelicula = (peliculas) => {
    let indicador = 0;
    for (i = 0; i<peliculas.length; i++){
        let divVista = document.getElementById("vista");
        divVista.innerHTML +=
        `
        <div class="info" id="${peliculas[i].titulo}">
            <div>
                <p class="titulo">Te recomendamos:</p>
            </div>
            <div class="informacion">
                <p class="h1">${peliculas[i].titulo}</p>
                <div class="genero">
                    <p class="infoGenero">${peliculas[i].genero}</p>
                    <i class="far fa-calendar-alt iconoGenero"></i>
                    <p class="infoGenero">${peliculas[i].anio}</p>
                    <i class="far fa-clock iconoGenero"></i>
                    <p class="infoGenero">${peliculas[i].duracion} minutos</p>
                </div>
                <div class="resumen">
                    <p>${peliculas[i].resumen}</p>
                    <p class="violetaBold">DIRECCIÓN</p>
                    <p>${peliculas[i].direccion}</p>
                    <p class="violetaBold">PROTAGONIZADA POR</p>
                    <p>${peliculas[i].protagonistas}</p>
                </div>
            </div>
            <div class="informacionImagen">
                <img src=${peliculas[i].img} class="imagen" />
                <div class="btnsPeliculas">
                    <div class="btnVioletaInactivo btnIcono" onclick="verTrailer('${peliculas[i].iframe}')">
                        <i class="fas fa-play iconoVioleta"></i>
                        <p class="violetaBold">TRAILER</p>
                    </div>
                    <div class="btnVioletaInactivo btnIcono agregarLista" onclick="agregarLista('${indicador}', '${peliculas[i].titulo}')">
                        <i id="agregar${indicador}" class="fas fa-plus-circle iconoVioleta iconoAgregar"></i>
                        <i id="agregado${indicador}" class="fas fa-check-circle iconoNegro iconoAgregado" style="display: none"></i>
                        <p class="violetaBold" id="${indicador}">MI LISTA</p>
                    </div>
                <div>
            </div>
        </div>
        
        <button class="btnSiguiente" onclick="cambiarPelicula('${peliculas[i].titulo}')">PREFIERO OTRA</button>
        `
        indicador++;

        if(i == 0){
            let divVisible = document.getElementsByClassName("info");
            divVisible[0].style.display = "flex";
        }else {
            let divNoVisible = document.getElementsByClassName("info");
            divNoVisible[i].style.display = "none";
        }

        let siguiente = document.getElementsByClassName("info");
        if (siguiente.length == 1){
            let boton = document.getElementsByClassName("btnSiguiente");
            boton[0].style.display = "none";
        }else {
            $(".btnSiguiente").css("display", "flex")
        }
    }  
}

let indicadorP = 1;

function cambiarPelicula(titulo){
    let eliminada = document.getElementById(titulo);
    eliminada.style.display = "none";
    let siguiente = document.getElementsByClassName("info");
    siguiente[indicadorP].style.display = "flex";
    indicadorP++;
    if (indicadorP == siguiente.length){
        indicadorP = 0;
    }
}

let tipo = "";

function filtrarTipo(i, tipoDos){
    tipo = tipoDos;
    let cards = document.getElementsByClassName("cardTipo");
    let cardsArray = Array.from(cards);
    for(card in cardsArray){
        if(card == i){
            cardsArray[i].style.backgroundColor = "rgba(187, 134, 252, 12%)";
        }else{
            cardsArray[card].style.backgroundColor = "transparent";
        }
    }
}

function filtrar(){
    
    $("#btnFiltrar").hide();
    let genero = document.getElementById("genero").value;
    const filtrado = objPeliculas.filter((filtro) => filtro.tipo.includes(tipo) && filtro.genero.includes(genero));
    let divVista = document.getElementById("vista");
    divVista.remove();
    divVista = document.createElement("div");
    divVista.id = "vista";
    let divPelicula = document.getElementById("peliculas");
    divPelicula.appendChild(divVista);
    pelicula(filtrado);
}

let miLista = [];

function agregarLista(indicador, titulo){
    let peliculaGuardada = objPeliculas.filter((pel) => pel.titulo == titulo);
    let objPeliculaGuardada = {
        titulo: peliculaGuardada[0].titulo,
        duracion: peliculaGuardada[0].duracion,
        img: peliculaGuardada[0].img,
    };
    miLista.push(objPeliculaGuardada);

    localStorage.setItem("titulos", JSON.stringify(miLista));
    $("#agregado" + indicador).show();
    $("#agregar" + indicador).hide();
    let btnVioletaActivo = document.getElementsByClassName("btnVioletaInactivo btnIcono agregarLista");
    btnVioletaActivo[indicador].style.backgroundColor = "#BB86FC";
    let negroBold = document.getElementById(indicador);
    negroBold.style.color = "#121212"; 
}

function agregarLista(indicador, titulo){

    let miListaStorage = JSON.parse(localStorage.getItem("titulos"))

    let miLista = []

    if(miListaStorage!=null) {
        miLista = miListaStorage;
    }

    let peliculaYaAgregada = miLista.filter((pelicula) => pelicula.titulo == titulo)

    if(peliculaYaAgregada.length == 0){
        let peliculaGuardada = objPeliculas.filter((pel) => pel.titulo == titulo)
        let objPeliculaGuardada = {
            titulo: peliculaGuardada[0].titulo,
            duracion: peliculaGuardada[0].duracion,
            img: peliculaGuardada[0].img,
        }
        miLista.push(objPeliculaGuardada)
        localStorage.setItem("titulos", JSON.stringify(miLista))
        $("#agregado" + indicador).show();
        $("#agregar" + indicador).hide();
        let btnVioletaActivo = document.getElementsByClassName("btnVioletaInactivo btnIcono agregarLista");
        btnVioletaActivo[indicador].style.backgroundColor = "#BB86FC";
        let negroBold = document.getElementById(indicador);
        negroBold.style.color = "#121212";
    }else {
        miLista = miLista.filter((pel) => pel.titulo != titulo);
        localStorage.setItem("titulos", JSON.stringify(miLista));
        $("#agregado" + indicador).show();
        $("#agregar" + indicador).hide();
        let btnVioletaInactivo = document.getElementsByClassName("btnVioletaInactivo btnIcono agregarLista");
        btnVioletaInactivo[indicador].style.backgroundColor = "transparent";
        let violeta = document.getElementById(indicador);
        violeta.style.color = "#BB86FC";
    }
}

function verTrailer(iframe){
    $("body").prepend(`
        <div class="fondoTrailer" style="display:none"> 
            <div class="contenidoTrailer">
                <iframe width="560" height="315" src="${iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <i class="fas fa-times-circle iconoCerrar" onclick="removeTrailer()"></i>
            </div>
        </div>
    `) 
    $(".fondoTrailer").fadeIn("fast")
}

function removeTrailer() {
    $(".fondoTrailer").fadeOut("fast")
    let removerContenido = document.getElementsByClassName("fondoTrailer")
    removerContenido[0].remove();
    console.clear();  // PREGUNTAR
}


