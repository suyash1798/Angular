import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../Services/image-service.service';
import {Image} from '../Modules/image-info.module';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  image: Image;
  constructor(private imageServ: ImageServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageServ.getImagebyid(+this.route.snapshot.params['id']);
  }

}
