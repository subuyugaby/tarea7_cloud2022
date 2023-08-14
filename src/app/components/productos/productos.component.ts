import { Component } from '@angular/core';
import { Producto } from 'src/app/Models/Producto';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  producto: string = "";
  cantidad: number = 0;
  constructor(private share: ShareService){}

  agregarProducto(){
    let operacion = new Producto(this.producto, this.cantidad);
    this.share.addProducto(operacion);
  }

  eliminarProductos(){
    this.share.deleteProducto();
  }
}
