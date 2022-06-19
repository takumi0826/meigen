import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { TopComponent } from './page/top/top.component';
import { InputNameComponent } from './parts/input-name/input-name.component';
import { HeaderComponent } from './parts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MeigenCardComponent } from './parts/meigen-card/meigen-card.component';
import { FooterComponent } from './parts/footer/footer.component';
import { CategoryTypePipe } from './pipe/category-type.pipe';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InputNameComponent,
    HeaderComponent,
    MeigenCardComponent,
    FooterComponent,
    CategoryTypePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-0SF9YG7HWB'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
