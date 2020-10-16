import { ModulesPathsEnum } from '../../constants/paths.enum';

export interface ModulesPaths {
  [ModulesPathsEnum.inputsDemonstration]: Path;
  [ModulesPathsEnum.masksDemonstration]: Path;
  [ModulesPathsEnum.selectsDemonstration]: Path;
  [ModulesPathsEnum.modalDemonstration]: Path;
  [ModulesPathsEnum.tabsDemonstration]: Path;
}

export interface Path {
  idx: number;
  path: string;
  title: string;
}
