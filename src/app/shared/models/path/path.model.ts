import { ModulesPathsEnum } from '../../enums/paths.enum';

export interface ModulesPaths {
  [ModulesPathsEnum.inputsDemonstration]: Path;
  [ModulesPathsEnum.masksDemonstration]: Path;
  [ModulesPathsEnum.selectsDemonstration]: Path;
  [ModulesPathsEnum.modalDemonstration]: Path;
  [ModulesPathsEnum.tabsDemonstration]: Path;
  [ModulesPathsEnum.home]: Path;
}

export interface Path {
  idx: number;
  path: string;
  title: string;
}
