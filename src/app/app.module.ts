import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Provider} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MatDialogModule} from '@angular/material/dialog';
import {DatePipe} from '@angular/common';
import {
  DateAdapter, MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule,
  MatRippleModule
} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ImageCropperModule} from 'ngx-image-cropper';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgxMatRangeSliderModule} from 'ngx-mat-range-slider';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {QuillModule} from 'ngx-quill';
import {MatStepperModule} from '@angular/material/stepper';
import {CodeInputModule} from 'angular-code-input';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {MatBadgeModule} from '@angular/material/badge';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {NgSelectModule} from '@ng-select/ng-select';
import {MatCardModule} from '@angular/material/card';

import { ConfirmActionComponent } from './shared/components/confirm-action/confirm-action.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {UploaderModule} from '@nghacks/uploader';
import {SidebarModule} from 'ng-sidebar';
import {MatTreeModule} from '@angular/material/tree';
import {NgxSpinnerModule} from 'ngx-spinner';
import { ConfirmDialogueComponent } from './shared/components/confirm-dialogue/confirm-dialogue.component';
import { ActualizeDialogComponent } from './shared/components/actualize-dialog/actualize-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxOneSignalModule } from 'ngx-onesignal';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { HeaderComponent } from './pages/header/header.component';
import { SafetyBordComponent } from './pages/safety-bord/safety-bord.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TerminalCatListComponent } from './pages/terminal/terminal-cat-list/terminal-cat-list.component';
import { RoomCatsComponent } from './pages/room/room-cats/room-cats.component';
import { RoomSubdivisionsComponent } from './pages/room/room-subdivisions/room-subdivisions.component';
import {SessionPageComponent, SessionPageDialogComponent} from './pages/room/session-page/session-page.component';
import { RoomWindowsComponent } from './pages/room/room-windows/room-windows.component';
import {SessionTicketComponent, TicketEndComponent} from './pages/room/session-ticket/session-ticket.component';
import { ReasonPostponeComponent } from './pages/admin/reason-postpone/reason-postpone.component';
import { ReasonRedirectComponent } from './pages/admin/reason-redirect/reason-redirect.component';
import { ReasonOverComponent } from './pages/admin/reason-over/reason-over.component';
import {AdminRoomsComponent} from './pages/admin/admin-rooms/admin-rooms.component';
import { NewAdminRoomsComponent } from './pages/admin/admin-rooms/new-admin-rooms/new-admin-rooms.component';
import { NewReasonOverComponent } from './pages/admin/reason-over/new-reason-over/new-reason-over.component';
import { NewReasonPostponeComponent } from './pages/admin/reason-postpone/new-reason-postpone/new-reason-postpone.component';
import { NewReasonRedirectComponent } from './pages/admin/reason-redirect/new-reason-redirect/new-reason-redirect.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { NewUserComponent } from './pages/admin/users/new-user/new-user.component';
import { SessionStatsComponent } from './pages/room/session-stats/session-stats.component';
import { TicketSoundsComponent } from './pages/admin/ticket-sounds/ticket-sounds.component';

registerLocaleData(localeRu, 'ru');
const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY'
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM-YYYY',
  }
};
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    SidenavComponent,
    FilterPipe,
    DashboardComponent,
    LoginComponent,
    ConfirmActionComponent,
    ConfirmDialogueComponent,
    ActualizeDialogComponent,
    HeaderComponent,
    SafetyBordComponent,
    TicketListComponent,
    TerminalCatListComponent,
    RoomCatsComponent,
    RoomSubdivisionsComponent,
    SessionPageComponent,
    SessionPageDialogComponent,
    RoomWindowsComponent,
    SessionTicketComponent,
    TicketEndComponent,
    ReasonPostponeComponent,
    ReasonRedirectComponent,
    ReasonOverComponent,
    AdminRoomsComponent,
    NewAdminRoomsComponent,
    NewReasonOverComponent,
    NewReasonPostponeComponent,
    NewReasonRedirectComponent,
    UsersComponent,
    NewUserComponent,
    SessionStatsComponent,
    TicketSoundsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxOneSignalModule.forRoot({
      appId: '6f3f32b1-f333-4ac9-8edb-0fc40c368f6b',
      allowLocalhostAsSecureOrigin: true,
      autoRegister: true,
      notifyButton: {
        enabled: true,
      },
    }),
    ServiceWorkerModule.register('OneSignalSDKWorker.js', {
      enabled: true,
    }),
    NgxSpinnerModule,
    MatBadgeModule,
    MatStepperModule,
    QuillModule.forRoot(),
    SidebarModule.forRoot(),
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    Ng2SmartTableModule,
    MatDialogModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ImageCropperModule,
    MatMenuModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    NgxMatRangeSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDividerModule,
    MatRippleModule,
    CodeInputModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    NgSelectModule,
    MatCardModule,
    MatBottomSheetModule,
    UploaderModule,
    MatTreeModule,
    MatRadioModule],
  providers: [
    INTERCEPTOR_PROVIDER,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
