import { Component, OnInit } from '@angular/core';
import { Card } from './deck/card.model';
import { GameService } from './game.service';
import { io } from 'socket.io-client';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

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
  isMyTurn: boolean;


  constructor(private gameService: GameService) {
    this.cards = this.gameService.getCards();
    this.enemyCards = this.gameService.getCards();
    this.isMyTurn = true;
  }

  ngOnInit(): void {
    this.setupGame();
  }



  setupGame() {
    this.socket = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });

    this.socket.on('SendCard', (data: Card) => {
      this.pileCard = data;
      this.isMyTurn = true;
    });

    this.socket.on('EnemyCards', (data: Card[]) => {
      this.enemyCards = data;
    });

    this.socket.on('isMyTurn', (data: boolean) => {
      this.isMyTurn = data;
    });
  }


  SendCard(idcard: number) {
    if (this.isMyTurn === true) {
      this.card = this.gameService.getCard(idcard);
      this.pileCard = this.card;
      this.cards = this.cards.filter(c => c !== this.card);
      this.socket.emit('SendCard', this.pileCard);
      this.socket.emit('EnemyCards', this.cards);
      this.socket.emit('isMyTurn');
      this.isMyTurn = false;

      return true;
    } else return false;
  }

  setMyStyle(card: Card) {
    let styles = {
      'background': 'radial-gradient(ellipse at center,  #fff 0%, #fff 47%,#fff 47%,#fff 47%,' + card.color + ' 48%)',
      'background-repeat': 'no-repeat',
      'color': card.color
    };
    return styles;
  }

  onDragEnded(event: CdkDragEnd): void {
    if (this.isMyTurn !== true) {
      event.source._dragRef.reset();
    }
  }


}
