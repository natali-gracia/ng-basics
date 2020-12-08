import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required, MyValidators.restrictedEmails],
        [MyValidators.uniqEmail]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([]),
    });
    console.log(this.form.get('email'));
  }

  setCapital() {
    const cityMap = {
      ua: 'Kyiv',
      ru: 'Moscow',
      by: 'Minsk',
    };

    const city = cityMap[this.form.get('address').get('country').value];
    console.log(city);
    this.form.patchValue({ address: { city: city } });
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills'))
    (this.form.get('skills') as FormArray).push(control);
  }
  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      console.log('Form Data: ', formData);
    }
    this.form.reset();
  }
}
