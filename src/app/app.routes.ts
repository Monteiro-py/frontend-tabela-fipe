import { Routes } from '@angular/router';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { ExibirFipeComponent } from './componentes/exibir-filtro/exibir-fipe.component';

export const routes: Routes = [{path:"especificacoes",component:ExibirFipeComponent},
    {path:"filtro",component:FiltroComponent},
    {
        path:'',
        redirectTo:'/filtro',
        pathMatch:'full'
    }
];
