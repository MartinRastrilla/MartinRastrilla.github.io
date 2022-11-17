const listaImagenes = ["url('Game.jpg')", "url('Gaming.jpg')", "url('FutureCity.jpg')"];
let contador = 0;


    function carrusel(){
        let contenedor = document.getElementById("hero");
        contenedor.addEventListener('click', e => {
            let atras = document.getElementById("boton-atras"),
                atras2 = document.getElementById("atras1"),
                atras3 = document.getElementById("atras2"),
                adelante = document.getElementById("boton-adelante"),
                adelante2 = document.getElementById("adelante1"),
                adelante3 = document.getElementById("adelante2"),
                imagen = document.getElementById("hero"),
                tgt = e.target;
            if(tgt == atras || tgt == atras2 || tgt == atras3 ){
                if (contador > 0) {
                    imagen.style.backgroundImage = listaImagenes[contador -1];
                    contador--;
                } else {
                    imagen.style.backgroundImage = listaImagenes[listaImagenes.length - 1];
                    contador = listaImagenes.length -1;
                }
            }else if(tgt == adelante || tgt == adelante2 || tgt == adelante3){
                if (contador < listaImagenes.length-1) {
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