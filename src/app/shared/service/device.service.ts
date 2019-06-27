import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Device} from '../domain/Device';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private deviceUrl = `${environment.serverUrl}/device`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(device: Device): Observable<Device> {
    return this.http.post<Device>(
      this.deviceUrl, device,
      {headers: this.header});
  }

  public update(device: Device): Observable<Device> {
    return this.http.put<Device>(
      this.deviceUrl, device,
      {headers: this.header});
  }

  public findByNo(deviceNo: string, staffNo: number): Observable<Device> {
    return this.http.get<Device>(
      `${this.deviceUrl}/${deviceNo}`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public total(staffNo: number): Observable<Device> {
    return this.http.get<Device>(
      `${this.deviceUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findAll(pageIndex: number, pageSize: number, staffNo: number): Observable<Device[]> {
    return this.http.get<Device[]>(
      this.deviceUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('staffNo', String(staffNo))
      });
  }

}
