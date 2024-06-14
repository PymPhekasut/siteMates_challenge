import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Issues } from '../issues';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private issuesService: IssuesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formdata: Issues = {
    title: '',
    description: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = String(param.get('_id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    this.issuesService.edit(id).subscribe((data) => {
      this.formdata = data;
    });
  }

  update() {
    this.issuesService.update(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['/issues/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
