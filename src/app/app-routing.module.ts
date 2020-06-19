import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'dette',
    loadChildren: () => import('./dette/dette.module').then( m => m.DettePageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'plus',
    loadChildren: () => import('./plus/plus.module').then( m => m.PlusPageModule)
  },  {
    path: 'depense-edit',
    loadChildren: () => import('./depense-edit/depense-edit.module').then( m => m.DepenseEditPageModule)
  },
  {
    path: 'dette-edit',
    loadChildren: () => import('./dette-edit/dette-edit.module').then( m => m.DetteEditPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
