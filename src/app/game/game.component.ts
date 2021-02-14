import { Component, OnInit } from '@angular/core';
import { Card } from './deck/card.model';
import { GameService } from './game.service';
import { io } from 'socket.io-client';

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
  enemyCards: Card[];

  constructor(private gameService: GameService) {
    this.cards = this.gameService.getCards();
    this.enemyCards = this.gameService.getCards();
  }

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame() {
    this.socket = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });

    this.socket.on('SendCard', (data: Card) => {
      this.pileCard = data;
    });

    this.socket.on('EnemyCards', (data: Card[]) => {
      this.enemyCards = data;
    })

  }


  SendCard(idcard: number) {
    this.card = this.gameService.getCard(idcard);
    this.pileCard = this.card;
    this.cards = this.cards.filter(c => c !== this.card);
    this.socket.emit('SendCard', this.pileCard);
    this.socket.emit('EnemyCards', this.cards);
  }


}
