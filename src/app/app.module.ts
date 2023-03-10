import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './component/student/student.component';
import { ProfesseurComponent } from './component/professeur/professeur.component';
import { AbsenceComponent } from './component/absence/absence.component';
import { NavbarComponent } from './component/navbar/navbar.component';

   export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'test-front',
          clientId: 'frontend',
        },
        initOptions: {

          onLoad :"login-required",
          //pkceMethod: 'S256',
          // must match to the configured value in keycloak
          //redirectUri: 'http://localhost:4200/**',
          // this will solved the error
          checkLoginIframe: false
        }
      });
}



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfesseurComponent,
    AbsenceComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
     {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
