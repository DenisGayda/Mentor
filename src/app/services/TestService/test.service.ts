import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TestInterface } from '../../configs/Interfaces/test-interface';

@Injectable()
export class TestService {
    constructor(private http: HttpClient) {}

    public confirmTest(data: TestInterface): void {
        this.http.post(`${environment.URL}/test`, {test: data}).subscribe();
    }
}
