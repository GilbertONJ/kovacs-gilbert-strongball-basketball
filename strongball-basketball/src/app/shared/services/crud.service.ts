import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { News } from '../modals/news';
import { ref } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root',
})
export class CrudService {

  constructor(private fireStore: AngularFirestore) { }
  
  createNews(news: News, date: string){
    return this.fireStore.collection<News>('News').doc(date).set(news);
  }

  getAllNews(){
    return this.fireStore.collection<News>('News').valueChanges();
  }

  deleteNews(date: string){
    return this.fireStore.collection<News>('News').doc(date).delete();
  }
  
  getMyNews(){
    return this.fireStore.collection<News>('News', ref => ref.where('name', '==', JSON.parse(localStorage.getItem('user') as string).email)).valueChanges();
  }
}
