import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private headerTitle: string = 'title not transferred!';

  constructor(
    private router: Router,
  ) {
    this.getTitle();
  }

  getHeaderTitle(): string {
    return this.headerTitle;
  }

  setHeaderTitle(str: string): void {
    this.headerTitle = str;
  }

  protected getTitle() {
    this.router.events
      .pipe(
        filter((event: any) => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        let root = this.router.routerState.snapshot.root;

        while (root) {
          if (root.children && root.children.length) {
            root = root.children[0];
          } else if (root.data && root.data['title']) {
            this.setHeaderTitle(root.data['title']);
            return;
          } else {
            return;
          }
        }
      });
  }

}


