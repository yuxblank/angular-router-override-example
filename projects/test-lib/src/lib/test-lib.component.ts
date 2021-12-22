import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testLib',
  template: `
    <p>
      test-lib works!
    </p>

    <div>
    <pre> Children host</pre>
      <router-outlet></router-outlet>
    </div>

  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
