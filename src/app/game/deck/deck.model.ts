import { Card } from "./card.model";

export class Deck {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }
}
