import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Staff} from '../domain/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  /*public login() {
    const staff = {
      staffNo: 100001,
      staffPassword: '326623'
    };
    this.http.post('http://192.168.137.1:8080/api/v1/login/form',
      staff,
      {
        headers: new HttpHeaders().set('content-type', 'application/json;charset=UTF-8'),
        observe: 'response',
        params: {'content-type': 'application/json;charset=UTF-8'},
        withCredentials: true
      }
      ).subscribe((data: Staff) => {
        console.log(data);
      });
  }*/

}
