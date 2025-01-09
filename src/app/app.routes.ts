import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: 'cart',
        title: 'hipo',
        component: GamesComponent,
    },
    {
        path: '',
        title: 'hipo',
        component: UserComponent,
    }
];
