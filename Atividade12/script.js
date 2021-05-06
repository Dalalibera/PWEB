document.addEventListener("DOMContentLoaded", () => {

    const form = document.forms["formulario"]
    const nome = document.forms["formulario"].elements["nome"];
    const email = document.forms["formulario"].elements["email"];
    const comentario = document.forms["formulario"].elements["comentario"];
    const pesquisaSim = document.forms["formulario"].elements["pesquisa_sim"];
    const pesquisaNao = document.forms["formulario"].elements["pesquisa_nao"];

    form.addEventListener('submit', (evt) => {
        if (!validar()){
            evt.preventDefault();
        }

    });

    function validar(){

        if(nome.value.length < 10){
            alert("O nome não pode ter menos do que 10 caracteres.");
            nome.focus();
            return false;
        }

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            alert("O formato do e-mail é inválido.");
            email.focus();
            return false;
        }

        if(comentario.value.length < 10){
            alert("O comentário não pode ter menos do que 20 caracteres.");
            comentario.focus();
            return false;
        }

        if(!(pesquisaSim.checked || pesquisaNao.checked)){
            alert("O preenchimento da pesquisa é obrigatório.");
            return false;
        }
        
        alert(pesquisaNao.checked ? "Que bom que você voltou a visita a página!" : "Volte sempre a esta página!");
    }

});