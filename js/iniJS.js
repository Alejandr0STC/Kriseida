
let tiempo = new Date(2022,05,07);
let tiempoReal = new Date();

new Promise(function(resolve){
    resolve(init());
}).then(function(result){
    animacion();
});

function init(){
    var tiempoTranscurrido = meses(tiempo,tiempoReal);
    var diasTranscurridos = dias(tiempo,tiempoReal) ;

        setTimeout(function(){
            Swal.fire({
                title: 'Te amo',
                text: "Te recuerdo que a pasado " + diasTranscurridos + " dias desde que nos conocimos de cara a cara y nos dimos nuestro primer beso ><",
                imageUrl: '../img/heart/heart_01.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                })  
        }, 2000);
    
}
function animacion(){
    let animacion = document.getElementById("animado");
    // animacion.style.animation = "moving 3s ease-out"; 
    //animacion arriba abajo
    animacion.style.display = "absolute";
    animacion.style.animationName = "moving";
    animacion.style.animationDuration = "3s";
    animacion.style.animationTimingFunction = "ease-out";
    animacion.style.animationDirection = "alternate";
    animacion.style.animationIterationCount = "infinite";  
    //animacion derecha izquierda
     //animacion infinita
    // animacion.style.animationDirection = "normal";
    

};
function paginaCancion1()
{
    window.location.href = "https://www.youtube.com/watch?v=XFkzRNyygfk&ab_channel=Radiohead";
}


function meses(tiempo,tiempoReal){
    let diferencia  = (tiempo.getTime() - tiempoReal.getTime()) / 1000 / (3600 * 24 * 7 * 4);
    return Math.abs(Math.round(diferencia));
}
function dias(tiempo,tiempoReal){
    let diferencia  = (tiempo.getTime() - tiempoReal.getTime()) / 1000 / (3600 * 24);
    return Math.abs(Math.round(diferencia));
}   


