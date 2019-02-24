import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CommonServiceService} from '../common-service.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  @ViewChild('mySidepanel') mySidepanel: ElementRef;

  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    this.commonService.clicked.subscribe(
      () => {
        this.mySidepanel.nativeElement.style.width = '250px';
      }
    );
  }

  /* Set the width of the sidebar to 0 (hide it) */
  closeNav(mySidepanel) {
    mySidepanel.style.width = '0';
  }
}
