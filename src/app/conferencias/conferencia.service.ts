import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conferencia } from '../model/conferencia.model';

import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getConferencias(): Observable<Conferencia[]> {
  return this.http.get<Conferencia[]>(this.apiUrl);
}

}