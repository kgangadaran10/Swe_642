/**
 * Contributors:
 * - Josh Marsden
 * - Gangadaran kameswaran
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

/**
 * Interface representing the structure of a survey response.
 */
export interface SurveyResponse {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  likes: string[];
  reference: string;
  recommendationLikelihood: number;
  surveyDate: Date;
  additionalComments?: string;
}

/**
 * Enum representing different options for what respondents like about the campus.
 */
export enum LikesAbtCampus {
  STUDENTS,
  LOCATION,
  CAMPUS,
  ATMOSPHERE,
  DORMROOMS,
  SPORTS
}

/**
 * Enum representing different sources of how respondents heard about the campus.
 */
export enum HearAbtCampus {
  FRIENDS,
  TELEVISION,
  INTERNET,
  OTHERS
}

/**
 * Enum representing different likelihoods of recommendation by respondents.
 */
export enum Recommend {
  VERYLIKELY,
  LIKELY,
  UNLIKELY
}

/**
 * Interface representing the structure of the response data from the server.
 */
interface ResponseData<T> {
  success: boolean;
  data: T;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SurveyResponsesService {

  /**
   * Constructor for SurveyResponsesService.
   * @param http - Angular HttpClient for making HTTP requests.
   * @param baseUrl - Base URL for the survey responses API.
   */
  constructor(
    private http: HttpClient,
    @Inject("baseUrl") public baseUrl: string,
  ) {
    this.baseUrl = `${baseUrl}/survey`;
  }

  /**
   * Adds a survey response to the server.
   * @param response - The survey response to be added.
   * @returns Observable<ResponseData<SurveyResponse | undefined>> - Observable containing the response data.
   */
  addResponse(response: SurveyResponse) {
    return this.http.post<ResponseData<SurveyResponse | undefined>>(this.baseUrl, response)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  /**
   * Gets all survey responses from the server.
   * @returns Observable<ResponseData<SurveyResponse[]>> - Observable containing the response data.
   */
  getAllResponses() {
    return this.http.get<ResponseData<SurveyResponse[]>>(this.baseUrl)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  /**
   * Gets a specific survey response from the server.
   * @param id - The ID of the survey response to be retrieved.
   * @returns Observable<ResponseData<SurveyResponse>> - Observable containing the response data.
   */
  getResponse(id: number) {
    return this.http.get<ResponseData<SurveyResponse>>(`${this.baseUrl}/${id}`)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  /**
   * Deletes a specific survey response from the server.
   * @param id - The ID of the survey response to be deleted.
   * @returns Observable<ResponseData<null>> - Observable containing the response data.
   */
  deleteResponse(id: number) {
    return this.http.delete<ResponseData<null>>(`${this.baseUrl}/${id}`)
    .pipe(catchError(
      (err: HttpErrorResponse) => {
        console.log({err});
        return of(err.error);
      }
    ));
  }

  /**
   * Deletes all survey responses from the server.
   * @returns Observable<ResponseData<null>> - Observable containing the response data.
   */
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
