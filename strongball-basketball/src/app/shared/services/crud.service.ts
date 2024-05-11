import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { News } from '../modals/news';


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
}
