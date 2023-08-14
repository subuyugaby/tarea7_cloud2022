export class Producto{
  producto: string;
  precio: number;
  cantidad: number;
  total: number;
  constructor(producto: string, cantidad: number){
    this.producto = producto;
    switch (producto) {
      case "Sala":
        this.precio = 9000;
        break;
      case "Comedor":
          this.precio = 7000;
          break;
      case "Sillon":
          this.precio = 1000;
          break;
      case "Pergola":
          this.precio = 6000;
          break;
      case "Dormitorio":
          this.precio = 8000;
          break;
      default:
        this.precio = 0;
        break;
    }
    this.cantidad = cantidad;
    this.total = this.precio * cantidad;

  }
  
}