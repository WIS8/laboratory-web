import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-model-management',
  templateUrl: './model-management.component.html',
  styleUrls: ['./model-management.component.css']
})
export class ModelManagementComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

}
