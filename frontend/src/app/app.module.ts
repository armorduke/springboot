import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TOKEN_NAME } from './core/services/auth.constant';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AdminAuthGuard } from './core/guards/admin-auth-guard.service';
import { AppDataService } from './core/services/app-data.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './home/home.module';
import { AuthenticationService } from './core/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => sessionStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http] },
    AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}