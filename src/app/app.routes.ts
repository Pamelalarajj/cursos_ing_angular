import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { PresentacionPamela } from './presentacion-pamela/presentacion-pamela';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'pamela', component: PresentacionPamela }
];