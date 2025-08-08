const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido");
        return;
    }

    listaAmigos.push(nombre);

    const li = document.createElement("li");
    li.textContent = nombre;
    listaElement.appendChild(li);

    input.value = "";
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("La lista está vacía.Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];

    resultadoElement.innerHTML = ""; //limpia resultados anteriores

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultadoElement.appendChild(li);
}
