import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { stringify } from 'querystring';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q: string = 'grunt';
  project: any;

  constructor(private platformService: PlatformService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProyecto(this.q);
  }

  getProyecto(q: string) {
      this.route.params.subscribe(
        parametros => {
          let api_key = parametros['api_key'];
          if (api_key) {
            this.platformService.search_proyecto(q, api_key).subscribe(
              respuesta => {
                this.project = respuesta;
              }
            );
          }
        }
      );
    

  }

}
