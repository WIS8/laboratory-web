import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repair} from '../domain/Repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  private repairUrl = `${environment.serverUrl}/repair`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(repair: Repair): Observable<Repair> {
    return this.http.post<Repair>(
      this.repairUrl, repair,
      {headers: this.header});
  }

  public update(repair: Repair): Observable<Repair> {
    return this.http.put<Repair>(
      this.repairUrl, repair,
      {headers: this.header});
  }

  public findByNo(repairNo: string, staffNo: number): Observable<Repair> {
    return this.http.get<Repair>(
      `${this.repairUrl}/${repairNo}`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public total(staffNo: number): Observable<Repair> {
    return this.http.get<Repair>(
      `${this.repairUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findAll(pageIndex: number, pageSize: number, staffNo: number): Observable<Repair[]> {
    return this.http.get<Repair[]>(
      this.repairUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('staffNo', String(staffNo))
      });
  }

}
