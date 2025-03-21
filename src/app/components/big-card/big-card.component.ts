import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule], // Importa o RouterModule para usar [routerLink]
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  photoCover: string = 'https://img.freepik.com/fotos-gratis/fundo-humano-do-aperto-de-mao-do-robo-era-digital-futurista_53876-129770.jpg?uid=R142512436&ga=GA1.1.972304624.1723201760&semt=ais_hybrid';
  cardTitle: string = 'A Revolução da Inteligência Artificial nas Indústrias';
  cardDescripition: string = 'A inteligência artificial (IA) é uma tecnologia que simula a capacidade humana de aprender, raciocinar, perceber, tomar decisões e resolver problemas. A IA é capaz de processar grandes volumes de dados e identificar padrões, o que permite que as máquinas aprendam com os erros e acertos, e melhorem continuamente o desempenho de suas tarefas.';
  Id: string = '';
}

