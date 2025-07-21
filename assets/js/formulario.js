function enviarWhats(event) {
    event.preventDefault();
    
    // Mostra o loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('active');
    
    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value; 
    const mensagem = document.getElementById("mensagem").value; 
    const telefone = "5583999844101"; // Substitua se necessário

    // Formata a mensagem para o WhatsApp
    const texto = `Olá! Meu nome é ${nome}, meu email: ${email}, e essa é minha mensagem: ${mensagem}`; 
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    // Simula o tempo de processamento (opcional)
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
        
        // ---- SOLUÇÃO PRINCIPAL ---- 
        // Cria um link invisível e dispara o clique programaticamente
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; // Abre em nova aba
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click(); // "Clica" no link
        document.body.removeChild(link); // Remove após uso
        // --------------------------
        
        event.target.reset(); // Limpa o formulário
    }, 2000); // Mantém o delay para efeito visual (opcional)
}