import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component-override',
  templateUrl: './lazy-component-override.component.html',
  styleUrls: ['./lazy-component-override.component.scss']
})
export class LazyComponentOverrideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
