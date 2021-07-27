import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MultistatebuttonComponent } from './multistatebutton/multistatebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    UserFormComponent,
    HelloworldComponent,
    MultistatebuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
