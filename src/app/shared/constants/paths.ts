import { ModulesPaths } from '../models/path/path.model';
import { ModulesPathsEnum } from '../enums/paths.enum';

export const PATHS: ModulesPaths = {
  [ModulesPathsEnum.inputsDemonstration]: {
    idx: 1,
    path: 'inputs',
    title: 'Inputs Demonstration',
  },
  [ModulesPathsEnum.masksDemonstration]: {
    idx: 2,
    path: 'masks',
    title: 'Masks Demonstration',
  },
  [ModulesPathsEnum.modalDemonstration]: {
    idx: 3,
    path: 'modal',
    title: 'Modal Demonstration',
  },
  [ModulesPathsEnum.selectsDemonstration]: {
    idx: 4,
    path: 'selects',
    title: 'Selects Demonstration',
  },
  [ModulesPathsEnum.tabsDemonstration]: {
    idx: 5,
    path: 'tabs',
    title: 'Tabs Demonstration',
  },
  [ModulesPathsEnum.home]: {
    idx: 6,
    path: 'home',
    title: 'Home',
  }
};
