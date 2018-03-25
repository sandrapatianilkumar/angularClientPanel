import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';

//angular fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

//components
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ClientDetailsComponent } from './component/client-details/client-details.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

//service imports

import { ClientService } from './services/client.service'
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent },
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'edit-client/:id', component: EditClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }