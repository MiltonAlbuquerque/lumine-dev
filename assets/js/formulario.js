function enviarWhats(event) {
    event.preventDefault();
    
    
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('active');
    
    
    const nome = document.getElementById("nome").value; 
    const email = document.getElementById("email").value; 
    const mensagem = document.getElementById("mensagem").value; 
    const telefone = "5583999844101"; 

   
    const texto = `Olá! Meu nome é ${nome}, meu email: ${email}, e essa é minha mensagem: ${mensagem}`; 
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

   
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
 
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; 
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 
        // --------------------------
        
        event.target.reset(); 
    }, 2000); 
}