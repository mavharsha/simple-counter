import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;
  serverUrl = 'http://localhost:3000/counter';

  constructor(private http: HttpClient) {}

  increment() {
    this.updateCounterOnServer(this.counter + 1);
  }

  decrement() {
    this.updateCounterOnServer(this.counter - 1);
  }

  updateCounterOnServer(count) {
    console.log('POSTING:', count);
    // post the new value server
    this.http.post<Counter>(this.serverUrl, { counter: count }).subscribe((response) => {
      console.log(response);
      this.counter = response.counter;
    });
  }
}

interface Counter {
  counter: number;
}
