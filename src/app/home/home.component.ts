import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddminData } from '../addmin-data';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DocumentModel } from '../document-model';

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatInputModule, MatPaginatorModule, MatIconModule, CommonModule, RouterModule],
})

export class HomeComponent implements OnInit{
  isSubMenuOpen = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  // API data
  documents: DocumentModel[] = [];
  private apiUrl = 'http://localhost:8080/admin';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  shouldShowContent(): boolean {
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;

    if (currentRoute === undefined) {
      return true; // Show content if the route is undefined
    } else {
      const excludedRoutes = ['searchDocument', 'addProcess', 'document-viewer', 'file-upload', 'case-management'];
      return !excludedRoutes.includes(currentRoute);
    }
  }

  ngOnInit(): void {
    this.getAllDocuments();
  }
  getAllDocuments() {
    this.http.get<DocumentModel[]>(`${this.apiUrl}/fetchAll`).subscribe(
      (response) => {
        console.log('All documents:', response);
      },
    );
  }
}

