
window.onload = function(){
    miLista = JSON.parse(localStorage.getItem("titulos"));

    if (miLista.length == 0){
        let mensajeListaVacia = document.getElementById("mensaje");
        mensajeListaVacia.innerHTML = `<div class="vhNecesario"><p class="titulo">Tu lista está vacía :(</p>
                                        <p class="subtitulo">¡Empezá a agregar películas!</p></div>`
    }else {
        let mensajeListaCargada = document.getElementById("mensaje");
        mensajeListaCargada.innerHTML = `<div><p class="titulo">Tu lista</p></div>`
    }

    cargarLista(miLista)
}

function cargarLista(miLista){
    let peliculaAgregada = document.getElementById("peliculaAgregada");
    peliculaAgregada.innerHTML = "";
    miLista.forEach((pelicula)=> {
        peliculaAgregada.innerHTML +=
        `
        <div class="peliculaLista" id="${pelicula.titulo}">
            <img src="${pelicula.img}" />
            <p class="subtitulo uppercase">${pelicula.titulo}</p>
            <div class="btnVioletaIcono btnIcono" onclick="quitarLista('${pelicula.titulo}')">
                <i class="fas fa-minus-circle iconoNegro"></i>
                <p class="negroBold">QUITAR</p>
            </div>
        </div>
        `
    });
}

function quitarLista(titulo){
    document.getElementById(titulo).style.display = "none";
    miLista = JSON.parse(localStorage.getItem("titulos"));
    miLista = miLista.filter((lista) => lista.titulo != titulo);
    localStorage.setItem("titulos", JSON.stringify(miLista));
}


