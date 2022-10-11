import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup

  langs: string[] = [
    "English",
    "Chinese"
  ]


  constructor() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
