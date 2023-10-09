import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDocumentProcessComponent } from './add-document-process/add-document-process.component';
import { TestComponent } from './test/test.component';
import { SearchDocumentComponent } from './search-document/search-document.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CaseManagementComponent } from './case-management/case-management.component';

const routes: Routes = [
  // {path:'',component:SearchDocumentComponent,},
  {path: '', component: HomeComponent,
    children: [
      { path: 'addProcess', component: AddDocumentProcessComponent },
      { path: 'searchDocument', component: SearchDocumentComponent },
      { path: 'case-management', component: CaseManagementComponent },
      { path: 'document-viewer', component: DocumentViewerComponent },
      { path: 'file-upload', component: FileUploadComponent },   
    ]
  },
  // { path: 'addProcess', component: AddDocumentProcessComponent },
  { path: 'test', component: TestComponent },
  // { path: 'searchDocument', component: SearchDocumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
