import { RouterModule, Routes } from '@angular/router';
import { CalculoComponent } from './pages/calculo/calculo.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'calculo', component: CalculoComponent },
    { path: 'historico', component: HistoricoComponent },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: false } );
