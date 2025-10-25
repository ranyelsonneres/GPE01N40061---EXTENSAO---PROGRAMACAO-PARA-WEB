const form = document.getElementById('user-form');

form.addEventListener('submit', e =>{
    e.preventDefault(); //evitar que o formulário recarregue

    //capturar os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //criar uma função para cadastrar os usuários
    //chamar a função...
    cadastrarUsuario(nome, email);
});

//fetch() - fazer a requisição HTTP ao servidor
function cadastrarUsuario(nome, email) {
    //fetch() - enviar a requisição ao servidor
    fetch('/api/users/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        form.reset();
    })  
}
