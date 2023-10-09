import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CaseManagementService } from '../case-management.service';
import { HttpClient } from '@angular/common/http';
import { CaseManagement } from '../case-management';

@Component({
  selector: 'app-generate-letter-dialog',
  templateUrl: './generate-letter-dialog.component.html',
  styleUrls: ['./generate-letter-dialog.component.css']
})
export class GenerateLetterDialogComponent implements OnInit {
  emailTextAreaContent: string = '';

  constructor(
    public dialogRef: MatDialogRef<GenerateLetterDialogComponent>,
    private caseManagementService: CaseManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, documentName: string },
    private http: HttpClient
  ) { }

  showTextArea: boolean = false;

  toggleTextArea() {
    this.showTextArea = !this.showTextArea;
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }


  caseManagementVariable: CaseManagement[] = [];
  ngOnInit(): void {
    this.caseManagementService.getAllTableValues().subscribe((data: CaseManagement[]) => {
      this.caseManagementVariable = data;
    });
    console.log('ID:', this.data.id);
    console.log('Document Name:', this.data.documentName);
    // console.log ('Received ID:', this.receivedId);
  }

  notReceivedDocuments: string[] = [];
  sendEmail() {
    // if (this.emailTextAreaContent.trim() !== '') {
    //    this.emailTextAreaContent;
    //  }
    const requestBody = {
      documentName: this.data.documentName,
      addNotes: this.emailTextAreaContent
    };
    this.http.post('http://localhost:8080/nsurecase/send-email-notification', requestBody).subscribe({
      next: (response) => {
        console.log('Email notification sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending email notification:', error);
      },
      complete: () => {
        console.log("Send Email completed");
      }
    });

    // const emailAddress = 'Java_COE_Team@kgisl.com';
    // const subject = 'Documents Not Received';
    // let body = `The following document is not received:\n${this.data.documentName}`;
    // if (this.emailTextAreaContent.trim() !== '') {
    //   body += '\n\nAdditional Notes:\n' + this.emailTextAreaContent;
    // }
    // const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // window.location.href = mailtoLink;
  }
}
