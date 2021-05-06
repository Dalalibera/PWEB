document.addEventListener("DOMContentLoaded", () => {

    const cursos = document.getElementById("cursos");
    
    cursos.addEventListener('change', () => {
        if(!confirm(`Deseja visualizar mais informações sobre o curso selecionado?`)) return;
        window.open(`./curso.html?curso=${cursos.value}`, "_popup", "menubar=0,resizable=no,width=600,height=300");
    });

});