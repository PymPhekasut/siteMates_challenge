import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issues } from '../issues';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private issuesService: IssuesService, private router: Router) {}

  formdata: Issues = {
    title: '',
    description: '',
  };

  create() {
    this.issuesService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['/issues/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
