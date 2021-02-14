import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Card } from './deck/card.model';

@Injectable()
export class GameService {
  private cards: Card[] = [
    new Card(1, "10", "Blue", false),
    new Card(2, "2", "Blue", false),
    new Card(3, "6", "Red", false),
    new Card(4, "1", "Yellow", false),
    new Card(5, "+4", undefined, true),
    new Card(6, "stop", undefined, true),
  ];

  selectedCard = new Subject<Card>();

  getCards(): Card[] {
    return [...this.cards];
  }

  getCard(id: number): Card {
    return this.cards.filter(c => c, id === id)[id - 1];
  }

  getSelectedCard(id: number) {
    this.selectedCard.next(this.getCard(id));
  }

}
