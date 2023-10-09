import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { DocumentModel } from '../document-model';

@Component({
  selector: 'app-add-document-process',
  templateUrl: './add-document-process.component.html',
  styleUrls: ['./add-document-process.component.css'],
})
export class AddDocumentProcessComponent {
  Bike = false;
  Scooty = false;
  Cycle = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  isSubMenuOpen = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  documentName: string = '';
  documentId: string = '';
  processType: string = '';

  // Array to store added documents
  addedDocuments: DocumentModel[] = [];

  constructor(private http: HttpClient) {}

  submitDocument() {
    const requestData = {
      documentName: this.documentName,
      documentId: this.documentId,
      processType: this.processType,
    };
    this.http.post<DocumentModel>('YOUR_BACKEND_API_ENDPOINT', requestData).subscribe(
      (response) => {
        // Document added successfully, add it to the list
        this.addedDocuments.push(response);

        // Clear form fields
        this.documentName = '';
        this.documentId = '';
        this.processType = '';
        
      },
      (error) => {
        console.error('Error adding document:', error);
      }
    );
  }
}
