class MemoryGame {
  constructor(cards) {

      this.cards = cards;
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;

  }

  shuffleCards() {

    if (this.cards){
    return this.cards.sort((a,b) => 0.5 - Math.random())}; 
  } 
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1

    this.card1 = card1
    this.card2 = card2

    if (this.card1 === this.card2) {
      this.pairsGuessed += 1
      return true

    } else {
      return false
    }
  }

  checkIfFinished() {

   if (this.pairsGuessed === 12) {
    return true 
     } else {
       return false
      }
    }
}
