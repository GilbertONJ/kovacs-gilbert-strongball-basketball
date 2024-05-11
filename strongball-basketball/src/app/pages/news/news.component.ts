import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../../components/add-edit/add-edit.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  constructor(private _dialog: MatDialog){}

  openAddEditForm() {
    this._dialog.open(AddEditComponent);
  }
}
