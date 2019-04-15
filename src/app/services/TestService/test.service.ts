import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Test } from '../../Interfaces/test';

@Injectable()
export class TestService {
    constructor(private http: HttpClient) {}

    public confirmTest(data: Test): void {
        this.http.post(`${environment.URL}/test`, {test: data}).subscribe();
    }
}
