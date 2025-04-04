import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../content/data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "0";
 
  route: ActivatedRoute;

  constructor(
    route: ActivatedRoute
  ) {
    this.route = route;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value: import('@angular/router').ParamMap) => {
      this.id = value.get('id') ? value.get('id') : '1';
      console.log('id encontrado', this.id);
      this.setValuesToComponent(this.id);
    });

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null): void {
      if (!id) {
          console.log('id invalido');
          return;
      }
  
      const result = dataFake.filter(article => article.id === id)[0];
  
      if (!result) {
          console.log('id nao encontrado');
          return;
      }

      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
      console.log(result);
  }
}


