import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-examen',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css',
})
export class ExamenComponent {
  usuario = {
    id: 0,
    name: '',
    password: ''
  }
  listaUsuarios = [
    { id: 1, name: 'Juan', password: 'password' },
    { id: 2, name: 'Pedro', password: '123' },
  ]

  
  agregarusuario() {

    if (this.usuario.id == 0) {
      alert('El id del usuario no puede ser 0');
      return;
    }
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.usuario.id == this.listaUsuarios[i].id) {
        alert('ya existe un usuario con ese id');
        return;
      }
    }
    this.listaUsuarios.push({
      id: this.usuario.id,
      name: this.usuario.name,
      password: this.usuario.password
    });
    this.usuario.id = 0;
    this.usuario.name = '';
    this.usuario.password = '';
  }
  //seleccion usuario de la tabla
  selectUser(
    nowUser: { id: number, name: string, password: string }
  ) {
    this.usuario.id = nowUser.id;
    this.usuario.name = nowUser.name;
    this.usuario.password = nowUser.password;
  }
  //modificar
  modUser() {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.usuario.id == this.listaUsuarios[i].id) {
        this.listaUsuarios[i].name = this.usuario.name;
        this.listaUsuarios[i].password = this.usuario.password;
      }
    }
  }

  deleteUser(id: number) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (id == this.listaUsuarios[i].id) {
        this.listaUsuarios.splice(i, 1);
        return;
      }
    }
  }

}
