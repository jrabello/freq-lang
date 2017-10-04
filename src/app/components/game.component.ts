import { Component, OnInit } from '@angular/core';

import { Game } from '../models/game'
import { User } from '../models/user'
import { GameService } from '../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})

export class GameComponent implements OnInit {  
  game: Game;
  user: User;  

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGame();    
  }

  async getGame(){          
    this.game = await this.gameService.getGame();
    this.user = new User();      
  }

  onSelect(selectedAnswer) {
    this.user.setAnswer(selectedAnswer);           
    if (selectedAnswer === this.game.answer) {
      this.user.getAnswer().setCorrect(true);      
      setTimeout(() => Promise.resolve(this.getGame()), 1000);      
      return;
    }
    this.user.getAnswer().setCorrect(false);
  }
}
