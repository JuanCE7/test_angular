import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      id: '1',
      name: 'Minecraft'
    },
    {
      id: '2',
      name: 'Fornite'
    }
  ]
}
