import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../services/navigation/navigation.service';

import { Path } from '../../../models/path/path.model';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent
  implements OnInit {

  navData: Path[] = [];
  isReady: boolean;

  constructor(
    private navigationService: NavigationService,
  ) {
    this.isReady = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.navData = [...this.navigationService.getModulesPaths()];
    this.isReady = true;
  }

}
