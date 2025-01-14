import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { HouseComponent } from './house/house.component';

export const routes: Routes = [
    {
        path: 'comments',
        title: 'test',
        component: CommentsComponent,
    },
    {
        path: 'user',
        title: 'test',
        component: UserComponent,
    },
    {
        path: 'house',
        title: 'test',
        component: HouseComponent,
    }
];
