import { Component } from '@angular/core';
//Importa a lista de alunos
import { Alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TabelaNode';
  //Referencia a lista de alunos dentro de AppComponent
  alunos = Alunos;
}
