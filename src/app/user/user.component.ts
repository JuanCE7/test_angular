import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';
@Component({
  selector: 'app-user',
  imports: [
    GamesComponent,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    IftaLabelModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'jfcastillo';
  isLoggedIn = false;
  favGame = '';
  value = ""
  getFavorite(gameName: string) {
    this.favGame = gameName;
  }
  greet() {
    alert('Hellooo');
  }
}
