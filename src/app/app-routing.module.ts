import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {TicketListComponent} from "./pages/ticket-list/ticket-list.component";
import {SafetyBordComponent} from "./pages/safety-bord/safety-bord.component";
import {TerminalCatListComponent} from './pages/terminal/terminal-cat-list/terminal-cat-list.component';
import {RoomSubdivisionsComponent} from "./pages/room/room-subdivisions/room-subdivisions.component";
import {RoomCatsComponent} from "./pages/room/room-cats/room-cats.component";
import {SessionPageComponent} from "./pages/room/session-page/session-page.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'monitor/list', component: TicketListComponent },
  { path: 'monitor/safety', component: SafetyBordComponent },
  { path: 'terminal/cats', component: TerminalCatListComponent },
  { path: 'room/list', component: RoomSubdivisionsComponent },
  { path: 'room/list/:id/cats', component: RoomCatsComponent },
  { path: 'room/session/:id', component: SessionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
