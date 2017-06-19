import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }

