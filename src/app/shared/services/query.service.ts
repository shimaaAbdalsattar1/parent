import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private url: string;
  private paramsObj: object;
  private paramsArr: Array<any>;
  private httpHeaders: HttpHeaders = null;
  constructor(
    private httpClient: HttpClient
  ) { }
  /**
   * @name setUrl
   * @memberof QueryService
   * @description set url with the required api
   * @param {string} api
   */
  public setUrl(api: string) {
    this.url = baseUrl + api;
  }
  /**
   * @name setHeader
   * @memberof QueryService
   * @description set httpHeader
   * @param {string} api
   */
  public setHeader() {
    const token = JSON.parse(localStorage.getItem('loginUser')).token;
    this.httpHeaders = new HttpHeaders({
      'Accept-Language': 'en', // static cause we have no multi-lang
      Authorization: `Bearer ${token}`
    });
  }
  /**
   * @name setParamsObj
   * @memberof QueryService
   * @description set param object with data
   * @param {string} data
   */
  public setParamsObj(data: object) {
    this.paramsObj = data;
  }
  /**
   * @name get
   * @memberof QueryService
   * @description get from api
   * @returns {<any>}
   */
  public get(params: any = {}): Observable<any> {
    return this.httpClient
      .get(this.url, {
        headers: this.httpHeaders,
        params: new HttpParams({
          fromObject: params
        })
      }).pipe(map((res: Response) => res));
  }
  /**
   * @name put
   * @memberof QueryService
   * @description put to api
   * @param {string} type
   * @returns {<any>}
   */
  public put(type: string): Observable<any> {
    let request: any;
    type === 'object' ? (request = this.paramsObj) : (request = this.paramsArr);
    return this.httpClient
      .put(this.url, request, {
        headers: this.httpHeaders
      })
      .pipe(map((res: Response) => res));
  }
  /**
   * @name post
   * @memberof QueryService
   * @description post data to api
   * @param {string} type
   * @returns {<any>}
   */
  public post(type: string): Observable<any> {
    let request: any;
    type === 'object' ? (request = this.paramsObj) : (request = this.paramsArr);
    return this.httpClient
      .post(this.url, request, {
        headers: this.httpHeaders
      })
      .pipe(map((res: Response) => res));
  }
  /**
   * @name delete
   * @memberof QueryService
   * @description delete data
   * @returns {<any>}
   */
  public delete(params: any = {}): Observable<any> {
    return this.httpClient
      .delete(this.url, {
        headers: this.httpHeaders
      })
      .pipe(map((res: Response) => res));
  }
}

