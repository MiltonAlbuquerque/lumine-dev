function enviarWhats(event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('.contact-form__button');
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const telefone = "5583999844101";

    // Remover qualquer mensagem de status anterior
    let statusContainer = document.getElementById('contactStatusMessage');
    if (statusContainer) {
        statusContainer.remove();
    }

    // Criar elemento de status acessível
    statusContainer = document.createElement('div');
    statusContainer.id = 'contactStatusMessage';
    statusContainer.className = 'contact-form__status';
    statusContainer.setAttribute('role', 'status');
    statusContainer.setAttribute('aria-live', 'polite');

    // Validação dos campos
    if (!nome || !email || !mensagem) {
        statusContainer.className = 'contact-form__status contact-form__status--error show';
        statusContainer.innerHTML = `
            <i class='bx bx-error-circle contact-form__status-icon'></i>
            <div class="contact-form__status-content">
                <span class="contact-form__status-title">Campos incompletos</span>
                <span class="contact-form__status-desc">Por favor, preencha todos os campos antes de enviar.</span>
            </div>
        `;
        form.appendChild(statusContainer);
        return;
    }

    // Estado sutil de carregamento no botão
    const originalButtonHtml = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `<span>Enviando...</span> <i class='bx bx-loader-alt bx-spin'></i>`;

    const texto = `Olá! Meu nome é ${nome}, meu email: ${email}, e essa é minha mensagem: ${mensagem}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
        // Exibir feedback elegante de sucesso
        statusContainer.className = 'contact-form__status contact-form__status--success show';
        statusContainer.innerHTML = `
            <i class='bx bx-check-circle contact-form__status-icon'></i>
            <div class="contact-form__status-content">
                <span class="contact-form__status-title">Mensagem enviada com sucesso!</span>
                <span class="contact-form__status-desc">Redirecionando para o WhatsApp da Lumine...</span>
            </div>
        `;
        form.appendChild(statusContainer);

        // Disparar clique para WhatsApp em nova aba
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Limpar campos do formulário
        form.reset();

        // Restaurar estado do botão após confirmação
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHtml;
        }, 1500);

        // Ocultar mensagem de sucesso suavemente após 5 segundos
        setTimeout(() => {
            if (statusContainer && statusContainer.parentNode) {
                statusContainer.classList.remove('show');
                setTimeout(() => {
                    if (statusContainer.parentNode) statusContainer.remove();
                }, 400);
            }
        }, 5000);
    }, 1000);
}