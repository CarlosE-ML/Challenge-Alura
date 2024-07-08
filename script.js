document.getElementById('encrypt-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    if (validateInput(input)) {
        const encrypted = encrypt(input);
        displayMessage(encrypted);
    } else {
        alert('Por favor, escribe al menos una palabra que contenga una vocal (a, e, i, o, u).');
    }
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    if (validateInput(input)) {
        const decrypted = decrypt(input);
        displayMessage(decrypted);
    } else {
        alert('Por favor, escribe al menos una palabra que contenga una vocal (a, e, i, o, u).');
    }
});

function validateInput(text) {
    return /[aeiou]/.test(text);
}

function encrypt(text) {
    const encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[a|e|i|o|u]/g, char => encryptionRules[char]);
}

function decrypt(text) {
    const decryptionRules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/(enter|imes|ai|ober|ufat)/g, match => decryptionRules[match]);
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
    document.querySelector('.image').style.display = 'none';
    document.querySelector('.text').style.display = 'none';
}
