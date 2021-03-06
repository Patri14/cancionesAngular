import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

//services
import { CancionesService } from './providers/canciones.service';

//pipes

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [       
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
