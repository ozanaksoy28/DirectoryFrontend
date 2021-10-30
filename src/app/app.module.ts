import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { OrderByPipe } from './pipes/order-by.pipe';
import { PersonFormComponent } from './components/person-form/person-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { WarnFormComponent } from './components/warn-form/warn-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NaviComponent,
    OrderByPipe,
    PersonFormComponent,
    NameFilterPipe,
    WarnFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-left"
    }),
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
