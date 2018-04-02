import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import {ImageServiceService} from './Services/image-service.service';
import { FilterPipe } from './Pipe/filter.pipe';
import {RouterModule} from '@angular/router';
import {approutes} from './routes/routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImagedetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [ImageServiceService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
