import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';






@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
