import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaragemComponent } from './garagem/garagem.component';
import { VendedorComponent } from './vendedor/vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    GaragemComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
