import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddDocumentProcessComponent } from './add-document-process/add-document-process.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TestComponent } from './test/test.component';
import { SearchDocumentComponent } from './search-document/search-document.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { GenerateLetterDialogComponent } from './generate-letter-dialog/generate-letter-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDocumentProcessComponent,
    TestComponent,
    SearchDocumentComponent,
    FileUploadComponent,
    DocumentViewerComponent,
    GenerateLetterDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,MatIconModule,MatSelectModule, MatCheckboxModule,FormsModule,MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
