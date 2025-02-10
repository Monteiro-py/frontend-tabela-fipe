import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EspecificacaoCompleta } from '../../interfaces/especificacao-completa';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-exibir-fipe',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './exibir-fipe.component.html',
  styleUrl: './exibir-fipe.component.css'
})
export class ExibirFipeComponent {
     especificacaoCompleta:EspecificacaoCompleta={
        valor:'',
        marca:'',
        modelo:'',
        anoModelo:'',
        combustivel:'',
        mesReferencia:''}
      
  constructor(private route: ActivatedRoute,private dataService:DataServiceService){
  const especificacaoJson = dataService.getEspecificacaoCompleta();
  if (especificacaoJson !=null) {
    this.especificacaoCompleta = especificacaoJson;
  }
  
  }
  
}
