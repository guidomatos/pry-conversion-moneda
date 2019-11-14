import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        MenuComponent,
        NopagefoundComponent
    ],
    exports: [
        MenuComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {

}
