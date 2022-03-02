import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['spiderman',"iron","hulk"];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log("borrando"); 

    this.heroeBorrado = this.heroes.shift() || '';

      
      // console.log(heroeBorrado);
  }

}
