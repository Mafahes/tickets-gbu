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
import {RoomWindowsComponent} from "./pages/room/room-windows/room-windows.component";
import {SessionTicketComponent} from "./pages/room/session-ticket/session-ticket.component";
import {AdminRoomsComponent} from "./pages/admin/admin-rooms/admin-rooms.component";
import {ReasonOverComponent} from "./pages/admin/reason-over/reason-over.component";
import {ReasonPostponeComponent} from "./pages/admin/reason-postpone/reason-postpone.component";
import {ReasonRedirectComponent} from "./pages/admin/reason-redirect/reason-redirect.component";
import {NewAdminRoomsComponent} from "./pages/admin/admin-rooms/new-admin-rooms/new-admin-rooms.component";
import {NewReasonOverComponent} from "./pages/admin/reason-over/new-reason-over/new-reason-over.component";
import {NewReasonPostponeComponent} from "./pages/admin/reason-postpone/new-reason-postpone/new-reason-postpone.component";
import {NewReasonRedirectComponent} from "./pages/admin/reason-redirect/new-reason-redirect/new-reason-redirect.component";
import {UsersComponent} from "./pages/admin/users/users.component";
import {NewUserComponent} from "./pages/admin/users/new-user/new-user.component";
import {SessionStatsComponent} from "./pages/room/session-stats/session-stats.component";
import {TicketSoundsComponent} from "./pages/admin/ticket-sounds/ticket-sounds.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'monitor/:id/list', component: TicketListComponent },
  { path: 'monitor/safety', component: SafetyBordComponent },
  { path: 'terminal', component: TerminalCatListComponent },
  { path: 'terminal/cats/', component: TerminalCatListComponent },
  { path: 'terminal/cats/:id', component: TerminalCatListComponent },
  { path: 'room/list', component: RoomSubdivisionsComponent },
  { path: 'room/list/:id/windows', component: RoomWindowsComponent },
  { path: 'room/list/:id/windows/:wid/cats', component: RoomCatsComponent },
  { path: 'room/session/:id', component: SessionPageComponent },
  { path: 'room/session/:id/stats', component: SessionStatsComponent },
  { path: 'room/session/:id/ticket/:tId', component: SessionTicketComponent },
  { path: 'admin/rooms', component: AdminRoomsComponent, pathMatch: 'full' },
  { path: 'admin/sounds', component: TicketSoundsComponent, pathMatch: 'full' },
  { path: 'admin/rooms/new', component: NewAdminRoomsComponent, pathMatch: 'full' },
  { path: 'admin/over', component: ReasonOverComponent },
  { path: 'admin/over/new', component: NewReasonOverComponent, pathMatch: 'full' },
  { path: 'admin/postpone', component: ReasonPostponeComponent },
  { path: 'admin/postpone/new', component: NewReasonPostponeComponent, pathMatch: 'full' },
  { path: 'admin/redirect', component: ReasonRedirectComponent },
  { path: 'admin/redirect/new', component: NewReasonRedirectComponent, pathMatch: 'full' },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/new', component: NewUserComponent },
  { path: 'admin/users/:id', component: NewUserComponent },
  { path: 'admin', redirectTo: 'admin/rooms'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
