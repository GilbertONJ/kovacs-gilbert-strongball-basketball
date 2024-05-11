import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent {
  newsForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.newsForm = this._fb.group({
      name: '',
      text: ''
    });
  }

  onFormSubmit(){
    if(this.newsForm.valid){
      console.log(this.newsForm.value);
    }
  }
}
