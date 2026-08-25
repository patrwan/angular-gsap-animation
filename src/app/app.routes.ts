import { Routes } from '@angular/router';
import { Vinos } from './features/vinos/vinos';
import { Landing } from './features/landing/landing';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'vinos/:id', component: Vinos }
];
