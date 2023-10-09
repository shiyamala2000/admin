import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  private apiUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }
}
