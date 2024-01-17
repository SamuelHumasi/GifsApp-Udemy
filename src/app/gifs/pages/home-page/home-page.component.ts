import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl:'./home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent { 

  constructor( private _gifService: GifsService){  }

  get gifsList (){
    return this._gifService.gifsList
  }
}
