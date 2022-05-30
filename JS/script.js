const botaoenviar = document.getElementById('btmenviar')

botaoenviar.addEventListener("click", ()=>{
    const campos = document.getElementsByTagName("input","textarea")
    
    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ""){
            alert("O Campo "+ campos[x].placeholder + " não foi preenchido")
            return
        }
    }

    document.querySelector(".contato").submit()
    alert("Mensagem enviada com sucesso, logo te responderemos.")
    
}) 