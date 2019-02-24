import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonServiceService} from '../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() clicked = new EventEmitter();
  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
  }

  openNav() {
    this.commonService.clicked.next();
  }
}
