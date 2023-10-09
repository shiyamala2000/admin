import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaseManagement } from './case-management';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseManagementService {

  private apiUrl = 'http://localhost:8080/nsurecase';

  constructor(private http: HttpClient) { }

  getAllTableValues(): Observable<CaseManagement[]> {
    return this.http.get< CaseManagement[]>(this.apiUrl+ '/');
  }

  getTableValueById(id: number) {
    console.log("GetTableValueByid : ",id);
    const url = `${this.apiUrl}/${id}`;
    console.log("GetTableValueByid URL: "+ this.http.get<CaseManagement>(url));
    return this.http.get<CaseManagement>(url);
  }

  updateTableValue(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  addTableValue(addcasemanagement: CaseManagement): Observable<CaseManagement> {
    console.log('Request Payload:', addcasemanagement);
    return this.http.post<CaseManagement>(this.apiUrl + '/', addcasemanagement)
      .pipe(
        catchError(error => {
          console.error('Error adding addcasemanagement:', error);
          throw error;
      })
    );
  }

  deleteTableValue(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
