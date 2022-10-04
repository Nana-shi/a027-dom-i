// const frutas = ["laranja", "limão", "uva"];

function frutaNova(){
    let textoDoInput = document.getElementById("fruta")
    console.log(textoDoInput.value)
}

let fruta4 = document.getElementById("fruta-4")

function adicionarFruta(){
    fruta4.innerHTML = document.getElementById("fruta").value
}