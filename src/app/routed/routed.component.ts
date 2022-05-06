import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-routed',
  templateUrl: './routed.component.html',
  styleUrls: ['./routed.component.scss']
})
export class RoutedComponent implements OnInit {

  state$: Observable<any>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.state$ = this.route.paramMap.pipe(
      map(() => window.history.state)
    );
  }

  ngOnInit(): void {
  }

}
