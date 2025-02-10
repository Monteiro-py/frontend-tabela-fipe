import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EspecificacaoCompleta } from '../interfaces/especificacao-completa';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataSubject = new BehaviorSubject<EspecificacaoCompleta>({
    valor: '',
    marca: '',
    modelo: '',
    anoModelo: '',
    combustivel: '',
    mesReferencia: ''
  });
  constructor() { }
  setEspecificacaoCompleta(especificacaoCompleta:EspecificacaoCompleta) {
    this.dataSubject.next(especificacaoCompleta);
  }
  getEspecificacaoCompleta(): EspecificacaoCompleta {
    return this.dataSubject.value;
  }
}