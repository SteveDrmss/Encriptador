



    function encriptar(){
        const encriptarTexto = document.querySelector('.main__insert__text').value
        const textoEncriptado = encriptarTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
        document.querySelector('.mensaje').value = textoEncriptado;
    }
 



    function desencriptar() {
        const desencriptarTexto = document.querySelector('.main__insert__text').value
        const textoDesencriptado = desencriptarTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
        document.querySelector('.mensaje').value = textoDesencriptado;
    }
   

    function copiar() {
        const copiarTexto = document.querySelector('.mensaje').value
        navigator.clipboard.writeText(copiarTexto)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error("Error al copiar el texto", err);
        });
    
    }



// AddEventListener
document.querySelector('.botones__texto__b1').addEventListener('click', encriptar)
document.querySelector('.botones__texto__b2').addEventListener('click', desencriptar)
document.querySelector('.copiar').addEventListener('click', copiar)
