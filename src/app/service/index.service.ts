import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private _title = 'Welcome to Testing Panel';

  constructor() { }

  get title() {
    return this._title;
  }
}
