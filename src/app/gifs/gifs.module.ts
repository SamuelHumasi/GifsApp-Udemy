import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SheardBoxComponent } from './components/sheard-box/sheard-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomePageComponent, SheardBoxComponent, CardListComponent, CardComponent],
  imports: [CommonModule],
  exports:[HomePageComponent]
})
export class GisfModule {}
