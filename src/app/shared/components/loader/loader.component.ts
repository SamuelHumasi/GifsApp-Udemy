import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {
  
  @Input()
  public source!: Gif;

  @Input()
  public loader!:string

  public hasLoaded:boolean=false

  ngOnInit(): void {
    if (!this.source) {
      throw new Error('Gif is required');
    }
  }

  onload(){
    this.hasLoaded = true
  }
}
