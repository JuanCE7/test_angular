import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'jfcastillo';
  isLoggedIn = false;
  favGame = ''

  getFavorite(gameName:string){
    this.favGame = gameName
  }
  greet() {
    alert('Hellooo');
  }
}
