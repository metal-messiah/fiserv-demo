import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserFormService } from '../user-form.service';
import { Subscriptions } from 'src/app/enums/subscriptions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fg: FormGroup;
  submitted = false;

  passwordErrorMsg = 'Password must be 8 characters and contain upper and lowercase letters, numbers and symbols';
  addressErrorMsg = 'Invalid Email Address';

  constructor(private userFormService: UserFormService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.fg = new FormGroup({
      address: this.userFormService.address,
      subscription: this.userFormService.subscription,
      password: this.userFormService.password
    });
  }

  get options(): string[] {
    return this.userFormService.subscriptionOptions;
  }

  get errorMessage(): string {
    const msgs = [];
    const { address, password, subscription } = this.userFormService;
    if (!address.valid) {
      msgs.push(`• ${this.addressErrorMsg}`);
    }
    if (!password.valid) {
      msgs.push(`• ${this.passwordErrorMsg}`);
    }
    return msgs.join('\n');
  }

  getColor(): string {
    return this.submitted ? (this.fg.valid ? 'primary' : 'accent') : 'primary';
  }

  hasError(prop: string): boolean {
    const control = this.userFormService[prop];
    return !control.valid && (control.dirty || this.submitted);
  }

  submit(): void {
    this.submitted = true;
    if (this.fg.valid) {
      this.userFormService.results = this.fg.value;
      this.router.navigate(['results']);
    }
  }

  reset(): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: { title: 'Caution', question: 'Are You Sure You Wish To Discard Your Changes?' }
      })
      .afterClosed()
      .subscribe((response: boolean) => {
        if (response) {
          this.fg.patchValue({ address: '', subscription: Subscriptions.ADVANCED, password: '' });
          this.fg.markAsPristine();
          this.fg.markAsUntouched();
        }
      });
  }
}
