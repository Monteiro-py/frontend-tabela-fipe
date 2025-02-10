import { Component, Input, OnInit, QueryList } from '@angular/core';

import { Marcas } from '../../interfaces/marca';
import { EspecificacaoCompleta } from '../../interfaces/especificacao-completa';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContainerComponent } from "../container/container.component";

import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FormsModule,ContainerComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent implements OnInit {
 
  
  marcas:Marcas[]=[];
  marcaSelecionada:string=""
  veiculos2:Marcas[]=[];
  especificacoes:Marcas[]=[];
  combustivelAndAno:string='';
  especificacaoCompleta:EspecificacaoCompleta={
    valor:'',
    marca:'',
    modelo:'',
    anoModelo:'',
    combustivel:'',
    mesReferencia:''}

  opcaoSelecionada=''
  carroBuscado=''
  modeloBuscado=''

  informacaoPronta:boolean=false;

  constructor(private service:ServiceService,private dataService:DataServiceService ,private router:Router){}
  momentFomrs!:FormGroup;

  ngOnInit(): void {
  this.obterMarcas();
  this.momentFomrs=new FormGroup({
    marca:new FormControl('',[Validators.required]),
    veiculo:new FormControl('',[Validators.required]),
    modelo:new FormControl('',[Validators.required])    
  });
  }
    public obterMarcas(){
      this.service.obterListaDeMarcas().subscribe((m)=>{this.marcas=m;
        return this.marcas;
      });
     
  }
  obterVeiculos(event:Event){
    const opcoes=event.target as HTMLSelectElement;
    const carroSelecionado=opcoes.value
    this.marcaSelecionada=carroSelecionado;
    this.service.enviarMarcaEscolhida(this.marcaSelecionada).subscribe((carros)=>{
      this.veiculos2=carros.modelos;
      
    })
  }
  obterEspecificacaoVeiculos(event:Event){
    const opcoes=event.target as HTMLSelectElement;
    const carroSelecionado=opcoes.value;
    this.service.enviarCarroSelecionado(carroSelecionado).subscribe((especificacao)=>{
      this.especificacoes=especificacao;
    })
  }
  obterAnoEcombustivel(event:Event){
    const opcoes=event.target as HTMLSelectElement;
    const combustivelEano=opcoes.value;
    this.combustivelAndAno=combustivelEano;
  }
  
  obterEspecificacaoCompleta(){
    this.informacaoPronta=true;
    this.service.enviarAnoEcombustivel(this.combustivelAndAno).subscribe((especificacao)=>{ this.especificacaoCompleta={
    valor:especificacao.valor,
    marca:especificacao.marca,
    modelo:especificacao.modelo,
    anoModelo:especificacao.anoModelo,
    combustivel:especificacao.combustivel,
    mesReferencia:especificacao.mesReferencia,
    }
    this.dataService.setEspecificacaoCompleta(this.especificacaoCompleta);
    this.router.navigate(['/especificacoes']);
    
  })}
  resetarEspecificacoCompleta(){
    window.location.reload(); 
  }  
}
