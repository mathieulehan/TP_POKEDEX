import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import 'rxjs/add/operator/map';
import {catchError} from 'rxjs/operators';
import {Pokemon} from './pokemon';
import {ListPokemon} from './list-pokemon';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {
  url: any;
  urlTotal: any;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    this.urlTotal = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964"';
  }

  /**
   * Récupere une liste de pokemons
   */
  getPokemon(): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(`${this.urlTotal}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Récupère les infos d'un pokémon
   * @param name le nom du pokemon dont on veut les détails
   */
  getPokemonInfo(name: string): Observable<Pokemon> {
    const detailUrl = this.url + name;
    return this.http.get<Pokemon>(`${detailUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Gestion d'erreurs lors des requêtes à l'API
   * @param error l'erreur rencontrée
   */
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
