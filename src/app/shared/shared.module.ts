import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
