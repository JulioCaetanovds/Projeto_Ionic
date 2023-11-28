import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pagina/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pagina/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'portifolio',
    loadComponent: () => import('./pagina/portifolio/portifolio.page').then( m => m.PortifolioPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pagina/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
];
