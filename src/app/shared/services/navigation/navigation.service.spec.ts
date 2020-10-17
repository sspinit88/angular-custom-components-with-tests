import { NavigationService } from './navigation.service';
import { PATHS } from '../../constants/paths';


describe('NavigationService', () => {

  let service: NavigationService;

  beforeEach(() => {
    service = new NavigationService();
  });

  it('should return all modules paths', () => {
    const array: string[] = [];
    const res = service.getModulesPaths();

    for (const i in PATHS) {
      if (PATHS.hasOwnProperty(i)) {
        array.push(i);
      }
    }

    expect(res.length).toEqual(array.length);
  });
});
