import { Injectable } from '@angular/core';
import { Marcas } from './interfaces/marca';
import { Veiculos } from './interfaces/veiculos';
import { EspecificacaoCompleta } from './interfaces/especificacao-completa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly API='https://backend-tabela-fipe-production.up.railway.app/marcas'
  constructor(private http: HttpClient) { }

  obterListaDeMarcas():Observable<Marcas[]>{
    return this.http.get<Marcas[]>(this.API);
  }
  enviarMarcaEscolhida(carro:string):Observable<Veiculos>{
    return this.http.post<Veiculos>(this.API+"/veiculos",carro);
  }
  enviarCarroSelecionado(codigo:string):Observable<Marcas[]>{
    return this.http.post<Marcas[]>(this.API+"/especificacoes",codigo)   
  }
  enviarAnoEcombustivel(anoECombustivel:string):Observable<EspecificacaoCompleta>{
    return this.http.post<EspecificacaoCompleta>(this.API+"/especificacaoCompleta",anoECombustivel)   
  } 
}
