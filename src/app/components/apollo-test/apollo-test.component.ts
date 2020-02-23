import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'exchange-rates',
  template: `
    <div *ngIf="loading">
      Loading...
    </div>
    <div *ngIf="error">
      Error :(
    </div>
    <div *ngIf="rates">
      <div *ngFor="let rate of rates">
        <p>{{rate.currency}}: {{rate.rate}}</p>
      </div>
    </div>
  `,
})
export class ApolloTestComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        query test($faculty: String!){
          Investment4List(faculty: $faculty){
            Grupo
            productos
            total
          }
        }
        `,
        variables: {
          faculty: '4'
        }
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
