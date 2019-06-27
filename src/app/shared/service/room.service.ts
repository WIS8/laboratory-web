import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Room} from '../domain/Room';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomUrl = `${environment.serverUrl}/room`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(room: Room): Observable<Room> {
    return this.http.post<Room>(
      this.roomUrl, room,
      {headers: this.header});
  }

  public update(room: Room): Observable<Room> {
    return this.http.put<Room>(
      this.roomUrl, room,
      {headers: this.header});
  }

  public findByNo(roomNo: number, staffNo: number): Observable<Room> {
    return this.http.get<Room>(
      `${this.roomUrl}/${roomNo}`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public total(staffNo: number): Observable<Room> {
    return this.http.get<Room>(
      `${this.roomUrl}/count`,
      {
        headers: this.header,
        params: new HttpParams()
          .append('staffNo', String(staffNo))
      });
  }

  public findAll(pageIndex: number, pageSize: number, staffNo: number): Observable<Room[]> {
    return this.http.get<Room[]>(
      this.roomUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
          .append('staffNo', String(staffNo))
      });
  }

}
