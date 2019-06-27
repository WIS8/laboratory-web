import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Apply} from '../domain/Apply';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  private applyUrl = `${environment.serverUrl}/apply`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(apply: Apply): Observable<Apply> {
    return this.http.post<Apply>(
      this.applyUrl, apply,
      {headers: this.header});
  }

  public update(apply: Apply, staffNo: number): Observable<Apply> {
    return this.http.put<Apply>(
      this.applyUrl, apply,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findByNo(applyNo: string, staffNo: number): Observable<Apply> {
    return this.http.get<Apply>(
      `${this.applyUrl}/${applyNo}`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public total(staffNo: number): Observable<Apply> {
    return this.http.get<Apply>(
      `${this.applyUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findAll(pageIndex: number, pageSize: number, staffNo: number): Observable<Apply[]> {
    return this.http.get<Apply[]>(
      this.applyUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('staffNo', String(staffNo))
      });
  }

}


