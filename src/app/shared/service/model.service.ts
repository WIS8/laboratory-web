import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import {Model} from '../domain/Model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private modelUrl = `${environment.serverUrl}/model`;

  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public save(model: Model): Observable<Model> {
    return this.http.post<Model>(
      this.modelUrl, model,
      {headers: this.header});
  }

  public update(model: Model): Observable<Model> {
    return this.http.put<Model>(
      this.modelUrl, model,
      {headers: this.header});
  }

  public findByNo(modelNo: string): Observable<Model> {
    return this.http.get<Model>(
      `${this.modelUrl}/${modelNo}`,
      {headers: this.header});
  }

  public total(): Observable<Model> {
    return this.http.get<Model>(
      `${this.modelUrl}/count`,
      {headers: this.header});
  }

  public findAll(pageIndex: number, pageSize: number): Observable<Model[]> {
    return this.http.get<Model[]>(
      this.modelUrl,
      {
        headers: this.header,
        params: new HttpParams()
          .append('pageIndex', String(pageIndex - 1))
          .append('pageSize', String(pageSize))
      });
  }

  public findAllNo(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.modelUrl}/modelNo`,
      {headers: this.header});
  }

}
