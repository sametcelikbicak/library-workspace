import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoFocusModule } from '@sametcelikbicak/auto-focus';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutoFocusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
