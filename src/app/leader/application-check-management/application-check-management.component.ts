import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-application-check-management',
  templateUrl: './application-check-management.component.html',
  styleUrls: ['./application-check-management.component.css']
})
export class ApplicationCheckManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  reload(): void {
    this.ngOnInit();
  }

}
