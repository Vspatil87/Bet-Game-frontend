import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box/input-box.component';
import { Range1000BtnComponent } from './range1000-btn/range1000-btn.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WinningStripComponent } from './winning-strip/winning-strip.component';
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';
import { PlayOptionsComponent } from './play-options/play-options.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    Range1000BtnComponent,
    SidebarComponent,
    WinningStripComponent,
    HeaderButtonsComponent,
    PlayOptionsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputBoxComponent,
    SidebarComponent,
    WinningStripComponent,
    Range1000BtnComponent,
    HeaderButtonsComponent,
    PlayOptionsComponent,
    FooterComponent
  ]
})

export class ComponentsModule { }