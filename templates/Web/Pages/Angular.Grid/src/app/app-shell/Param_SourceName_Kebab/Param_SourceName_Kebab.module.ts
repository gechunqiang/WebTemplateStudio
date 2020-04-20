﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularGridComponent } from './Param_SourceName_Kebab.component';
import { Param_SourceName_PascalRoutingModule } from './Param_SourceName_Kebab-routing.module';
import { GridItemComponent } from './grid-item/grid-item.component';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

@NgModule({
  declarations: [AngularGridComponent, GridItemComponent],
  imports: [
    CommonModule,
    WarningMessageModule,
    Param_SourceName_PascalRoutingModule
  ]
})
export class Param_SourceName_PascalModule { }
