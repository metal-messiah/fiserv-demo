import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subscriptions } from '../enums/subscriptions';

interface Results {
  address: string;
  password: string;
  subscription: Subscriptions;
}

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  private _address: FormControl = new FormControl(
    {
      value: '',
      disabled: false
    },
    [Validators.required, Validators.email]
  );

  private _subscription: FormControl = new FormControl({
    value: Subscriptions.ADVANCED,
    disabled: false
  });

  private _subscriptionOptions: string[] = Object.keys(Subscriptions).map(key => Subscriptions[key]);

  private passwordRegex = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}';
  private _password: FormControl = new FormControl(
    {
      value: '',
      disabled: false
    },
    [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)]
  );

  private _results: Results = null;

  constructor() {}

  get address(): FormControl {
    return this._address;
  }

  get subscription(): FormControl {
    return this._subscription;
  }

  get password(): FormControl {
    return this._password;
  }

  get subscriptionOptions(): string[] {
    return this._subscriptionOptions;
  }

  get results(): Results {
    return this._results;
  }

  set results(results: Results) {
    this._results = results;
  }
}
