import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './big-card.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [BigCardComponent],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [BigCardComponent],
})
export class BigCardModule { }
