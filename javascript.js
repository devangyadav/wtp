// Image data
const images = {
    image1: { 
        src: 'images/modi.png', 
        creator: 'modi', 
        hint: 'Known as the Prime Minister of India.'
    },
    image2: { 
        src: 'images/rahul.png', 
        creator: 'rahul', 
        hint: 'A political figure from a prominent family.'
    },
    image3: { 
        src: 'images/amit.png', 
        creator: 'amit', 
        hint: 'Often referred to as the "Chanakya" of Indian politics.'
    },
    image4: { 
        src: 'images/keju.jpeg', 
        creator: 'kejriwal', 
        hint: 'Leader of the "Aam Aadmi Party".'
    }
};

// Select a random image
let correctImageKey = `image${Math.floor(Math.random() * 4) + 1}`;
let correctCreator = images[correctImageKey].creator;
let hintText = images[correctImageKey].hint;

// Set up the game
document.getElementById("audio").play();
document.getElementById("image").src = images[correctImageKey].src;
document.getElementById("fullImage").src = images[correctImageKey].src;
document.getElementById("hint").textContent = `Hint: ${hintText}`;

// Guess the image
function guessImage(guess) {
    if (guess === correctCreator) {
        document.getElementById('result').textContent = `Correct! It's ${correctCreator}.`;
        document.getElementById('result').style.color = 'green';

        document.getElementById('image').classList.add('hidden');
        document.getElementById('fullImage').classList.remove('hidden');
        document.getElementById('fullImage').style.filter = 'none'; // Reveal the full image
    } else {
        document.getElementById('result').textContent = `Wrong guess! The correct answer was ${correctCreator}.`;
        document.getElementById('result').style.color = 'red';

        document.getElementById('image').classList.add('hidden');
        document.getElementById('fullImage').classList.remove('hidden');
        document.getElementById('fullImage').style.filter = 'none'; // Reveal the full image
    }
}

// Refresh the game
function refreshPage() {
    window.location.reload();
}
