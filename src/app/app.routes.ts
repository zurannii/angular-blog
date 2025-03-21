import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'content/:id',
        component: ContentComponent,
        data: {
            getPrerenderParams: () => [
                { id: '1' },
                { id: '2' },
                { id: '3' }
            ]
        }
    }
];


