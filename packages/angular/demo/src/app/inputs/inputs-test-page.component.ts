import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inputs-test-page',
  templateUrl: './inputs-test-page.component.html',
  styleUrls: ['./inputs-test-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputsTestPageComponent implements OnInit {
  testCheckboxOne = true;
  testInputOne = 'This is data for test input one';

  constructor() {}

  ngOnInit() {}
}