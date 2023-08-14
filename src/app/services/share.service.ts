import { Injectable } from '@angular/core';
import { Producto } from '../Models/Producto';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private arregloProductos = new BehaviorSubject<Producto[]>([]);
  private totalProductos = 0;
  currentArregloProductos = this.arregloProductos.asObservable();
  currentTotalProductos = this.totalProductos
  
  constructor() { }

  addProducto(producto: Producto) {
    let arreglo = this.arregloProductos.value;
    this.totalProductos = this.totalProductos + producto.total;
    arreglo.push(producto);
    this.arregloProductos.next(arreglo);
  }

  deleteProducto() {
    let arreglo = this.arregloProductos.value;
    arreglo = [];
    this.totalProductos = 0;
    this.arregloProductos.next(arreglo);
  }
}
