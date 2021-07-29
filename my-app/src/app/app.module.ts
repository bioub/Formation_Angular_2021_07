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
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    TodosModule,
    UsersModule,
    AppRoutingModule, // en dernier à cause de la route wildcard ** (qui doit charger en dernier)
  ],
  providers: [
    // Use existing pour aliaser un service par un autre
    // {
    //   provide: UserServiceWithCache,
    //   useClass: UserServiceWithCache,
    // },
    // {
    //   provide: UserService,
    //   useExisting: UserServiceWithCache
    // }
    // useValue (souvent dans les tests) pour affecter une valeur
    // {
    //   provide: UserService,
    //   useValue: {
    //     getAll() {
    //       console.log('object créé au chargement')
    //     }
    //   }
    // }
    // useFactory
    // {
    //   provide: UserService,
    //   useFactory: function factory(httpClient: HttpClient) {
    //     if (environment.production) {
    //       return new UserServiceWithCache();
    //     }
    //     return new UserService();
    //   },
    //   deps: [HttpClient]
    // }
    // useClass, on laisse l'injecteur d'Angular analyser le constructeur
    // et instancier la avec éventuellement des dépendances (qui sont d'autres services)
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // }
    // UserService, // syntaxe courte de provide + useClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
