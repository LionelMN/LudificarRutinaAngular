import { Component, Input, OnInit } from '@angular/core';
import { Rutina } from '../../interfaces/rutinaI';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  rutina? : Rutina;

  terminadas : number = 0;
  color : string = "";
  constructor() { }

  ngOnInit(): void {
    this.rutina?.tareas.map(tarea => {
      if(tarea.terminado){
        this.terminadas ++;
      }
    })
    this.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  }

}
