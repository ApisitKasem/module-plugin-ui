import { Routes } from '@angular/router';
import {MainLayoutComponent} from './pages/layout/main-layout/main-layout.component';
import {HomeComponent} from './pages/home/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'plugin',
        loadComponent: () => import('plugin-lib').then(m => m.PluginComponent)
      },
      {
        path: 'plugin2',
        loadComponent: () => import('plugin-lib').then(m => m.Plugin2Component)
      },
      {
        path: 'form',
        loadComponent: () => import('plugin-lib').then(m => m.FormPageComponent)
      },
      {
        path:'dashboard',
        loadComponent: () => import('plugin-lib').then(m => m.DashboardPageComponent)
      }
    ]
  }
];
