import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OcitebService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public sendPostRequest(url, request) {
    return this.httpClient.post(url, request, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.error);
    return Promise.reject(error.message || error);
 }
}
