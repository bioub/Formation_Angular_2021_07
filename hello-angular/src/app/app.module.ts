import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';
import { ClockComponent } from './clock/clock.component';
import { BackgroundInputDirective } from './background-input.directive';
import { SelectComponent } from './select/select.component';
import { CountPipe } from './count.pipe';
import { ClockWithControlsComponent } from './clock-with-controls/clock-with-controls.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    UserFormComponent,
    HelloworldComponent,
    MultistatebuttonComponent,
    ClockComponent,
    BackgroundInputDirective,
    SelectComponent,
    CountPipe,
    ClockWithControlsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    // soit FormsModule soit ReactiveFormsModule dans un projet
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
