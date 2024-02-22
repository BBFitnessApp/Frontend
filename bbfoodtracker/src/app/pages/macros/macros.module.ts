import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacrosPageRoutingModule } from './macros-routing.module';

import { MacrosPage } from './macros.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacrosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MacrosPage]
})
export class MacrosPageModule {}
