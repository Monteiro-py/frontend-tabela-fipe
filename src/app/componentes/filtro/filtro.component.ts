import { Component, Input, OnInit, QueryList } from '@angular/core';

import { Marcas } from '../../interfaces/marca';
import { EspecificacaoCompleta } from '../../interfaces/especificacao-completa';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContainerComponent } from "../container/container.component";
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FormsModule,ContainerComponent],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent implements OnInit {
 
  
  marcas:Marcas[]=[];
  marcaSelecionada:string=""
  veiculos2:Marcas[]=[];
  especificacoes:Marcas[]=[];
  combustivelAndAno:string='';
  especificacaoCompleta:EspecificacaoCompleta={TipoVeiculo:'',
    Valor:'',
    Marca:'',
    Modelo:'',
    Anomodelo:'',
    Combustivel:'',
    CodigoFipe:'',
    MesReferencia:'',
    SiglaCombustivel:''}

  opcaoSelecionada=''
  carroBuscado=''
  modeloBuscado=''

  informacaoPronta:boolean=false;

  constructor(private service:ServiceService, private router:Router){}
  
  ngOnInit(): void {
   this.obterMarcas();
  }
    public obterMarcas(){
      this.service.obterListaDeMarcas().subscribe((m)=>{this.marcas=m;
        return this.marcas;
      });
     
  }
  obterVeiculos(event:Event){
    console.log("NgModule"+this.opcaoSelecionada)
    const opcoes=event.target as HTMLSelectElement;
    const carroSelecionado=opcoes.value
    this.marcaSelecionada=carroSelecionado;
    console.log(carroSelecionado);
    console.log(this.marcaSelecionada);
    this.service.enviarMarcaEscolhida(this.marcaSelecionada).subscribe((carros)=>{
      this.veiculos2=carros.modelos;
      console.log(carros.modelos);
      
    })
  }
  obterEspecificacaoVeiculos(event:Event){
    const opcoes=event.target as HTMLSelectElement;
    const carroSelecionado=opcoes.value;
    console.log(carroSelecionado)
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
    this.service.enviarAnoEcombustivel(this.combustivelAndAno).subscribe((especificacao)=>{ this.especificacaoCompleta={TipoVeiculo:especificacao.TipoVeiculo,
    Valor:especificacao.Valor,
    Marca:especificacao.Marca,
    Modelo:especificacao.Modelo,
    Anomodelo:especificacao.Anomodelo,
    Combustivel:especificacao.Combustivel,
    CodigoFipe:especificacao.CodigoFipe,
    MesReferencia:especificacao.MesReferencia,
    SiglaCombustivel:especificacao.SiglaCombustivel
    }
    
    
    localStorage.setItem('especificacao', JSON.stringify(this.especificacaoCompleta));
    this.router.navigate(['/especificacoes']);
    
  })
    

    

    
    
  }

  
  resetarEspecificacoCompleta(){
    window.location.reload();
    
  }
  
}
