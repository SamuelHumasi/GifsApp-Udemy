import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{
  
  @Input()
  public gifs!:Gif
  
  ngOnInit(): void {
    if(!this.gifs){
      throw new Error('Gif is required');
    }
  } 

}

