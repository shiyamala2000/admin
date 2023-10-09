import { Component } from '@angular/core';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {
  isSubMenuOpen = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  searchId: string = '';
  documentName: string = '';
  documentData: string = ''; 

  searchDocument() {
    const documentNameMap: Record<string, string> = {
      'case1': 'Document 1',
      'case2': 'Document 2',
    };
    this.documentName = documentNameMap[this.searchId] || 'Not Found';
    this.documentData = ''; 
  }

  showDocument(documentId: string) {
    const documentDataMap: Record<string, string> = {
      'case1': 'This is the content of Document 1.',
      'case2': 'This is the content of Document 2.',
    };
    this.documentData = documentDataMap[documentId] || 'Document data not found.';
  }
}
