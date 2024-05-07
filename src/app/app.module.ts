import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componnents/header/header.component';
import { HomeComponent } from './componnents/home/home.component';
import { FooterComponent } from './componnents/footer/footer.component';
import { RussiaCupComponent } from './componnents/russia-cup/russia-cup.component';
import { SlideComponent } from './componnents/slide/slide.component';
import { PhotosComponent } from './componnents/photos/photos.component';
import { NextComponent } from './componnents/next/next.component';
import { BlogComponent } from './componnents/blog/blog.component';
import { DashboardComponent } from './componnents/dashboard/dashboard.component';
import { LoaderComponent } from './componnents/loader/loader.component';
import { TEAMComponent } from './componnents/team/team.component';
import { MidfielderComponent } from './Predict/midfielder/midfielder.component';
import { ForwardComponent } from './Predict/forward/forward.component';
import { GoalkeeperComponent } from './Predict/goalkeeper/goalkeeper.component';
import { DefenderComponent } from './Predict/defender/defender.component';
import { ResultComponent } from './Predict/result/result.component';
import { InjuriesComponent } from './Predict/injuries/injuries.component';
import { SentimentComponent } from './Predict/sentiment/sentiment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RussiaCupComponent,
    SlideComponent,
    PhotosComponent,
    NextComponent,
    BlogComponent,
    DashboardComponent,
    LoaderComponent,
    TEAMComponent,
    MidfielderComponent,
    ForwardComponent,
    GoalkeeperComponent,
    DefenderComponent,
    ResultComponent,
    InjuriesComponent,
    SentimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
