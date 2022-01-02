const textDisplay = document.getElementById('text');
const phrases = ['Hello my name is Konstantin.', 'I love to code.','I love to teach code.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isEnd = false;
let isDeleting = false;
function loop () {
    isDeleting = false;

    if (i < phrases.length) {
        textDisplay.innerHTML = currentPhrase.join('')
        if (!isEnd && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isEnd && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j === phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isEnd && j === 0) {
            currentPhrase = [];
            isEnd = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }

    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isDeleting ? 2000 : isEnd ? speedUp : normalSpeed;
    console.log(time);
    setTimeout(loop, time);
}

loop ();