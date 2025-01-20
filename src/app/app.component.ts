import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimeNG } from 'primeng/config';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/house',
      },
      {
        label: 'Comentarios',
        icon: 'pi pi-comments',
        routerLink: '/comments',
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        routerLink: '/user',
      },
    ];

    this.primeng.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }
}
