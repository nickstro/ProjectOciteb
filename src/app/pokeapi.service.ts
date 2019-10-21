import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  // GET REQUEST
  private REST_API_SERVER = 'localhost:3000/get';

  private REST_API_POST = 'http://192.168.43.140:3001/investment/getData';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public sendPostRequest(request) {
    return this.httpClient.post(this.REST_API_POST, request, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
