import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../../auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserProfileFormControls } from '../../../../interfaces/user.profile.interface';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  @Input()
  user;

  countries = [];
  languages = [];

  requiredEmail;
  requiredFirstName;
  requiredLastName;
  requiredMobilePhone
  requiredCountry;
  requiredBirthday;
  requiredLanguage;
  formControls = UserProfileFormControls;
  saveChangesBtnClicked = false;
  disableSubmitButton = false;

  userProfile = {}

  invalidEmail;
  invalidMobilePhone;

  form = this.fb.group({
    first_name: ['', Validators.required],
    family_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile_phone: ['', [Validators.required, Validators.pattern("^\\+[1-9]{1}[0-9]{3,14}$")]],
    country: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    image_url: '',
    language: ['', Validators.required]
  });

  constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://13.66.167.226/wfceApp/public/api/countries/get')
              .subscribe((countries) => {
          this.countries = countries['payload'];
    });
     // load languages
     this.http.get('http://13.66.167.226/wfceApp/public/api/global/languages')
     .subscribe((language) => {
        this.languages = language['payload'];
        // this.form.patchValue({language: this.languages[0]});
      });
    this.userProfile = { ...this.authService.user };

    this.form.patchValue({first_name: this.userProfile["first_name"]});
    this.form.controls['first_name'].disable();

    this.form.patchValue({family_name: this.userProfile["family_name"]});
    this.form.controls['family_name'].disable();

    this.form.patchValue({email: this.userProfile["email"]});
    this.form.controls['email'].disable();

    this.form.patchValue({mobile_phone: this.userProfile["mobile_phone"]});
    // this.form.patchValue({country: this.userProfile["country"]});
    this.form.controls['country'].setValue(this.userProfile["country"], {onlySelf: true});
    this.form.patchValue({date_of_birth: this.userProfile["date_of_birth"]});
    this.form.patchValue({image_url: this.userProfile["image_url"]});
    this.userProfile["language"] = "English";
    // this.form.patchValue({language: [this.userProfile["language"]]});
    this.form.controls['language'].setValue(this.userProfile["language"], {onlySelf: true});
      console.log(this.form)
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
        if(this.required(this.formControls.FirstName)) {
          this.requiredFirstName = true;
        }  else {
          this.requiredFirstName = false;
        }
          break;
      }
      case this.formControls.FamilyName: {
        if(this.required(this.formControls.FamilyName)) {
          this.requiredLastName = true;
        }  else {
          this.requiredLastName = false;
        }
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

    }
  }

  required(formControl: string) {
    if(this.form.get(formControl).hasError('required')) {
      return true;
    } else {
      return false;
    }
  }

  saveChanges() {
    // this.userService.saveUser(this.user);
    this.saveChangesBtnClicked = true;
    this.disableSubmitButton = true;

    event.preventDefault();
    const controls = Object.keys(this.form.controls);
    for (const control of controls) {
      this.userProfile[control] = this.form.controls[control].value;
    }
    console.log(this.userProfile);
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      /* const [file] = <File>event.target.files;
      console.log(file);
      reader.readAsDataURL(file); */

     // reader.onload = () => {
      //  console.log(reader.result);
        /* this.formGroup.patchValue({
          file: reader.result
       });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck(); */
     // };

      /* const fd = new FormData();
      fd.append('image', file, file.name);
      this.http.post("",fd, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        console.log(event);
      }) */
    }
  }

}
