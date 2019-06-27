import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {ApplyDetail} from '../domain/ApplyDetail';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyDetailService {

  private applyDetailUrl = `${environment.serverUrl}/applyDetail`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(applyDetail: ApplyDetail): Observable<ApplyDetail> {
    return this.http.post<ApplyDetail>(
      this.applyDetailUrl, applyDetail,
      {headers: this.header});
  }

  public update(applyDetail: ApplyDetail): Observable<ApplyDetail> {
    return this.http.put<ApplyDetail>(
      this.applyDetailUrl, applyDetail,
      {headers: this.header});
  }

  public delete(applyNo: string, modelNo: string): Observable<object> {
    return this.http.delete(
      this.applyDetailUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('applyNo', applyNo)
          .append('modelNo', modelNo)
      });
  }

  public total(applyNo: string): Observable<ApplyDetail> {
    return this.http.get<ApplyDetail>(
      `${this.applyDetailUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('applyNo', applyNo)
      });
  }

  public findByApplyNo(pageIndex: number, pageSize: number, applyNo: string): Observable<ApplyDetail[]> {
    return this.http.get<ApplyDetail[]>(
      this.applyDetailUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('applyNo', String(applyNo))
      });
  }

}
