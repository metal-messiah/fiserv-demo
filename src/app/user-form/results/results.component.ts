import { Component, OnInit } from '@angular/core';
import { UserFormService } from '../user-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private userFormService: UserFormService, private router: Router) {}

  ngOnInit() {
    if (!this.userFormService.results) {
      this.router.navigate(['']);
    }
  }

  get results() {
    return JSON.stringify(this.userFormService.results, null, 4);
  }
}
