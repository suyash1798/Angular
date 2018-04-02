import { Injectable } from '@angular/core';
import {Image} from '../Modules/image-info.module';

@Injectable()
export class ImageServiceService {



  getImages() {
  return Images;
}
getImagebyid(id: number) {
  return Images.find(i => i.id == id);
}
  constructor() { }

}

const Images: Image[] = [
  {id: 1, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 2, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 3, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 4, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 5, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 6, name: 'Audi Rs5', type: 'Audi', description: 'Fastest car', url: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png'},
  {id: 7, name: 'Mercedes', type: 'Mercedes', description: 'costly car', url: 'https://imgd.aeplcdn.com/1280x720/cw/ec/22898/MercedesBenz-CLA-Right-Front-Three-Quarter-84856.jpg?wm=0&q=100'},
  {id: 8, name: 'Mercedes', type: 'Mercedes', description: 'costly car', url: 'https://imgd.aeplcdn.com/1280x720/cw/ec/22898/MercedesBenz-CLA-Right-Front-Three-Quarter-84856.jpg?wm=0&q=100'},
  {id: 9, name: 'Mercedes', type: 'Mercedes', description: 'costly car', url: 'https://imgd.aeplcdn.com/1280x720/cw/ec/22898/MercedesBenz-CLA-Right-Front-Three-Quarter-84856.jpg?wm=0&q=100'},
  {id: 10, name: 'Mercedes', type: 'Mercedes', description: 'costly car', url: 'https://imgd.aeplcdn.com/1280x720/cw/ec/22898/MercedesBenz-CLA-Right-Front-Three-Quarter-84856.jpg?wm=0&q=100'},
  {id: 11, name: 'ferrari spider', type: 'ferrari', description: 'powerful engien', url: 'https://auto.ndtvimg.com/car-images/big/ferrari/488-spider/ferrari-488-spider.webp?v=7'},
  {id: 12, name: 'ferrari spider', type: 'ferrari', description: 'powerful engien', url: 'https://auto.ndtvimg.com/car-images/big/ferrari/488-spider/ferrari-488-spider.webp?v=7'},
  {id: 13, name: 'ferrari spider', type: 'ferrari', description: 'powerful engien', url: 'https://auto.ndtvimg.com/car-images/big/ferrari/488-spider/ferrari-488-spider.webp?v=7'},
  {id: 14, name: 'ferrari spider', type: 'ferrari', description: 'powerful engien', url: 'https://auto.ndtvimg.com/car-images/big/ferrari/488-spider/ferrari-488-spider.webp?v=7'},
  {id: 15, name: 'ferrari spider', type: 'ferrari', description: 'powerful engien', url: 'https://auto.ndtvimg.com/car-images/big/ferrari/488-spider/ferrari-488-spider.webp?v=7'},

];
