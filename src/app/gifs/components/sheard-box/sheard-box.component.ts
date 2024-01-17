import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-sheard-box',
  template: `<h3>Buscar:</h3>
    <input
      type="text"
      placeholder="Buscar..."
      class="form-control"
      (keyup.enter)="printTag()"
      #gifTagInput
    />`,
})
export class SheardBoxComponent {
  
  @ViewChild('gifTagInput')
  public gifTagInput!: ElementRef<HTMLInputElement>;
  constructor(
    private _gifsTagsService:GifsService
  ) {}

  printTag() {
    const newTag = this.gifTagInput.nativeElement.value;
    this._gifsTagsService.addHistoryTags(newTag)
    this.gifTagInput.nativeElement.value = '';

  }
}
