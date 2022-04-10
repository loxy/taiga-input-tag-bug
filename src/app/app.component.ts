import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    foo: new FormControl(),
    bar: new FormControl(),
  });
  readonly types = ['Option A', 'Option B', 'Option C'];
}
