import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-hero-block',
  templateUrl: './single-hero-block.component.html',
  styleUrls: ['./single-hero-block.component.scss']
})
export class SingleHeroBlockComponent implements OnInit {

  @Input() heroArrayBlock: Array<object> = [];
  constructor() { }


  ngOnInit(): void {
    console.log(this.heroArrayBlock);
  }

}
