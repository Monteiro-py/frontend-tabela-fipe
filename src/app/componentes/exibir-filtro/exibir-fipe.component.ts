import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EspecificacaoCompleta } from '../../interfaces/especificacao-completa';

@Component({
  selector: 'app-exibir-fipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exibir-fipe.component.html',
  styleUrl: './exibir-fipe.component.css'
})
export class ExibirFipeComponent {
     especificacaoCompleta:EspecificacaoCompleta={TipoVeiculo:'',
        Valor:'',
        Marca:'',
        Modelo:'',
        Anomodelo:'',
        Combustivel:'',
        CodigoFipe:'',
        MesReferencia:'',
        SiglaCombustivel:''}
      
  constructor(private route: ActivatedRoute){
    const especificacaoJson = localStorage.getItem('especificacao');
  if (especificacaoJson !=null) {
    this.especificacaoCompleta = JSON.parse(especificacaoJson); 
    console.log(this.especificacaoCompleta+"foi");
     }
  }
}
