import { Component, OnInit, HostListener, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { UserProfileFormControls } from '../../../../interfaces/user.profile.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  animations: [
    trigger('flyInFromTop', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-70px)' }),
        animate(300)
      ])
    ])

  ]
})
export class SignupFormComponent implements OnInit {

  loginBtnClicked = false;
  disableSubmitButton = false;
  countries;
  genders = [];
  languages = [];
  invalid = false;
  private formControls = UserProfileFormControls;
  verifyEmailDialog = false;
  showSignupForm = true;

  //email form control checks
  requiredEmail;
  requiredFirstName;
  requiredLastName;
  requiredMobilePhone
  requiredCountry;
  requiredBirthday;
  requiredLanguage;

  invalidEmail;
  invalidMobilePhone;
  invalidZip;

  userSignup;

  form = this.fb.group({
    first_name: ['', Validators.required],
    family_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile_phone: ['', [Validators.required, Validators.pattern("^\\+[1-9]{1}[0-9]{6,14}$")]],
    country: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    language: [''],
    streetaddress: [''],
    gender: [''],
    zip: ['', Validators.pattern("^[0-9]*$")],
    additionaladdressinfo: [''],
    city: ['' ],
    state: ['' ],
  });



  constructor(private http: HttpClient,
              public authService: AuthService,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private router: Router) {}


  ngOnInit() {
    // load all countries

    this.http.get('http://13.66.167.226/wfceApp/public/api/countries/get')
              .subscribe((countries) => {
          this.countries = countries['payload'];


    });

    // load genders
    this.http.get('http://13.66.167.226/wfceApp/public/api/global/genders')
              .subscribe((genders) => {
          this.genders = genders['payload'];
          this.form.patchValue({gender: this.genders[0]});
    });

    // load languages
    this.http.get('http://13.66.167.226/wfceApp/public/api/global/languages')
              .subscribe((language) => {
          this.languages = language['payload'];
          this.form.patchValue({language: this.languages[0]});
    });

    // make copy of user returned from oAuth
    this.userSignup = { ...this.authService.userSignup };

    const { first_name, family_name, email  } = this.authService.userSignup;

    if(first_name) {
      this.form.patchValue({first_name: first_name});
      this.form.controls['first_name'].disable();
    }
    if(family_name) {
      this.form.patchValue({family_name: family_name});
      this.form.controls['family_name'].disable();
    }
    if(email) {
      this.form.patchValue({email: email});
      this.form.controls['email'].disable();
    }
  }

  countrySelect(event) {
    if(event.srcElement.value != '') {
      this.requiredCountry = false;
    } else {
      this.requiredCountry = true;
    }
  }


  validate(controlName) {

    switch(controlName) {

      case this.formControls.FirstName: {
          // check required
          break;
      }
      case this.formControls.FamilyName: {
        // check required
        break;
      }
      case this.formControls.Email: {

        if(this.required(this.formControls.Email)) {
          this.requiredEmail = true;
          this.invalidEmail = false;
        } else if(this.form.get(this.formControls.Email).hasError('email')) {
          this.requiredEmail = false;
          this.invalidEmail = true;
        } else {
          this.requiredEmail = false;
          this.invalidEmail = false;
        }

        break;
      }
      case this.formControls.MobilePhone: {
        if(this.required(this.formControls.MobilePhone)) {
          this.requiredMobilePhone = true;
          this.invalidMobilePhone = false;
        } else if(this.form.get(this.formControls.MobilePhone).hasError('pattern')) {
            this.requiredMobilePhone = false;
            this.invalidMobilePhone = true;
        } else {
          this.requiredMobilePhone = false;
          this.invalidMobilePhone = false;
        }

        break;
      }
      case this.formControls.DateOfBirth: {
        if(this.required(this.formControls.DateOfBirth)) {
          this.requiredBirthday = true;
        } else {
          this.requiredBirthday = false;
        }
      }
      case this.formControls.Country: {
        if(this.required(this.formControls.Country)) {
          this.requiredCountry = true;
        } else {
          this.requiredCountry = false;
        }
        break;
      }
      case this.formControls.Language: {
        if(this.required(this.formControls.Language)) {
          this.requiredLanguage = true;
        } else {
          this.requiredLanguage = false;
        }

        break;
      }
      case this.formControls.Zip: {
        if(this.form.get(this.formControls.Zip).hasError('pattern')) {
          this.invalidZip = true;
        } else {
          this.invalidZip = false;
        }

        break;
      }

    }
  }

  required(formControl: string) {
    if(this.form.get(formControl).hasError('required')) {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {

    this.loginBtnClicked = true;
    this.disableSubmitButton = true;

    event.preventDefault();
    const controls = Object.keys(this.form.controls)
    for (const control of controls) {
      this.userSignup[control] = this.form.controls[control].value;
    }

    this.http.post('http://13.66.167.226/wfceApp/public/api/signup', this.userSignup)
    .subscribe(

      (user) => {
        // console.log(this.userSignup);
        // this.authService.openSignupDialog.next(false);
        this.authService.user = user['payload'];
        this.http.get(`http://13.66.167.226/wfceApp/public/api/users/verify_mail/${user['payload']['verify_token']}`)
            .subscribe((verfied) => {
              // console.log(verfied)
              this.showSignupForm = false;
              this.verifyEmailDialog = true;
              // this.router.navigate(['/dashboard']);
            },
          (error)=> {
            console.log(error);
          });

      },
      (err) => {
        console.log(err)
        // this.badCredentials = true;
        this.loginBtnClicked = false;
        this.disableSubmitButton = false;
      }
    );

  }

  closeModal() {
    this.verifyEmailDialog = false;
    this.router.navigate(['dashboard']);
  }

}
