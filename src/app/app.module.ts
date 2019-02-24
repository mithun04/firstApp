import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
