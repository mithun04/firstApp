import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  openSidePane(mySidepanel) {
         mySidepanel.style.width = '250px';
  }
}
