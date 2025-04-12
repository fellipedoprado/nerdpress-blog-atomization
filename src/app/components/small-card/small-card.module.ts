import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { SmallCardComponent } from './small-card.component';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [SmallCardComponent],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [SmallCardComponent],
})
export class SmallCardModule { }
