import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    SharedModule,
    NgSelectModule,
    BrowserModule, // BrowserModule exporte CommonModule
    // donc on importe également CommonModule en important BrowserModule
    TodosModule,
    UsersModule,
    AppRoutingModule, // en dernier à cause de la route wildcard ** (qui doit charger en dernier)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
