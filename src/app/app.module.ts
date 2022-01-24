import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OktaSDKAuthService } from 'app/shared/okta/okta-auth-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material UI stuff
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import {A11yModule} from '@angular/cdk/a11y';
import { EnContentComponent } from './en-content/en-content.component';
import { EnComponent } from './en/en.component'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { AutoFocusDirectiveDirective } from './shared/auto-focus-directive.directive';
import { AutoFocusDirectiveDirectiveEN } from './shared/auto-focus-directive.directiveEN';
import { ContentNotificationComponent } from './content-notification/content-notification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatSnackBar} from '@angular/material/snack-bar';
import { EnContentNotificationComponent } from './en-content-notification/en-content-notification.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    EnContentComponent,
    EnComponent,
    AutoFocusDirectiveDirective,
    AutoFocusDirectiveDirectiveEN,
    ContentNotificationComponent,
    EnContentNotificationComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatMenuModule, 
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FlexLayoutModule,
    
    A11yModule,
    HttpClientModule,
    MatTabsModule,
    MatSnackBarModule,
    
    

  ],
  exports: [ContentComponent],
  providers: [OktaSDKAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
