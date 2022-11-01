let tiempo = "13/8/2022";
let tiempoReal = new Date().toLocaleDateString();


new Promise(function(resolve){
    resolve(init());
}).then(function(result){
    animacion();
});

function init(){
    if(tiempo == tiempoReal){
        console.log("Te amo")
    }
    else{
        console.log("No te amo")
    }
    // setTimeout(function(){
    //     Swal.fire({
    //         title: 'Te amo',
    //         text: "Te amo",
    //         imageUrl: 'https://i.pinimg.com/originals/7b/0d/0d/7b0d0d9b8b0c8b0c8b0c8b0c8b0c8b0c.gif',
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         imageAlt: 'Custom image',
    //         })  
    // }, 2000);
}
function animacion(){
    let animacion = document.getElementById("animado");
    // animacion.style.animation = "moving 3s ease-out"; 
    //animacion arriba abajo
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
//window.onload = init();
//window.onload = animacion();

