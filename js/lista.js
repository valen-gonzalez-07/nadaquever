
window.onload = function(){
    miLista = JSON.parse(localStorage.getItem("titulos"));
    cargarLista(miLista);
}

function cargarLista(miLista){
    let peliculaAgregada = document.getElementById("peliculaAgregada");
    peliculaAgregada.innerHTML = "";
    miLista.forEach((pelicula)=> {
        peliculaAgregada.innerHTML +=
        `
        <div class="peliculaLista animate__animated" id="${pelicula.titulo}">
            <img src="${pelicula.img}" />
            <p class="blancoBold">${pelicula.titulo}</p>
            <div class="btnVioletaActivo btnIcono" onclick="quitarLista('${pelicula.titulo}')">
                <i class="fas fa-minus-circle iconoNegro"></i>
                <p class="negroBold">QUITAR</p>
            </div>
        </div>
        `
    });
}

function quitarLista(titulo){

    // document.getElementById(titulo).classList.add("animate__zoomOutDown");
    document.getElementById(titulo).style.display = "none"
    
    miLista = JSON.parse(localStorage.getItem("titulos"));
    miLista = miLista.filter((lista) => lista.titulo != titulo);
    localStorage.setItem("titulos", JSON.stringify(miLista));

}


