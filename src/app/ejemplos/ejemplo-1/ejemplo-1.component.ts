import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-1',
  imports: [],
  templateUrl: './ejemplo-1.component.html',
  styleUrl: './ejemplo-1.component.css'
})
export class Ejemplo1Component {
  title = 'proycto_parcial1';
  nombre = 'Sultano';
  email = 'fulano@utsjr.edu.mx';
  yearService = 0.5;
  activo = false;
  alumnos = [24,25,69.3,0.6,0.999999];
  productos = [
    {
      id:1,
      descripcion:'desc1',
      precio:'1000$'
    },
    {
      id:2,
      descripcion:'desc2',
      precio:'1000$'
    },
    {
      id:3,
      descripcion:'desc3',
      precio:'1000$'
    }
  ]
  num = 1+1;
  contador = 0;
  desactivarBoton = true;

    
 
  //funcion que muestra si esta activo o no
  estaActivo() {
    if(this.activo){
      return 'Empleado Activo';

    }else{
      return 'Empleado No Activo :(((((((((('
    }
  }
  //Funcion que suma los alumnos
  sumarAlumnos(){
    let suma = 0;
    for(let i = 0; i<this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma; 
  }
  //Funcion que incrementa el contador
  incrementarContador(){
    this.contador++;
  }
  //funcion para decrementar el contador
  decrementarContador(){
    this.contador--;
  }

  // funcion que cambia  el valor de desactivar boton 
  cambiarValor(){
    if(this.desactivarBoton){
      this.desactivarBoton = false;
    }
  }

}
