import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ContentTextComponent } from './content-text.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ContentTextComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
],
  exports: [ContentTextComponent],
})
export class ContextTextModule { }
