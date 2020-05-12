import { Component } from '@angular/core';
import { RomanService } from './roman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  arabicNumber: number;
  romanNumber = '';
  constructor(private _romanService: RomanService) {}

  onChange() {
    this.romanNumber = this._romanService.romanize(this.arabicNumber);
  }
}
