import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-analyse',
  templateUrl: './device-analyse.component.html',
  styleUrls: ['./device-analyse.component.css']
})
export class DeviceAnalyseComponent implements OnInit {

  items =
    [
      {
        "name": "Germany",
        "value": 1000
      },
      {
        "name": "USA",
        "value": 5000
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}
