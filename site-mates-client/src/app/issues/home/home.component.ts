import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issues } from '../issues';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allissues: Issues[] = [];
  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.issuesService.getAll().subscribe((data) => {
      this.allissues = data;
    });
  }

  deleteIssue(id: any) {
    this.issuesService.delete(id).subscribe({
      next: (data) => {
        this.allissues = this.allissues.filter((_) => (_._id! = id));
      },
    });
  }
}
