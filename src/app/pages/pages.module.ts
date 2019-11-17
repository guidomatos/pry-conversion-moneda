import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { CalculoComponent } from './calculo/calculo.component';
import { HistoricoComponent } from './historico/historico.component';
import { AboutComponent } from './about/about.component';

import { OnlyNumbers } from '../directives/onlynumber.directive';
import { MyCurrencyFormatterDirective } from '../directives/my-currency-formatter.directive';

import { MyCurrencyPipe } from '../pipes/my-currency.pipe';


@NgModule({
    declarations: [
        PagesComponent,
        CalculoComponent,
        HistoricoComponent,
        AboutComponent,
        OnlyNumbers
        , MyCurrencyFormatterDirective
        , MyCurrencyPipe
    ],
    exports: [
        PagesComponent,
        CalculoComponent,
        HistoricoComponent,
        AboutComponent,
        // , MyCurrencyPipe
    ],
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule
    ],
    providers: [
        MyCurrencyPipe
    ]
})

export class PagesModule { }
