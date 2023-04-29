import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GeolocationService } from '@ng-web-apis/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {

  //Will be used for fetching data and displaying in html doc
  routeData: any = [];
  mapData: any;
  display: any = [];
  private map: any;

  constructor(private mapService: MapService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.getMapData();
    //this.fetchRouteData();
    this.map = L.Map;
  }

  center: google.maps.LatLngLiteral = {
    lat: 53.2736308,
    lng: -1.7512555
};
zoom = 6;

moveMap(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.center = (event.latLng.toJSON());
}

move(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.display = event.latLng.toJSON();
}

  ngAfterViewInit(): void {
    //this.initMap();
  }

  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: [51.505, -0.09],
  //     zoom: 13
  //   });


  //   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     minZoom: 3,
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   });

  //   tiles.addTo(this.map);
  // }

  // async getMapData() {
  //   this.mapService.getMapTile().then(
  //     response => {
  //       this.mapData = response;
  //       this.processMapData(this.mapData); 
  //       console.log('Map data request:' + response);
  //         // console.log('Map data request:' + response);
  //         // this.mapData = response
  //         // const blob = new Blob([this.mapData], { type: 'image/png' });
  //         // this.display = blob;
  //         // const url = URL.createObjectURL(blob);
  //         // this.display = this.sanitizer.bypassSecurityTrustUrl(url);

  //         // this.processMapData(response);
  //         // console.log('Map data:' + response);

  //         // let objectURL = 'data:image/png;base64,' + this.mapData; //not correct data
  //         // this.display = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //     },
  //     error => {
  //       console.log('Error with map request:' + error);
  //     }
  //   );
  // }

  // try {
  //   this.mapData = await this.mapService.getMapTile();
  //   this.processMapData(this.mapData);
  //   // let objectURL = 'data:image/png;base64,' + this.mapData; //not correct data
  //   // this.display = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  // } catch (error) {
  //   console.log('Error with map data:' + error);
  // }
  // }

  // processMapData(mapData: any) {
  //   const blob = new Blob([mapData], { type: 'image/png' });
  //   this.display = blob;
  //   const url = URL.createObjectURL(blob);
  //   this.display = this.sanitizer.bypassSecurityTrustUrl(url);
  //   console.log('processMapData output:' + this.display);
  // }

  // async fetchStaticMap() {
  //   var center = '48.20835,16.3725';
  //   var zoom = '11';
  //   var size = '640x480';
  //   var maptype = 'toursprung-terrain';
  //   var format = 'png';
  //   try {
  //     this.mapData = await this.mapService.getStaticMap(center, zoom, size, maptype, format);
  //   } catch (error) {
  //     console.error('Error fetching route data:', error);
  //   }
  // }

  async fetchRouteData() {
    const points = '48.202596,16.369801|48.208373,16.370401';
    const routeType = 'bike';
    try {
      this.routeData = await this.mapService.getRouteData(points, routeType);
    } catch (error) {
      console.error('Error fetching route data:', error);
    }
  }

}


