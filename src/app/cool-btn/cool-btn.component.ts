import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-btn',
  templateUrl: './cool-btn.component.html',
  styleUrls: ['./cool-btn.component.css']
})
export class CoolBtnComponent implements OnInit {

  @Input()
  texto: string = 'cool button'

  constructor() { }

  ngOnInit(): void {
  }

}
