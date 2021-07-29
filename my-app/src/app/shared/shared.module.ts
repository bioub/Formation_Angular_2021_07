import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    MultistatebuttonComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultistatebuttonComponent,
    SelectComponent,

    // en exportant CommonModule, un module qui important SharedModule
    // importe également CommonModule
    CommonModule, // *ngIf, ngClass, | date
  ]
})
export class SharedModule { }
