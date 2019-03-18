import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'college-homepage';
  constructor(private router: Router) {}	

  ngOnInit() {
  	this.router.navigate(['/home']);
  }
}
