import { Component, Input } from '@angular/core';
import { Gif, GifSearchResponse } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent { 
  @Input()
  public gifsList:Gif[]=[]
  
  constructor(){  }

}
