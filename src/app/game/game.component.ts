import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { Card } from './deck/card.model';
import { GameService } from '../game/game.service';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  socket;
  move: Card;
  cards: Card[];
  card: Card;
  pileCard: Card;
  constructor(private gameService: GameService) {
    this.cards = this.gameService.getCards();
  }

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame() {

  }

  SendCard(idcard: number) {
    this.card = this.gameService.getCard(idcard);
    this.pileCard = this.card;
    this.cards = this.cards.filter(c => c !== this.card);
    console.log(idcard);
    console.log(this.card);
  }

}
