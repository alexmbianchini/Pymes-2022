import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosFamiliasComponent } from './articulos-familias/articulos-familias.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
