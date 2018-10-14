import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user;

  constructor() { }

  public importUser(){
      this.user = {
          name: "cree",
          avatar: "assets/img/temp/pic.png",
          email: "franciscoggg@gmail.com",
          country: "London, United Kingdom",
          role: "user"
      }
  }
  
  public getUser() {
    this.importUser();
    return this.user;
  }

  public saveUser(user){
      //api for save
  }
}