import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { TopComponent } from './page/top/top.component';
import { InputSizeComponent } from './parts/input-size/input-size.component';
import { HeaderComponent } from './parts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MeigenCardComponent } from './parts/meigen-card/meigen-card.component';
import { FooterComponent } from './parts/footer/footer.component';
import { CategoryTypePipe } from './pipe/category-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InputSizeComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
