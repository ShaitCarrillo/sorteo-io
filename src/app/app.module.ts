import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapturaComponent } from './pages/captura/captura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiveawayComponent } from './pages/giveaway/giveaway.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturaComponent,
    GiveawayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
