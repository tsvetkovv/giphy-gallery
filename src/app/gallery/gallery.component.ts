import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../services/image.interface';
import { ImageService } from '../../services/image.service';
import { PAGE_SIZE } from '../app.config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images$: Observable<Image[]> = this.imageService.getTrendingImages();
  collectionSize$ = this.imageService.collectionSize$;

  constructor(
    private imageService: ImageService,
    @Inject(PAGE_SIZE) private pageSize: number
  ) {}

  onPageChange(page: number): void {
    this.imageService.onPageChange(page);
  }
}
