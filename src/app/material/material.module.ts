import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';


const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatSliderModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
