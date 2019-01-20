/**
 * Created by mb on 4/13/16.
 */
import {Injectable} from "@angular/core";

import 'rxjs/Rx';
import {RequestMethod, Headers, RequestOptions, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {toBase64String} from "@angular/compiler/src/output/source_map";

interface IRequestService {

  get(url:string): Observable<any>
  post(url: string, data: any): Observable<any>
  put(url:string, data: any): Observable<any>
  delete(url: string): Observable<any>
}

abstract class AbstractRequestService implements IRequestService {

  constructor(protected http: Http) {
  }

  get(url: string): Observable<any> {
    return this.send(url, RequestMethod.Get)
  }

  delete(url: string): Observable<any> {
    return this.send(url, RequestMethod.Delete)
  }

  post(url: string, data: any): Observable<any> {
    return this.send(url, RequestMethod.Post, data)
  }

  put(url: string, data?: any): Observable<any> {
    return this.send(url, RequestMethod.Put, data)
  }


  public send(url: string, method: RequestMethod, data?: any): Observable<any> {

    let body = JSON.stringify(data ? data : {});
    let headers = this.getHeaders();
    let options = this.getOptions(headers, method);

    /* if (url) {
      url = (url).serialize()
    } */
    let req: any;
    switch (method) {
      case RequestMethod.Get:
        req = this.http.get(<string>url, options)
        break
      case RequestMethod.Put:
        req = this.http.put(<string>url, body, options)
        break
      case RequestMethod.Post:
        req = this.http.post(<string>url, body, options)
        break
      case RequestMethod.Delete:
        req = this.http.delete(<string>url, options)
        break
      default :
        throw new Error('method not implemented')
    }
    return req
  }

  protected abstract getOptions(headers: Headers, method: RequestMethod): RequestOptions
  protected abstract getHeaders(): Headers

}

@Injectable()
export class RequestService extends AbstractRequestService {

  constructor(http: Http) {
    super(http)
  }

  protected getOptions(headers: Headers, method: RequestMethod): RequestOptions {
    return new RequestOptions(
      {
        headers: headers,
        method: method,
        withCredentials:true
      }
    );
  }

  protected getHeaders(): Headers {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return headers;
  }
}


