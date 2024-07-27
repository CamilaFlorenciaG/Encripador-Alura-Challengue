document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = btoa(inputText); // Encriptar usando Base64
    document.getElementById('outputText').textContent = encryptedText;
    document.getElementById('copyBtn').style.display = 'block';
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    try {
        let decryptedText = atob(inputText); // Desencriptar usando Base64
        document.getElementById('outputText').textContent = decryptedText;
    } catch (e) {
        document.getElementById('outputText').textContent = 'Error al desencriptar el texto';
    }
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    });
});
