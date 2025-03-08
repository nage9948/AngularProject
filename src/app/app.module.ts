import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { PaybillsComponent } from './paybills/paybills.component';
import { SettingsComponent } from './settings/settings.component';
import { LoansComponent } from './loans/loans.component';
import { ServicesComponent } from './services/services.component';
import { MinistatementComponent } from './ministatement/ministatement.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountdetailsComponent,
    NewuserComponent,
    UserdetailsComponent,
    MoneytransferComponent,
    PaybillsComponent,
    SettingsComponent,
    LoansComponent,
    ServicesComponent,
    MinistatementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
