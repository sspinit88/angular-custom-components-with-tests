import { Injectable } from '@angular/core';

import { PATHS } from '../../constants/paths';
import { Path } from '../../models/path/path.model';
import { ModulesPathsEnum } from '../../enums/paths.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() {
  }

  getModulesPaths(): Path[] {
    const modulesNames: string[] = [];
    const res: Path[] = [];

    for (const i in ModulesPathsEnum) {
      modulesNames.push(ModulesPathsEnum[i]);
    }

    for (const i in PATHS) {
      if (
        PATHS.hasOwnProperty(i) &&
        modulesNames.includes(i)
      ) {
        res.push(PATHS[i]);
      }
    }

    return res;
  }

}
