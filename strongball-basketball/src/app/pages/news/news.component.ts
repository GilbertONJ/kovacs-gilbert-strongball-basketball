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
  editedNews: string = '';
  editedNewsKey: string = '';

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

  update(value: string){
    let obj: News = {
      name: this.getCurrentUserEmail(),
      text: value,
      date: this.editedNewsKey
    }
    this.crud.createNews(obj, this.editedNewsKey).then(_ => {
      this.cancel()
    }).catch(error => {
      console.error(error);
    });
  }

  cancel(){
    this.editedNewsKey = '';
    this.editedNews = '';
  }

  edit(news: string, key: string){
    this.editedNews = news;
    this.editedNewsKey = key;
  }

  getAllNews(){
    this.sub = this.crud.getAllNews().subscribe(
      (data: any) => {
        if(data){
          this.news = data;
        }
      }, error => {
         console.error(error);
      });
  }

  getMyNews(){
    this.sub = this.crud.getMyNews().subscribe(
      (data: any) => {
        if(data){
          this.news = data;
        }
      }, error => {
         console.error(error);
      });
  }

  ngOnInit(){
    this.getAllNews();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
