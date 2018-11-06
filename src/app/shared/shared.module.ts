import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule

} from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatFormFieldModule,
        MatTableModule,
        FlexLayoutModule,
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
