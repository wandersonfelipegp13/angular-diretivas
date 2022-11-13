import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  tecnologias: string[] = [];
  futuras: string[] = [];

  constructor() {
    this.tecnologias = ['Angular', 'Spring', 'RabbitMQ', 'MySQL'];

    this.futuras = ['Go', 'Rust', 'Swift'];
  }

  ngOnInit(): void {}

  add(): void {
    if (this.futuras.length > 0)
      this.tecnologias.push(this.futuras.pop() || '');
  }

  remove(index: number): void {
    this.futuras.push(this.tecnologias.splice(index, 1)[0]);
  }
}
