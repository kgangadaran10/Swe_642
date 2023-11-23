/**
 * Contributors:
 * - Josh Marsden
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

export interface SurveyResponse {
  firstName: string
  lastName: string
  streetAddress: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  likes: string[]
  reference: string
  recommendationLikelihood: number
  surveyDate: Date
  additionalComments?: string
}

interface ResponseData<T> {
  success: boolean
  data: T
  message?: string
}

@Injectable({
  providedIn: 'root'
})
export class SurveyResponsesService {

  constructor(
    private http: HttpClient,
    @Inject("baseUrl") public baseUrl: string,
  ) {
    this.baseUrl = `${baseUrl}/survey`;
  }

  addResponse(response: SurveyResponse) {
    return this.http.post<ResponseData<SurveyResponse | undefined>>(this.baseUrl, response)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  getAllResponses() {
    return this.http.get<ResponseData<SurveyResponse[]>>(this.baseUrl)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  getResponse(id: number) {
    return this.http.get<ResponseData<SurveyResponse>>(`${this.baseUrl}/${id}`)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  deleteResponse(id: number) {
    return this.http.delete<ResponseData<null>>(`${this.baseUrl}/${id}`)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  deleteAllResponses() {
    return this.http.delete<ResponseData<null>>(this.baseUrl)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

}
