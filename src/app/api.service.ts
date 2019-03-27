import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import 'rxjs/add/operator/map';
import {catchError} from 'rxjs/operators';
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: any;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  /**
   * Récupere une liste de pokemons
   */
  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPokemonInfo(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${pokemon.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
