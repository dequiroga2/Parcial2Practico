import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../model/conferencia.model';
import { ConferenciaService } from './conferencia.service';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  ConferenciaSelect: Conferencia | undefined;
  upcoming: number = 0;

  constructor(private conferenciaService: ConferenciaService) { 
    this.ConferenciaSelect = undefined;
  }

  getConferencias() {
    this.conferenciaService.getConferencias().subscribe(conferencias => {
      this.conferencias = conferencias;
    });
  }

  ngOnInit() {
    this.getConferencias();
  }

  onSelect(conferencia: Conferencia){
    this.ConferenciaSelect = conferencia;
  }

  calculateConferencias():number {
    let sum = 0;
    let currentDate
    for (let conferencia of this.conferencias){
      currentDate = new Date()
      if (conferencia.starts > currentDate) {
        sum += 1;
      }
    }
    return sum
  }
}
