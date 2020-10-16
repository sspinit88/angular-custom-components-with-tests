import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent
  implements OnInit {
  title = 'angular-custom-components-with-tests';

  ngOnInit(): void {
    console.log('console');
  }

}
