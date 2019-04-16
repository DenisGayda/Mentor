import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpQuizTaskInterface } from '../../configs/Interfaces/http-quiz-task-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }

  getTests$(theme: string): Observable<HttpQuizTaskInterface[]>{
      const params = new HttpParams().set('theme', theme);

      return  this.http.get<HttpQuizTaskInterface[]>(`${environment.URL}/test`, {params})

  }
}
