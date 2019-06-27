import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Staff} from '../domain/Staff';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private staffUrl = environment.serverUrl;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public login(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(
      `${this.staffUrl}/login/form`,
      {
        username: staff.staffNo,
        password: staff.staffPassword
      },
      {headers: this.header});
  }

  public save(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(
      `${this.staffUrl}/staff`, staff,
      {headers: this.header});
  }

  public update(staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(
      `${this.staffUrl}/staff`, staff,
      {headers: this.header});
  }

  public findByNo(staffNo: number): Observable<Staff> {
    return this.http.get<Staff>(
      `${this.staffUrl}/staff/${staffNo}`,
      {headers: this.header});
  }

  public findEmail(email: string): Observable<Staff> {
    return this.http.get<Staff>(
      `${this.staffUrl}/staff/${email}`,
      {headers: this.header});
  }

  public total(): Observable<Staff> {
    return this.http.get<Staff>(
      `${this.staffUrl}/count`,
      {headers: this.header});
  }

  public findAll(pageIndex: number, pageSize: number): Observable<Staff[]> {
    return this.http.get<Staff[]>(
      `${this.staffUrl}/staff`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
      });
  }

}
