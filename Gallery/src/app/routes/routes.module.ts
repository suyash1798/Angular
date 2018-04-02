import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {GalleryComponent} from '../gallery/gallery.component';
import {ImagedetailsComponent} from '../imagedetails/imagedetails.component';

export const approutes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'image/:id', component: ImagedetailsComponent},
  {path: '', redirectTo: '/gallery', pathMatch: 'full'}
];
