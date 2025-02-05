import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-3',
  imports: [FormsModule],
  templateUrl: './ejemplo-3.component.html',
  styleUrl: './ejemplo-3.component.css'
})
export class Ejemplo3Component {
  title = 'ejemplo3';

  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  }
  listaProd = [
    { id: 1, descripcion: 'Moster Blanco', precio: 300 },
    { id: 2, descripcion: 'Moster', precio: 300 }, {
      id: 3,
      descripcion: 'Moster Azul',
      precio: 500
    }, {
      id: 4,
      descripcion: 'Moster X',
      precio: 600
    }, {
      id: 5,
      descripcion: 'Una Kawama',
      precio: 100
    }
  ]

  agregarProducto() {

    if (this.producto.id == 0) {
      alert('El id del producto no puede ser 0');
      return;
    }
    for (let i = 0; i < this.listaProd.length; i++) {
      if (this.producto.id == this.listaProd[i].id) {
        alert('ya existe un producto con ese id');
        return;
      }
    }
    this.listaProd.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }
  //seleccion producto de la tabla
  selectProduct(
    nowProduct: { id: number, descripcion: string, precio: number }
  ) {
    this.producto.id = nowProduct.id;
    this.producto.descripcion = nowProduct.descripcion;
    this.producto.precio = nowProduct.precio;
  }
  //modificar
  modProduct() {
    for (let i = 0; i < this.listaProd.length; i++) {
      if (this.producto.id == this.listaProd[i].id) {
        this.listaProd[i].descripcion = this.producto.descripcion;
        this.listaProd[i].precio = this.producto.precio;
      }
    }
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.listaProd.length; i++) {
      if (id == this.listaProd[i].id) {
        this.listaProd.splice(i, 1);
        return;
      }
    }
  }

}
