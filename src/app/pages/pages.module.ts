import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { HistoricoComponent } from './historico/historico.component';
import { CalculoComponent } from './calculo/calculo.component';
import { HomeComponent } from './home/home.component';
import { OnlyNumbers } from '../directives/onlynumber.directive';



@NgModule({
    declarations: [
        PagesComponent,
        HistoricoComponent,
        CalculoComponent,
        HomeComponent,
        OnlyNumbers
    ],
    exports: [
        HistoricoComponent,
        CalculoComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        FormsModule
    ]
})

export class PagesModule { }