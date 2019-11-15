import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './service.index';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    HttpClientModule
  ]
})
export class ServiceModule { }
