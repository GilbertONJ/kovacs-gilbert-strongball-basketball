import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../../components/add-edit/add-edit.component';
import { Subscription } from 'rxjs';
import { CrudService } from '../../shared/services/crud.service';
import { News } from '../../shared/modals/news';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit, OnDestroy{
  sub?: Subscription;
  news?: Array<News>;

  constructor(private _dialog: MatDialog, private crud: CrudService){}

  openAddEditForm() {
    this._dialog.open(AddEditComponent);
  }

  getCurrentUserEmail(){
    return JSON.parse(localStorage.getItem('user') as string).email;
  }

  delete(date: string){
    this.crud.deleteNews(date).then(_ => {

    }).catch(error => {
      console.error(error);
    });
  }

  ngOnInit(){
    this.sub = this.crud.getAllNews().subscribe(
      (data: any) => {
        if(data){
          this.news = data;
        }
      }, error => {
         console.error(error);
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
