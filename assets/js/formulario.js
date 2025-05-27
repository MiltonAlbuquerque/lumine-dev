function enviarWhats(event) {
    event.preventDefault();
    
    // Mostra o loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('active');
    
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value; 
    const mensagem = document.getElementById("mensagem").value; 
    const telefone = `5583999844101`;

    const texto = `Olá! Meu nome é ${nome}, meu email: ${email}, e essa é minha mensagem: ${mensagem}`; 
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    // Simula um tempo de carregamento (2 segundos) antes de abrir o WhatsApp
    setTimeout(() => {
        // Esconde o loading
        loadingOverlay.classList.remove('active');
        
        // Abre o WhatsApp
        window.open(url, '_blank');
        
        // Limpa o formulário (opcional)
        event.target.reset();
    }, 2000);
}