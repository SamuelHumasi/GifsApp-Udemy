import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public sheardTagList:string[]=[]

  constructor(private _gifsService:GifsService) { }

  get tagList (){
    return this._gifsService.sheardtags
  }

  searchGifs(tag:string){
    this._gifsService.addHistoryTags(tag)
  }
}
