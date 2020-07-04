import { Component, OnInit } from '@angular/core';
import { Platform } from '../../models/platform';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  platform: Platform[];

  constructor(private platformService: PlatformService) { }

  ngOnInit(): void {
    this.getPlatform();
  }

  public getPlatform() {

      this.platformService.getPlatform().subscribe(
        respuesta => this.platform = respuesta
      );
  }
  

}
