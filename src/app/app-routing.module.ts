import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { LoginComponent } from './login/login.component';                
import { HomeComponent } from './home/home.component';
import {AccountdetailsComponent } from './accountdetails/accountdetails.component';
import {NewuserComponent } from './newuser/newuser.component';
import {PaybillsComponent } from './paybills/paybills.component';
import {UserdetailsComponent } from './userdetails/userdetails.component';
import {MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { LoansComponent }  from './loans/loans.component';
import { SettingsComponent }  from './settings/settings.component';
import { ServicesComponent }  from './services/services.component';
import { MinistatementComponent }  from './ministatement/ministatement.component';


const rootModule: RootModule = {
    states: [
      {
        name: "login",
        url:'/',
        component: LoginComponent
      },
      {
        name: "home",
        component: HomeComponent,
        params: {username:''}
      },
      {
        name: "accountdetails",
        component: AccountdetailsComponent,
        params: {username:''}
      },
      {
        name: "newuser",
        component: NewuserComponent
        
      },
      {
        name: "userdetails",
        component: UserdetailsComponent
      },
      {
        name: "moneytransfer",
        component: MoneytransferComponent
      },
      {
        name: "paybills",
        component: PaybillsComponent
      },
      {
        name: "loans",
        component: LoansComponent
      },
      {
        name: "settings",
        component: SettingsComponent
      },
      {
        name: "services",
        component: ServicesComponent
      },
      {
        name: "ministatement",
        component: MinistatementComponent
      },
     
    ],
    useHash: true,
    otherwise: '/',
};
                
@NgModule({
    imports: [UIRouterModule.forRoot(rootModule)],
    exports: [UIRouterModule]
})
export class AppRoutingModule { }