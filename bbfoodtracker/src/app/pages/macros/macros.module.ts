import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacrosPageRoutingModule } from './macros-routing.module';

import { MacrosPage } from './macros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacrosPageRoutingModule
  ],
  declarations: [MacrosPage]
})
export class MacrosPageModule {}
