import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AddEditComponent } from '../../components/add-edit/add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    NewsComponent,
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class NewsModule { }
