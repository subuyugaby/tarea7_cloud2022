import { Component } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  productos: Array<Producto> = [];
  total: number = 0;
  constructor(private share: ShareService) {
  }
  ngOnInit(): void {
    this.share.currentArregloProductos.subscribe(arreglo => { this.productos = arreglo; });
  }

  calcularTotal(producto: number): number{
    this.total = this.total + producto
    return producto
  }
}
