import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AddEditComponent } from '../../components/add-edit/add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    NewsComponent,
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule
  ],
})
export class NewsModule { }
