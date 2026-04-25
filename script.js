let segundos = 0;
let cronometro;

function formatarTempo(s) {
    const data = new Date(s * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTimer() {
    const input = document.getElementById('inputMinutos');
    const display = document.getElementById('display');

    // Se o cronômetro estiver parado e houver valor no input, define os segundos
    if (segundos === 0 && input.value > 0) {
        segundos = parseInt(input.value) * 60;
    }

    if (segundos <= 0) {
        alert("Manuel, digite os minutos na barra lateral!");
        return;
    }

    clearInterval(cronometro);
    
    cronometro = setInterval(() => {
        if (segundos <= 0) {
            clearInterval(cronometro);
            display.innerHTML = "00:00:00";
            alert("Fim do tempo!");
            return;
        }
        
        segundos--;
        display.innerHTML = formatarTempo(segundos);
        // Garante que a cor seja branca (pode ter herdado cinza do tailwind)
        display.classList.add('text-white');
    }, 1000);
}

function pause() {
    clearInterval(cronometro);
}

function reset() {
    clearInterval(cronometro);
    segundos = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('inputMinutos').value = "";
}