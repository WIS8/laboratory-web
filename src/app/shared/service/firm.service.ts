import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Firm} from '../domain/Firm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmService {

  private firmUrl = `${environment.serverUrl}/firm`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(firm: Firm): Observable<Firm> {
    return this.http.post<Firm>(
      this.firmUrl, firm,
      {headers: this.header});
  }

  public update(firm: Firm): Observable<Firm> {
    return this.http.put<Firm>(
      this.firmUrl, firm,
      {headers: this.header});
  }

  public findByNo(firmNo: number): Observable<Firm> {
    return this.http.get<Firm>(
      `${this.firmUrl}/${firmNo}`,
      {headers: this.header});
  }

  public total(): Observable<Firm> {
    return this.http.get<Firm>(
      `${this.firmUrl}/count`,
      {headers: this.header});
  }

  public findAll(pageIndex: number, pageSize: number): Observable<Firm[]> {
    return this.http.get<Firm[]>(
      this.firmUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
      });
  }

}
