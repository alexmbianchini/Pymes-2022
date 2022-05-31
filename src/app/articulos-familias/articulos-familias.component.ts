import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../app/models/articulo-familia';


import { ArticulosFamiliasService } from '../../app/services/articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  Items: ArticuloFamilia[] = [];
  Titulo = 'Articulos Familias';
  constructor(
    //private articulosFamiliasService: MockArticulosFamiliasService
    private articulosFamiliasService: ArticulosFamiliasService
  ) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
