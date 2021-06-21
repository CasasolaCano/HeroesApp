import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';


import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagePipe } from './pipes/image-pipe.pipe';





@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FlexLayoutModule
  ]
})
export class HeroesModule { }
