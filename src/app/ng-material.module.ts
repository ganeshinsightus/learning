import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTabsModule
    } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    AgGridModule.withComponents([]),
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  exports: [
    AgGridModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class NgMaterialModule {}
