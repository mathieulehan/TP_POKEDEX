import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {FormsModule} from '@angular/forms';
import {FilterPokemonPipePipe} from './filter-pokemon--pipe.pipe';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonComponent} from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokemonDetailComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
