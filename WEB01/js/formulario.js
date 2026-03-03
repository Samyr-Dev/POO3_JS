let btnAdicionar = document.getElementById("btnAdicionar");

function adicionarTarefa() {
    const txtTarefa = document.getElementById("txtTarefa");
    const texto = txtTarefa.value;
    const liTarefa = document.getElementById("listaTarefas");
    
    if (texto) {
        const novaTarefa = document.createElement("li");
        const textoLi = document.createTextNode(texto.toUpperCase());
        novaTarefa.appendChild(textoLi);
        liTarefa.appendChild(novaTarefa);
        txtTarefa.value = "";
    }

}

