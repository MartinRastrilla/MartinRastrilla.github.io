const listaImagenes = ["url('Game.jpg')", "url('Gaming.jpg')", "url('FutureCity.jpg')"];
let contador = 0;


    function carrusel(){
        let contenedor = document.getElementById("hero");
        contenedor.addEventListener('click', e => {
            let atras = document.getElementById("boton-atras"),
                adelante = document.getElementById("boton-adelante"),
                imagen = document.getElementById("hero"),
                tgt = e.target;
            if(tgt == atras){
                if (contador > 0) {
                    //let url = listaImagenes[contador - 1].toString;
                    imagen.style.backgroundImage = listaImagenes[contador -1];
                    contador--;
                } else {
                    //imagen.src = listaImagenes[listaImagenes.length - 1];
                    //imagen.style.backgroundImage = "url('listaImagenes.length - 1')";
                    imagen.style.backgroundImage = listaImagenes[listaImagenes.length - 1];
                    contador = listaImagenes.length -1;
                }
            }else if(tgt == adelante){
                if (contador < listaImagenes.length-1) {
                    //let url = listaImagenes[contador + 1].toString;
                    imagen.style.backgroundImage = listaImagenes[contador + 1];
                    contador++;
                } else {
                    imagen.style.backgroundImage = listaImagenes[0];
                    contador = 0;
                }
            }
        });
    }
carrusel();