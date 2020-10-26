import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './shared/components/header/header.module';
import { NavigationBarModule } from './shared/components/navigation-bar/navigation-bar.module';


const itemModules: any[] = [
  NavigationBarModule,
  HeaderModule,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...itemModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
