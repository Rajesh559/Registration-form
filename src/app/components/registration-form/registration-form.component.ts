import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  regForm : FormGroup;
  genders = [
    "Male",
    "Female",
  ];
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  departments = [
    "Frontend",
    "PHP",
    "Android",
    "IOS"
  ];
  skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "PHP",
    "Jquery"
];

  validation_messages =  {
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'gender': [
      { type: 'required', message: 'Select your Gender'}
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'dob': [
      { type: 'required', message: 'Date of Birth is required'}
    ],
    'address': [
      { type: 'required', message: 'Address is required'}
    ],
    'cell' : [
      { type: 'required', message: 'Mobile Number is  mandotory' },
      { type: 'minlength', message: 'Enter a valid Mobile number' },
      { type: 'maxlength', message: 'Enter a valid Mobile number' },
      { type: 'pattern', message: 'Enter a valid Mobile number' },
    ],
    
    'password' : [
      { type: 'required', message: 'Password is mandotory' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'maxlength', message: 'Password cannot be more than 15 characters long' },
      { type: 'pattern', message: 'Your Password not contain spaces' },
    ],
    'cpassword' : [
      { type: 'required', message: 'Password is mandotory' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'maxlength', message: 'Password cannot be more than 15 characters long' },
      { type: 'pattern', message: 'Your Password not contain spaces' },
    ],
    'department' : [
      { type: 'required', message: 'Select one department'}
    ],
    
    
  };

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }


  createForms() {
    this.regForm = this.fb.group({
      firstName : new FormControl('', Validators.required),
      gender: new FormControl(this.genders[0], Validators.required),
      dob : new FormControl('', Validators.required),
      address : new FormControl('',Validators.required),
      cell : new FormControl('',Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('[0-9]+')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^\S+$/),
      ])),
      cpassword : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^\S+$/),
      ])),
      department : new FormControl(this.departments[0], Validators.required),
    });
  }
  reset() {
    this.regForm.reset();
  }
}
