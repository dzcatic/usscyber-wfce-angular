import {Injectable, Injector} from "@angular/core";
import {Subject, Observable, Subscription} from "rxjs";
import { AppError } from "../model/interface/app.error";

@Injectable()
export class GlobalErrorService {

  public errors: AppError[] = [];
  public breakingErrors: AppError[] = [];
  public appErrorSubject: Subject<AppError[]> = new Subject();
  public appErrorObservable: Observable<AppError[]>;

  // private sub: Subscription;

  constructor(injector: Injector) {
    this.appErrorObservable = this.appErrorSubject.asObservable();
  }

  getErrors(): any[] {
    return Object.assign([], this.errors)
  }

  hasErrors(): boolean {
    return this.errors.length !== 0
  }

  hasBreakingErrors(): boolean {
    return this.breakingErrors.length !== 0
  }

  changeErrors(errors: AppError[]) {
    console.log(errors)
    this.breakingErrors = [];
    errors.forEach((e: AppError) => {
      if (e.code === 500) {
        this.breakingErrors.push(e)
      }
    })
    this.errors = Object.assign([], errors)
    this.appErrorSubject.next(errors)

  }


  observeErrors(): Observable<AppError[]> {
    return this.appErrorObservable;
  }
}






