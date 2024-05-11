import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../../shared/services/crud.service';
import { News } from '../../shared/modals/news';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
  providers: [DatePipe]
})
export class AddEditComponent {
  newsForm: FormGroup;
  obj? : News;
  constructor(private _fb: FormBuilder, private crud: CrudService, private datePipe: DatePipe){
    this.newsForm = this._fb.group({
      text: ''
    });
  }

  onFormSubmit(){
    if(this.newsForm.valid){
      let date: Date = new Date();
      this.obj = {
        name: JSON.parse(localStorage.getItem('user') as string).email as string,
        text: this.newsForm.value.text,
        date: this.datePipe.transform(date, 'yyyy-MM-dd HH:mm-ss') as string
      }
      this.crud.createNews(this.obj, this.obj.date).then(_ => {

      }).catch(error => {
        console.error(error);
      });
    }
  }
}
