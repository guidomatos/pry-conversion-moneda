import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {

  SharedService

} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService
  ]
})
export class ServiceModule { }
