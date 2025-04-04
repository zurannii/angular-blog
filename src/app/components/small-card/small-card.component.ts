import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnChanges {
  @Input() Id: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() photoCover: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inputs atualizados:', changes);
  }
}
