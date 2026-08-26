import { Routes } from '@angular/router';
import { Vinos } from './features/vinos/vinos';
import { Landing } from './features/landing/landing';
import { languagueGuard } from './guards/languague-guard';

export const routes: Routes = [
    /*  { path: '', component: Landing },
     { path: 'vinos/:id', component: Vinos }, */

    { path: '', redirectTo: 'es', pathMatch: 'full' },
    { path: 'es', component: Landing, canActivate: [languagueGuard] },
    { path: 'fr', component: Landing, canActivate: [languagueGuard] }
];
