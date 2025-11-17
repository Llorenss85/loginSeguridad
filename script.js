

document.addEventListener("DOMContentLoaded", ()=> {
    const inputPasword= document.getElementById("inputPasword");
    const botonCandado= document.getElementById("img-Pasword");

    botonCandado.addEventListener("click", function() {
        //img, se obtiene el atributo porque si se usa solo el "src" se pasas un enlace https. ()
        const img2="img/password-svgrepo-com.svg"
        const img= "img/unk-password-svgrepo-com.svg"
        const imgActual=botonCandado.getAttribute("src");

        if(imgActual ==img){ // colocar imagen bloqueada
                  
            botonCandado.src=img2
            inputPasword.type="password"
            
        }
        else{// colocar imagen desbloqueada
            botonCandado.src=img
            inputPasword.type="text"
            
        }
    
    });
});