import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnents/home/home.component';
import { DashboardComponent } from './componnents/dashboard/dashboard.component';

import { TEAMComponent } from './componnents/team/team.component';
import { MidfielderComponent } from './Predict/midfielder/midfielder.component';
import { ForwardComponent } from './Predict/forward/forward.component';
import { GoalkeeperComponent } from './Predict/goalkeeper/goalkeeper.component';
import { DefenderComponent } from './Predict/defender/defender.component';
import { ResultComponent } from './Predict/result/result.component';
import { InjuriesComponent } from './Predict/injuries/injuries.component';
import { SentimentComponent } from './Predict/sentiment/sentiment.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Midfielder',component:MidfielderComponent},
  {path:'Forward',component:ForwardComponent},
  {path:'GoalKeeper',component:GoalkeeperComponent},
  {path:'Defender',component:DefenderComponent},
  {path:'Result',component:ResultComponent},
  {path:'Injuries',component:InjuriesComponent},
  {path:'Sentiment',component:SentimentComponent},
  {path:'Team',component:TEAMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
