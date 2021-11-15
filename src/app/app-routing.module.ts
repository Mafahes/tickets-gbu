import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {TicketListComponent} from "./pages/ticket-list/ticket-list.component";
import {SafetyBordComponent} from "./pages/safety-bord/safety-bord.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: TicketListComponent },
  { path: 'safety', component: SafetyBordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
