async function encurtar() {
    const urlOriginal = document.getElementById('inputUrl').value;
    const btn = document.getElementById('btnEncurtar');
    const resultadoDiv = document.getElementById('resultado');
    const linkCurto = document.getElementById('shortUrl');

    if (!urlOriginal) {
        alert("Cole uma URL válida!");
        return;
    }

    // Feedback visual de carregamento
    btn.innerText = "Encurtando...";
    btn.disabled = true;

    try {
        // Chamada para a API do Cleanuri
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlOriginal)}`);
        
        if (response.ok) {
            const data = await response.text(); // O TinyURL retorna apenas o texto da URL
            
            linkCurto.innerText = data;
            linkCurto.href = data;
            resultadoDiv.classList.remove('hidden');
        } else {
            alert("Erro ao encurtar. Tente novamente mais tarde.");
        }
    } catch (error) {
        console.error(error);
        alert("Erro de conexão!");
    } finally {
        btn.innerText = "Encurtar Link";
        btn.disabled = false;
    }
}

function copiar() {
    const text = document.getElementById('shortUrl').innerText;
    navigator.clipboard.writeText(text);
    alert("Link copiado para a área de transferência!");
}