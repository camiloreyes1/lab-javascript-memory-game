const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

let pairsClicked = 0
let pairsGuessed = 0

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      if (memoryGame.pickedCards.length < 2) {

        card.classList.add("turned")
        memoryGame.pickedCards.push(card)

      }
      
      if (memoryGame.pickedCards.length === 2) {
        
        let card1 = memoryGame.pickedCards[0]
        let card2 = memoryGame.pickedCards[1]

        let card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name')
        let card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name')

        let isPair = memoryGame.checkIfPair(card1Name, card2Name)

        console.log("line 69", isPair)

        if (isPair) {
          card1.classList.add('blocked')
          card1.classList.add('blocked')
          memoryGame.pickedCards = []
        } else {
          setTimeout(() => {
            card1.classList.toggle("turned")
            card2.classList.toggle("turned")
          }, 1500)
          memoryGame.pickedCards = []
        }
        

      }

      let clicked = document.getElementById("pairs-clicked")
      let guessed = document.getElementById("pairs-guessed")

      clicked.innerHTML = `${memoryGame.pairsClicked/2}`
      guessed.innerHTML = `${memoryGame.pairsGuessed}`


      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {

          alert("You won!")
        }, 250)

      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
