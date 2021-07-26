
let objPeliculas = [
    {
        titulo: "TESIS",
        duracion: "125",
        genero: "CRIMEN",
        tipo: "CLICHE",
        img: "../media/tesis.png",
        resumen: "Ángela es una estudiante de imagen que está preparando una tesis sobre la violencia audiovisual. Para complementarla, su director de tesis se compromete a buscar en la videoteca de la facultad material para ella. Pero al día siguiente es hallado muerto. Te la recomendamos porque a pesar de que capaz te veías venir quién es el asesino, nunca estás seguro.",
        anio: "1996",
        direccion: "Alejando Amenábar",
        protagonistas: ["Ana Torrent", "Fele Martínez", "Eduardo Noriega"],
    },
    {
        titulo: "REAR WINDOW",
        duracion: "112",
        genero: "CRIMEN",
        tipo: "CLICHE",
        img: "../media/rearwindow.png",
        resumen: "Jeff es un fotógrafo que está en sillas de ruedas porque tiene una pierna enyesada. Cuando comienza a espiar a sus vecinos (sí, bastante chusma) es testigo de un asesinato. Te la recomendamos porque está buena para pasar el rato.",
        anio: "1954",
        direccion: "Alfred Hitchcock",
        protagonistas: ["James Stewart", "Grace Kelly", "Wendell Corey", "Thelma Ritter"],
    },
    {
        titulo: "EL PRACTICANTE",
        duracion: "94",
        genero: "CRIMEN",
        tipo: "PARA PENSAR",
        img: "../media/elpracticante.png",
        resumen: "Ángel trabaja como técnico de emergencias sanitarias. Tras sufrir un accidente y quedar en silla de ruedas, su vida junto a su pareja, Vane, comienza a desmoronarse. El protagonista se obsesiona con la idea de que su pareja le es infiel y se sumerge en un verdadero infierno. Te la recomendamos porque queremos que pienses qué le perdonamos a alguien solo porque nos da pena.",
        anio: "2020",
        direccion: "Carles Torras",
        protagonistas: ["Mario Casas", "Déborah François", "Celso Bugallo"],
    },
    {
        titulo: "ZODIAC",
        duracion: "158",
        genero: "CRIMEN",
        tipo: "PARA PENSAR",
        img: "../media/zodiac.png",
        resumen: "Detectives persiguen al famoso “Asesino del Zodiaco”, un asesino en serie que, entre 1966 y 1978, mató a numerosas personas en San Francisco, mientras enviaba pistas de sus asesinatos a los medios de comunicación. Te la recomendamos porque la historia es atrapante",
        anio: "2007",
        direccion: "David Fincher",
        protagonistas: ["Jake Gyllenhaal", "Robert Downey Jr.", "Mark Ruffalo"],
    },
    {
        titulo: "EL SECRETO DE SUS OJOS",
        duracion: "129",
        genero: "CRIMEN",
        tipo: "PLOT TWIST",
        img: "../media/elsecretodesusojos.png",
        resumen: "Benjamín es oficial de un Juzgado de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido 25 años antes del cual fue testigo se decide por escribir una novela sobre el caso.¬ Te la recomendamos porque el final te va a dejar así o.O",
        anio: "2009",
        direccion: "Juan José Campanella",
        protagonistas: ["Ricardo Darín", "Soledad Villamil", "Guillermo Francella", "Pablo Rago", "Javier Godino"],
    },
    {
        titulo: "SEVEN",
        duracion: "127",
        genero: "CRIMEN",
        tipo: "PLOT TWIST",
        img: "../media/seven.png",
        resumen: "Somerset y Mills son dos detectives que tendrán que colaborar en la resolución de una serie de asesinatos cometidos por un psicópata que toma como base la relación de los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira. Te la recomendamos porque te vas a enganchar y tiene un muy buen final.",
        anio: "1995",
        direccion: "David Fincher",
        protagonistas: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow", "Kevin Spacey"],
    },
    {
        titulo: "EL SILENCIO DE LOS INOCENTES",
        duracion: "138",
        genero: "CRIMEN",
        tipo: "RARAS",
        img: "../media/elsilenciodelosinocentes.png",
        resumen: "Una agente en entrenamiento del FBI busca la ayuda y consejo de un brillante asesino, el doctor Hannibal Lecter (un psiquiatra que también es un psicópata violento y antropófago, o sea, caníbal), para poder capturar a otro asesino. Te la recomendamos porque la idea de que exista un asesino que se come a sus víctimas es bastante morbosa y rara.",
        anio: "1991",
        direccion: "Jonathan Demme",
        protagonistas: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Anthony Heald"],
    },
    {
        titulo: "HOGAR",
        duracion: "103",
        genero: "SUSPENSO",
        tipo: "CLICHE",
        img: "../media/hogar.png",
        resumen: "Javier Muñoz, un publicista en declive, se ve obligado a mudarse a otro piso junto a su familia. Cuando descubre que aún tiene un juego de llevas de su antiguo apartamento, decide espiar a los nuevos inquilinos. Te la recomendamos porque aunque es medio predecible, igual es atrapante. Mirala, vas a terminar con un odio tremendo.",
        anio: "2020",
        direccion: "Alex Pastor",
        protagonistas: ["Javier Gutiérrez", "Mario Casas", "Bruna Cusí", "Ruth Díaz"],
    },
    {
        titulo: "MULLHOLLAND DRIVE",
        duracion: "147",
        genero: "SUSPENSO",
        tipo: "PARA PENSAR",
        img: "../media/mulhollanddrive.png",
        resumen: "Betty, una joven aspirante a actriz, llega a Los Ángeles para convertirse en estrella de cine y se aloja en el apartamento de su tía. Allí conoce a la enigmática Rita, una mujer que padece amnesia a causa de un accidente sufrido en Mulholland Drive. Las dos juntas deciden investigar quién es Rita y cómo llegó hasta allí. Te la recomendamos porque vas a terminar buscando la explicación en un video de Youtube.",
        anio: "2001",
        direccion: "David Lynch",
        protagonistas: ["Naomi Watts", "Laura Harring", "Justin Theroux", "Ann Miller"],
    },
    {
        titulo: "GONE GIRL",
        duracion: "149",
        genero: "SUSPENSO",
        tipo: "PLOT TWIST",
        img: "../media/gonegirl.png",
        resumen: "Un hombre reporta que su esposa desapareció en su quinto aniversario de bodas, pero la imagen pública de una relación feliz empieza a desmoronarse por la presión de la policía y de los medios de comunicación. Te la recomendamos porque vas a ver que, de un momento al otro, cambia absolutamente toda la trama.",
        anio: "2014",
        direccion: "David Fincher",
        protagonistas: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris", "Carrie Coon"],
    },
    {
        titulo: "FIGHT CLUB",
        duracion: "139",
        genero: "SUSPENSO",
        tipo: "PLOT TWIST",
        img: "../media/fightclub.png",
        resumen: "Un empleado de oficina que padece insomnio, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de peleas clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo. Te la recomendamos porque cuanto más desesperante se pone todo, menos te esperás cómo termina.",
        anio: "1999",
        direccion: "David Fincher",
        protagonistas: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Jared Leto"],
    },
    {
        titulo: "PRISONERS",
        duracion: "153",
        genero: "SUSPENSO",
        tipo: "PLOT TWIST",
        img: "../media/prisoners.png",
        resumen: "Keller Dover se enfrenta a la peor pesadilla para un padre: la desaparición de su hija de seis años junto a una amiga. Ante la inoperancia policial, Keller empieza a investigar una casa rodante que se encontraba estacionada en su calle. Mirala, no te vas a arrepentir.",
        anio: "2013",
        direccion: "Denis Villeneuve",
        protagonistas: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis", "Maria Bello"],
    },
    {
        titulo: "MEMENTO",
        duracion: "113",
        genero: "SUSPENSO",
        tipo: "PLOT TWIST",
        img: "../media/memento.png",
        resumen: "Leonard, cuya memoria está dañada por culpa de un golpe en la cabeza al intentar evitar el asesinato de su mujer, tiene que recurrir a la ayuda de una cámara instantánea y a las notas tatuadas en su cuerpo para investigar el crimen y vengarla. Te la recomendamos porque hasta que no te explican qué le pasó al muchacho no cazás una.",
        anio: "2000",
        direccion: "Christopher Nolan",
        protagonistas: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    },
    {
        titulo: "ENEMY",
        duracion: "90",
        genero: "SUSPENSO",
        tipo: "RARAS",
        img: "../media/enemy.png",
        resumen: "Un amable profesor universitario descubre a un actor que se parece mucho a él y se adentra en los temas privados del hombre. Te la recomendamos porque el final va a ser el que vos hayas entendido.",
        anio: "2013",
        direccion: "Denis Villeneuve",
        protagonistas: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon", "Isabella Rossellini"],
    },
    {
        titulo: "LOS EXTRAÑOS",
        duracion: "99",
        genero: "TERROR",
        tipo: "CLICHE",
        img: "../media/losextranios.png",
        resumen: "Tres asaltantes enmascarados aterrorizan a una joven pareja durante una escapada romántica en su remota casa de campo. Te la recomendamos porque sí, mirá que no va a ser cliché 3 psicópatas yankees persiguiendo a una pareja.",
        anio: "2008",
        direccion: "Bryan Bertino",
        protagonistas: ["Liv Tyler", "Scott Speedman", "Gemma Ward"],
    },
    {
        titulo: "BODA SANGRIENTA",
        duracion: "95",
        genero: "TERROR",
        tipo: "CLICHE",
        img: "../media/bodasangrienta.png",
        resumen: "Durante la noche de su boda, una mujer recibe la invitación por parte de la rica y excéntrica familia de su marido para participar en una tradición ancestral que se convierte en un juego letal de superviviencia. Te la recomendamos porque, si bien la situación es atípica, la de una familia psicópata es fija.",
        anio: "2019",
        direccion: "Matt Bettinelli-Olpin",
        protagonistas: ["Samara Weaving", "Andie MacDowell", "Adam Brody", "Mark O'Brien"],
    },
    {
        titulo: "NOSOTROS",
        duracion: "116",
        genero: "TERROR",
        tipo: "PARA PENSAR",
        img: "../media/nosotros.png",
        resumen: "Adelaide y su esposo viajan a la casa en la que ella creció junto a la playa. Tiene un presentimiento siniestro que precede a un encuentro espeluznante: cuatro enmascarados se presentan ante su casa. Lo aterrador viene cuando muestran sus rostros. Te la recomendamos porque muy probablemente tengas que terminar buscando una explicación.",
        anio: "2019",
        direccion: "Jordan Peele",
        protagonistas: ["Lupita Nyong'o", "Winston Duke", "Elisabeth Moss", "Yahya Abdul-Mateen II"],
    },
    {
        titulo: "DULCES SUEÑOS, MAMÁ",
        duracion: "99",
        genero: "TERROR",
        tipo: "PARA PENSAR",
        img: "../media/dulcessuenios.png",
        resumen: "Dos gemelos que hacen todo juntos le dan la bienvenida a su mamá después de su cirugía reconstructiva. No obstante, los hermanos sospechan que hay algo extraño en su madre, algo perturbador y perverso. Por esto, empiezan a dudar que la mujer que está en su casa no es su madre. Te la recomendamos porque vas a terminar así ¿??",
        anio: "2014",
        direccion: "Veronika Franz",
        protagonistas: ["Susanne Wuest", "Elias Schwarz", "Lukas Schwarz"],
    },
    {
        titulo: "GET OUT",
        duracion: "104",
        genero: "TERROR",
        tipo: "PLOT TWIST",
        img: "../media/getout.png",
        resumen: "Chris va a conocer a los padres de Rose, su novia. Al principio se muestran encantadores, si bien un tanto nerviosos. Chris supone que se debe a que él es negro, pero un poco más tarde descubre que sus suegros ocultan un secreto espeluznante. Te la recomendamos porque te deja tens@ todo el tiempo.",
        anio: "2017",
        direccion: "Jordan Peele",
        protagonistas: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Caleb Landry Jones"],
    },
    {
        titulo: "EL SEXTO SENTIDO",
        duracion: "107",
        genero: "TERROR",
        tipo: "PLOT TWIST",
        img: "../media/sextosentido.png",
        resumen: "Malcolm es un psicólogo infantil que vive obsesionado por el recuerdo de un joven al que fue incapaz de ayudar. Cuando conoce a Cole, un aterrorizado y confuso niño de ocho años, se le presenta la oportunidad de redimirse haciendo todo lo posible por ayudarlo. Sin embargo, el doctor no está preparado para descubrir la terrible verdad sobre el chico: recibe visitas de espíritus atormentados que lo asustan. Te la recomendamos porque  tiene un final que seguuuramente no te veías venir.",
        anio: "1999",
        direccion: "M. Night Shyamalan",
        protagonistas: ["Bruce Willis", "Toni Collette", "Olivia Williams", "Haley Joel Osment"],
    },
    {
        titulo: "THE BOY",
        duracion: "97",
        genero: "TERROR",
        tipo: "PLOT TWIST",
        img: "../media/theboy.png",
        resumen: "Una joven niñera estadounidense llega a un pueblo aislado en Inglaterra, donde es contratada para cuidar de un siniestro muñeco de aspecto humano que unos padres muy afectados por la muerte de su hijo tratan como si fuera un niño real. Poco a poco la joven comienza a sospechar que el muñeco está realmente vivo. Te la recomendamos porque es la típica de terror que te tiene enganchado.",
        anio: "2016",
        direccion: "William Brent Bell",
        protagonistas: ["Lauren Cohan", "Rupert Evans"],
    },
    {
        titulo: "CLÍMAX",
        duracion: "97",
        genero: "TERROR",
        tipo: "RARAS",
        img: "../media/climax.png",
        resumen: "Jóvenes bailarines toman accidentalmente LCD mezclado con un cóctel y así su exultante ensayo se convierte en una pesadilla cuando uno a uno sienten las consecuencias de crisis psicodélica colectiva. Te la recomendamos porque es muy perturbadora. No trates de entenderla.",
        anio: "2018",
        direccion: "Gaspar Noé",
        protagonistas: ["Sofia Boutella", "Kiddy Smile", "Roman Guillermic", "Souheila Yacoub"],
    },
    {
        titulo: "THE SHINING",
        duracion: "144",
        genero: "TERROR",
        tipo: "RARAS",
        img: "../media/theshining.png",
        resumen: "Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia. Perturbadora, te la recomendamos.",
        anio: "1980",
        direccion: "Stanley Kubrick",
        protagonistas: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
    },
    {
        titulo: "8 MINUTOS ANTES DE MORIR",
        duracion: "93",
        genero: "CIENCIA FICCION",
        tipo: "CLICHE",
        img: "../media/8minutos.png",
        resumen: "Un soldado despierta en el cuerpo de otra persona y descubre que es parte de un experimento para encontrar a un peligroso terrorista, pero solo tiene ocho minutos para llevar a cabo su misión. Es un toque cliché la idea principal, pero te la recomendamos, te enganchás.",
        anio: "2011",
        direccion: "Duncan Jones",
        protagonistas: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga", "Jeffrey Wright"],
    },
    {
        titulo: "PRIMER",
        duracion: "77",
        genero: "CIENCIA FICCION",
        tipo: "PARA PENSAR",
        img: "../media/primer.png",
        resumen: "Dos jóvenes experimentan con un dispositivo que les permite retroceder el tiempo. Es todo lo que vamos a resumir porque es todo lo que entendimos. Te la recomendamos.",
        anio: "2004",
        direccion: "Shane Carruth",
        protagonistas: ["Shane Carruth", "David Sullivan"],
    },
    {
        titulo: "ORIGEN",
        duracion: "148",
        genero: "CIENCIA FICCION",
        tipo: "PARA PENSAR",
        img: "../media/origen.png",
        resumen: "Dom Cobb es un ladrón con una extraña habilidad para entrar a los sueños de la gente y robarles los secretos de sus subconscientes. Su habilidad lo ha vuelto muy popular en el mundo del espionaje corporativo, pero ha tenido un gran costo en la gente que ama. Cobb obtiene la oportunidad de redimirse cuando recibe una tarea imposible: plantar una idea en la mente de una persona. Si tiene éxito, será el crimen perfecto, pero un enemigo se anticipa a sus movimientos. Te la recomendamos porque es un viaje mental.",
        anio: "2010",
        direccion: "Christopher Nolan",
        protagonistas: ["Leonardo DiCaprio", "Ken Watanabe", "Joseph Gordon-Levitt", "Marion Cotillard"],
    },
    {
        titulo: "PREDESTINATION",
        duracion: "97",
        genero: "CIENCIA FICCION",
        tipo: "PARA PENSAR",
        img: "../media/predestination.png",
        resumen: "Un agente temporal se embarca en una misión para viajar en el tiempo y prevenir que un elusivo criminal ataque a miles de personas. Te la recomendamos porque no vas a entender nada.",
        anio: "2014",
        direccion: "Michael y Peter Spierig",
        protagonistas: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"],
    },
    {
        titulo: "DONNIE DARKO",
        duracion: "133",
        genero: "CIENCIA FICCION",
        tipo: "PLOT TWIST",
        img: "../media/donniedarko.png",
        resumen: "Un joven extraño es visitado a menudo por un conejo profético, que como él, aguarda el inminente fin del mundo. Te la recomendamos porque se tergiversa todo y te deja un gusto amargo.",
        anio: "2001",
        direccion: "Richard Kelly",
        protagonistas: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore", "Maggie Gyllenhaal"],
    },
    {
        titulo: "MOTHER",
        duracion: "121",
        genero: "CIENCIA FICCION",
        tipo: "RARAS",
        img: "../media/mother.png",
        resumen: "La tranquila vida de una mujer se ve alterada cuando su marido invita a su mansión a un hombre, su esposa y los dos hijos de la pareja. Desde la llegada de los huéspedes, su esposo se comporta cada vez de forma más extraña, y ella intenta comprender qué está sucediendo realmente. Te la recomendamos porque es medio –bastante- rara.",
        anio: "2017",
        direccion: "Darren Aronofsky",
        protagonistas: ["Jennifer Lawrence", "Javier Bardem"],
    }
]

const pelicula = (peliculas) => {

    for (i = 0; i<peliculas.length; i++){

        let divVista = document.getElementById("vista");

        divVista.innerHTML +=

        `
        <div class=info>
            <div class=informacion>
                <h1>${peliculas[i].titulo}</h1>
                <div class=genero>
                    <p class=infoGenero>${peliculas[i].genero}</p>
                    <i class="far fa-calendar-alt iconoGenero"></i>
                    <p class=infoGenero>${peliculas[i].anio}</p>
                    <i class="far fa-clock iconoGenero"></i>
                    <p class=infoGenero>${peliculas[i].duracion} minutos</p>
                </div>
                <div class=resumen>
                    <p>${peliculas[i].resumen}</p>
                    <p class=violetaBold>DIRECCIÓN</p>
                    <p>${peliculas[i].direccion}</p>
                    <p class=violetaBold>PROTAGONIZADA POR</p>
                    <p>${peliculas[i].protagonistas}</p>
                </div>
            </div>
            <img src=${peliculas[i].img} class=imagen />
        </div>
        `

        /* let div = document.createElement("div");

        let titulo = document.createElement("h1");
        titulo.textContent = `${peliculas[i].titulo}`;

        let genero = document.createElement("p");
        genero.textContent = `${peliculas[i].genero}`;

        let anio = document.createElement("p");
        anio.textContent = `${peliculas[i].anio}`;
        anio.setAttribute("class", "far fa-calendar-alt");

        let duracion = document.createElement("p");
        duracion.textContent = ` ${peliculas[i].duracion} minutos`;
        duracion.setAttribute("class", "far fa-clock");

        let resumen = document.createElement("p");
        resumen.textContent = `${peliculas[i].resumen}`;

        let direccion = document.createElement("p");
        direccion.textContent = `Dirección: ${peliculas[i].direccion}`;

        let protagonistas = document.createElement("p");
        protagonistas.textContent = `Protagonizada por: ${peliculas[i].protagonistas}`

        let imagen = document.createElement("img");
        imagen.setAttribute("src", peliculas[i].img);

        div.appendChild(titulo);
        div.appendChild(genero);
        div.appendChild(anio);
        div.appendChild(duracion);
        div.appendChild(resumen);
        div.appendChild(direccion);
        div.appendChild(protagonistas);
        div.appendChild(imagen); 

        divVista.appendChild(div);*/

    }

}

let tipo = "";

function filtrarTipo(tipoDos){
    tipo = tipoDos;
}

function filtrar(){

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
