import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuarioI';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ludificarRutinas';

  public user? : Usuario;
  private _jsonURL = 'assets/json/lionel.json';

  constructor(private http : HttpClient) {
    this.getJSON().subscribe(data => {
      this.user = data;
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
