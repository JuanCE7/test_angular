import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommentsComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test de test';
}
