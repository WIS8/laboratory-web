import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Disuse} from '../domain/Disuse';

@Injectable({
  providedIn: 'root'
})
export class DisuseService {

  private disuseUrl = `${environment.serverUrl}/disuse`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(disuse: Disuse): Observable<Disuse> {
    return this.http.post<Disuse>(
      this.disuseUrl, disuse,
      {headers: this.header});
  }

  public update(disuse: Disuse): Observable<Disuse> {
    return this.http.put<Disuse>(
      this.disuseUrl, disuse,
      {headers: this.header});
  }

  public findByNo(disuseNo: string, staffNo: number): Observable<Disuse> {
    return this.http.get<Disuse>(
      `${this.disuseUrl}/${disuseNo}`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public total(staffNo: number): Observable<Disuse> {
    return this.http.get<Disuse>(
      `${this.disuseUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findAll(pageIndex: number, pageSize: number, staffNo: number): Observable<Disuse[]> {
    return this.http.get<Disuse[]>(
      this.disuseUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('staffNo', String(staffNo))
      });
  }

}
