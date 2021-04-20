import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ChooseletterDirective} from '../chooseletter.directive'

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {

  constructor(private router: Router) { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  alpha: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  ShouldLettersShow = false;
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    console.log(this.myControl.valueChanges);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  NavigateToWelcomePage() {
    this.router.navigate(['/']);
  }

  ShowAllLetters() {
    this.ShouldLettersShow = !this.ShouldLettersShow;
  }
}
