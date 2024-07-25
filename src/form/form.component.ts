import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [CardComponent, HttpClientModule, FormsModule],
})
export class FormComponent {
  response: any;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get('http://localhost:8080/investment/get-all')
      .subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }
}
