
const images = {
    image1: { 
        src: 'images/modi.png', 
        creator: 'modi', 
        hint: 'Kon rahul'
    },
    image2: { 
        src: 'images/rahul.png', 
        creator: 'rahul', 
        hint: 'Bangkok return.'
    },
    image3: { 
        src: 'images/amit.png', 
        creator: 'amit', 
        hint: 'Gaand gawani PADI thi.'
    },
    image4: { 
        src: 'images/keju.jpeg', 
        creator: 'kejriwal', 
        hint: 'Dawa aur Daru ka intezaam ker diya hai'
    }
};

let correctImageKey = `image${Math.floor(Math.random() * 4) + 1}`;
let correctCreator = images[correctImageKey].creator;
let hintText = images[correctImageKey].hint;

document.getElementById("audio").play();
document.getElementById("image").src = images[correctImageKey].src;
document.getElementById("fullImage").src = images[correctImageKey].src;
document.getElementById("hint").textContent = `Hint: ${hintText}`;
function guessImage(guess) {
    if (guess === correctCreator) {
        document.getElementById('result').textContent = `Correct! It's ${correctCreator}.`;
        document.getElementById('result').style.color = 'green';

        document.getElementById('image').classList.add('hidden');
        document.getElementById('fullImage').classList.remove('hidden');
    } else {
        document.getElementById('result').textContent = `Wrong guess! The correct answer is ${correctCreator}.`;
        document.getElementById('result').style.color = 'red';

        document.getElementById('image').classList.add('hidden');
        document.getElementById('fullImage').classList.remove('hidden');
    }
}

function refreshPage() {
    window.location.reload();  
    
}
