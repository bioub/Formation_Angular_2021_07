import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { SelectComponent } from './select/select.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
