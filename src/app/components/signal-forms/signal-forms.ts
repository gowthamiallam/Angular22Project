import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormRoot, FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {

  employeeModel = signal({                    //created a employeeModel Signal // Define your form signal schema
    empName: '',
    empCity: '',
    empState: ''
  });

  employeeForm = form(this.employeeModel, (schema) => { //Initiliazing the signal using form
    required(schema.empName, { message: 'Name is Required' }),
      required(schema.empCity, { message: 'City is Required' }),
      required(schema.empState, { message: 'State is Required' })
    minLength(schema.empName, 4, { message: 'Minimum 4 characters needed' })
  });

  onSave() {
    const formValue = this.employeeForm().value();
    console.log(formValue, "Employee Object")

  }
  cancel() {
    this.employeeForm().reset({
      empName: '',
      empCity: '',
      empState: ''
    });
  }
}
