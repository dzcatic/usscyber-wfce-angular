import {Injector} from "@angular/core";
import {RequestService} from "./request.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import { GlobalErrorService } from "./global.error.state.service";
import { CallbackFunction } from "./callback.function";
import { AppError } from "../../model/app.error";


export abstract class AbstractService {
  protected requestService: RequestService
  private router: Router;
  private errorService: GlobalErrorService;

  constructor(injector: Injector) {

    this.router = injector.get(Router);
    this.errorService = injector.get(GlobalErrorService);
    this.requestService = injector.get(RequestService);
  }

  // Use this in the case of async getting the data and just assigning it to variables in callback
  protected _subscribe<T>(observable: Observable<any>, clb: CallbackFunction<T>, format: boolean = true, errorClb?: CallbackFunction<any>, completeClb?: () => void) {
    return observable.subscribe(
      data => {
        //console.log(e)
        //const data = e.json();
        
        if (data.isError) {
          if (data.code === 401) {
            const erpError = new AppError();
            erpError.name = 'Not logged In'
            erpError.displayName = 'error.notLoggedIn'
            erpError.code = data.code
            this.errorService.changeErrors([erpError])
          }
          if (data.code === 403 || data.code === 405) {
            const erpError = new AppError();
            erpError.name = 'Not found!'
            erpError.displayName = 'error.erpNotFound'
            erpError.code = data.code
            this.errorService.changeErrors([erpError])
          }

          if (errorClb) {

            errorClb(data)

          }
        } else {
          if(format){
            clb(data.payload)
          }
          else
          {
            clb(data)
          }
          
          if (completeClb) {
            completeClb()
          }
          //return data.payload;
        }
      }
      , (data) => {
        //const data = e.json();
        console.log(data)
        if (errorClb) {
          errorClb(data)
        } else {
          if (data.code === 405 || data.code === 403) {
            // TODO:  error callback should normally trigger
            this.router.navigate(['/'])
          } else {

            const erpError = new AppError();
            erpError.name = 'Server error!'
            erpError.displayName = 'error.server'
            erpError.code = data.status
            this.errorService.changeErrors([erpError])
          }
        }


      },
      () => {
        console.log("completed!")
        if (completeClb) {
          completeClb()
        }
      }
    )
  }

  //Use this in the case of resolving data before load
  protected _map<T>(observable: Observable<any>, clb?: CallbackFunction<T>, errorClb?: CallbackFunction<any>, completeClb?: () => void) {
    return observable.map(
      (data) => {
        //console.log(e)
        //const data = e.json();
        
        if (data.isError) {
          if (data.code === 401) {
            const erpError = new AppError();
            erpError.name = 'Not logged In'
            erpError.displayName = 'error.notLoggedIn'
            erpError.code = data.code
            this.errorService.changeErrors([erpError])
          }
          if (data.code === 403 || data.code === 405) {
            const erpError = new AppError();
            erpError.name = 'Not found!'
            erpError.displayName = 'error.erpNotFound'
            erpError.code = data.code
            this.errorService.changeErrors([erpError])
          }

          if (errorClb) {

            errorClb(data)

          }
        } else {
          //data = Observable.of(data.payload);
          //console.log(data);
          return data.payload;
        }
      }).catch(error => {
        error = error.error;
        //const data = e.json();
        console.log(error)
        if (errorClb) {
          errorClb(error)
        } else {
          if (error.code === 405 || error.code === 403) {
            // TODO:  error callback should normally trigger
            //this.router.navigate(['/'])
            return Observable.of(null);
          } else {

            const erpError = new AppError();
            erpError.name = 'Server error!'
            erpError.displayName = 'error.server'
            erpError.code = error.status
            this.errorService.changeErrors([erpError])
            return Observable.of(null);
          }
        }


      });
      
  }


}



