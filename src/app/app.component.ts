import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'app-root',
  imports: [
    CommentsComponent,
    RouterOutlet,
    RouterLink,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    IftaLabelModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test de test';
  value = '';
}
