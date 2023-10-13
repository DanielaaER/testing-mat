import { Component, OnInit } from '@angular/core';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  devHoursAverage = 0;
  proxySizeAverage = 0;

  constructor(private MediasService: MediasService) { }

  ngOnInit(): void {
    this.MediasService.getDevHours().subscribe(data => {
      this.devHoursAverage = this.MediasService.calcularMedia(data);
    });

    this.MediasService.getProxySize().subscribe(data => {
      this.proxySizeAverage = this.MediasService.calcularMedia(data);
    });
  }
}