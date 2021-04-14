import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {

  constructor(private router: Router) { }

  customValue = 'DefaultValue';
  ngOnInit(): void {
  }

  NavigateToWelcomePage() {
    this.router.navigate(['/']);
  }

  valueClick(selectCategory: string) {
    this.customValue = selectCategory;
  }
}
