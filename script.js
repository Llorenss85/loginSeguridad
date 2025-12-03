

document.addEventListener("DOMContentLoaded", ()=> {
    const inputPasword= document.getElementById("inputPasword");
    const botonCandado= document.getElementById("img-Pasword");
    const inputSubmit = document.getElementById("submit-contraseña");
    const content=[]

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

    inputPasword.addEventListener("input",(elem)=>{
        var letra=elem.data
        var label=document.getElementById("labelPasword")
        const advertenciaPass= document.getElementById("label-verification"); 
        //accion de verificacion
        const verification=document.getElementById("label-verification")
        //accion de decicion de verificacion
        eliminarOAgregarLetra(content,letra)
        agregarAdvertencias(content,advertenciaPass)

    })


    function eliminarOAgregarLetra(lista,letra){
        if(letra == null) lista.pop(); else lista.push(letra)
    }


    function agregarAdvertencias(lista,elemento){
        if(lista.length>=12 && lista.length<=14){
            elemento.textContent ="Contraseña segura !"
        }
        else{
            elemento.textContent ="contraseña debil.."
            
        }
    }

    inputSubmit.addEventListener("click", ()=>{
        
    })
});

