import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-4',
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo-4.component.html',
  styleUrl: './ejemplo-4.component.css'
})
export class Ejemplo4Component {
  title = 'ejemplo4';
  //PROPIEDADES
  listaTareas: string[];
  tarea = new FormControl();
  constructor() {
    this.listaTareas = [];
    let datos = localStorage.getItem('tareas');
    if (datos != null) {
      let arregloTareas = JSON.parse(datos);
      if (arregloTareas != null) {
        for (let tarea of arregloTareas) {
          this.listaTareas.push(tarea);

        }
      }
    }
  }
  addTask() {
    this.listaTareas.push(this.tarea.value);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    this.tarea.setValue('');
  }
  deleteTask(posicion: number) {
    this.listaTareas.splice(posicion, 1);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }
  deleteAllTasks() {
    localStorage.clear();
    this.listaTareas = [];
  }
}
