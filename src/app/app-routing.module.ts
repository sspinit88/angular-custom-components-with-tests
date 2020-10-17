import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PATHS } from './shared/constants/paths';
import { ModulesPathsEnum } from './shared/enums/paths.enum';


const routes: Routes = [
  {
    path: '',
    redirectTo: PATHS[ModulesPathsEnum.home].path,
    pathMatch: 'full',
  },
  {
    path: PATHS[ModulesPathsEnum.home].path,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: PATHS[ModulesPathsEnum.home].title }
  },
  {
    path: PATHS[ModulesPathsEnum.inputsDemonstration].path,
    loadChildren: () => import('./inputs-demonstration/inputs-demonstration.module').then(m => m.InputsDemonstrationModule),
    data: { title: PATHS[ModulesPathsEnum.inputsDemonstration].title }
  },
  {
    path: PATHS[ModulesPathsEnum.masksDemonstration].path,
    loadChildren: () => import('./masks-demonstration/masks-demonstration.module').then(m => m.MasksDemonstrationModule),
    data: { title: PATHS[ModulesPathsEnum.masksDemonstration].title }
  },
  {
    path: PATHS[ModulesPathsEnum.modalDemonstration].path,
    loadChildren: () => import('./modal-demonstration/modal-demonstration.module').then(m => m.ModalDemonstrationModule),
    data: { title: PATHS[ModulesPathsEnum.modalDemonstration].title }
  },
  {
    path: PATHS[ModulesPathsEnum.selectsDemonstration].path,
    loadChildren: () => import('./selects-demonstration/selects-demonstration.module').then(m => m.SelectsDemonstrationModule),
  },
  {
    path: PATHS[ModulesPathsEnum.tabsDemonstration].path,
    loadChildren: () => import('./tabs-demonstration/tabs-demonstration.module').then(m => m.TabsDemonstrationModule),
  },
  {
    path: '**',
    redirectTo: PATHS[ModulesPathsEnum.home].path,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
