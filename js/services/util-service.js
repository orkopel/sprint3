export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    shortingSentences
}

function shortingSentences(sentence, wordsCount) {
    sentence = sentence.split(' ')
    sentence = sentence.slice(0, wordsCount)
    sentence = sentence.join(' ')
    return sentence
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}