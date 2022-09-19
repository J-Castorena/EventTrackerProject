import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Wod } from '../models/wod';

@Injectable({
  providedIn: 'root'
})
export class WodService {
  private baseUrl = 'http://localhost:8082/';
  private url = this.baseUrl + 'api/wods';

  constructor(
    private http: HttpClient
  ) { }

  getAllWods(): Observable<Wod[]> {
    return this.http.get<Wod[]>(this.url).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(
          () => new Error(
            'WodService.getAllWods():error retrieving WODs: ' + error
          )
        )
      })
    );
  }

  create(wod: Wod): Observable<Wod> {
   return this.http.post<Wod>(this.url, wod).pipe(
    catchError((error: any) => {
      console.log(error);
      return throwError(
        () => new Error(
          'WodService.create():error creating Wod: ' + error
        )
      );
    })
   );
  }

  delete(wodId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${wodId}`).pipe(
     catchError((error: any) => {
       console.log(error);
       return throwError(
         () => new Error(
           'WodService.delete():error deleting Wod: ' + error
         )
       );
     })
    );
   }

    update(wod: Wod): Observable<Wod> {
    return this.http.put<Wod>(this.url, wod).pipe(
     catchError((error: any) => {
       console.log(error);
       return throwError(
         () => new Error(
           'WodService.update():error updating Wod: ' + error
         )
       );
     })
    );
   }

}
