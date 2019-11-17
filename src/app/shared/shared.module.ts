import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        CopyrightComponent,
        NopagefoundComponent
    ],
    exports: [
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        CopyrightComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {

}
