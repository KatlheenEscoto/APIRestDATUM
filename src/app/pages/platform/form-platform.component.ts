import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { Random } from '../../models/random';

@Component({
  selector: 'app-form-platform',
  templateUrl: './form-platform.component.html',
  styleUrls: ['./form-platform.component.css']
})
export class FormPlatformComponent implements OnInit {

  random: Random;

  constructor(private platformService: PlatformService) { }

  ngOnInit(): void {
    this.getRandom();
  }

  public getRandom() {
    this.platformService.getRandom().subscribe(
      respuesta => {
        this.random = respuesta;
        console.log(this.random);
      }
    );
  }

}
