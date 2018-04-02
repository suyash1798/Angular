import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {ImageServiceService} from '../Services/image-service.service';
import {Image} from '../Modules/image-info.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];
  title = 'Gallery';
  @Input() filterby?: string = "all";
  constructor(private imageserv: ImageServiceService) { }

  ngOnInit() {

    this.images = this.imageserv.getImages();

  }

  OnChanges() {
    this.images = this.imageserv.getImages();
  }

}
