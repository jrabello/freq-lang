import { Component, OnInit } from '@angular/core';

import { Game } from './models/game'
import { User } from './models/user'
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  title = 'app';     

  constructor() {}  
}
