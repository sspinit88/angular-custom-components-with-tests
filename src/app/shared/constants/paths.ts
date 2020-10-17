import { ModulesPaths } from '../models/path/path.model';
import { ModulesPathsEnum } from '../enums/paths.enum';

export const PATHS: ModulesPaths = {
  [ModulesPathsEnum.home]: {
    idx: 1,
    path: 'home',
    title: 'Home',
  },
  [ModulesPathsEnum.inputsDemonstration]: {
    idx: 2,
    path: 'inputs',
    title: 'Inputs Demonstration',
  },
  [ModulesPathsEnum.masksDemonstration]: {
    idx: 3,
    path: 'masks',
    title: 'Masks Demonstration',
  },
  [ModulesPathsEnum.modalDemonstration]: {
    idx: 4,
    path: 'modal',
    title: 'Modal Demonstration',
  },
  [ModulesPathsEnum.selectsDemonstration]: {
    idx: 5,
    path: 'selects',
    title: 'Selects Demonstration',
  },
  [ModulesPathsEnum.tabsDemonstration]: {
    idx: 6,
    path: 'tabs',
    title: 'Tabs Demonstration',
  },
};
