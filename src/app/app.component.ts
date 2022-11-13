import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-diretivas';
  isAliveCard: boolean = true;
  menuType: string = 'user';
  projeto: string = '';
  projetos: string[] = [];

  showOrHide(): void {
    this.isAliveCard = !this.isAliveCard;
  }

  adicionarProjeto(): void {
    if (this.projeto !== '') this.projetos.push(this.projeto);
  }

  removerProjeto(indice: number): void {
    this.projetos.splice(indice, 1);
  }
}
