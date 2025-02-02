let amigos = [];

function agregarNome(nome){
    if(nome!==""){
        amigos.push(nome);
    }else{
        alert("Por favor, escreva um nome.")
    }

}
// botão para adicionar amigo
function agregarAmigo(){
    let nome = document.getElementById("amigo").value;
    agregarNome(nome);
    // limpar campo
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}
// mostrar lista de amigos
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos")
    let resultado = document.getElementById("resultado");
    if(amigos.length>0){
        lista.innerHTML = "";
        resultado.innerHTML = "";
        for (let index = 0; index < amigos.length; index++) {
            const element = amigos[index];
            let li = document.createElement("li");
            li.textContent = element;
            lista.appendChild(li);
        }
        }
}
// Botão para sortear amigo
function sortearAmigo(){
    if(amigos.length>0){
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu amigo sorteado é: "+ amigos[numeroGenerado];
    }
    
}