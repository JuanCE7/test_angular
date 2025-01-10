import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'hipo',
        component: GamesComponent,
    },
    {
        path: '',
        title: 'hipo',
        component: UserComponent,
    }
];
