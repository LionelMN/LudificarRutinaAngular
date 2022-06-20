import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuarioI';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { style } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user? : Usuario;

  public isClosed : boolean = false;
  public isMaxed : boolean = false;
  public dragX : string = '200px';

  constructor() {}

  ngOnInit(): void {
  }

  openClose(){
    this.isClosed = !this.isClosed;

  }

  MaxView() {
    this.isMaxed = !this.isMaxed;
    if(this.dragX != '75vw'){
      this.dragX = '75vw'
    } else{
      this.dragX = '200px';
    }
  }

  onDrag(event : DragEvent){
    event = event || window.event;
    if(event.x > 180){
      this.dragX = event.x + 'px';
    }
  }

  onDragEnd(event: DragEvent) {
    this.dragX = event.x + 'px';
  }

}

