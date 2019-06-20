import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Staff} from '../domain/Staff';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private staffURL = `${environment.apiURL}/api/v1/staff`;

  constructor(private http: HttpClient) {
  }

  save(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.staffURL, staff);
  }

  findAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.staffURL);
  }

}
