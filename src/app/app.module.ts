import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { routing } from './app.routing';
import { OtherComponent } from './other/other.component';
import { CanvasComponent } from './canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    OtherComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule,
		routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
