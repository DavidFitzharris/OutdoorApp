import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})

export class MapService {
    //Map Toolkit API from rapid api
    //https://rapidapi.com/toursprung-toursprung-default/api/maptoolkit

    constructor() {}

    //These tools were used for testing different map apis
    //No longer in use

  //   async getMapTile(){
  //     const options = {
  //       method: 'GET',
  //       url: 'https://maptiles.p.rapidapi.com/en/map/v1/3/6/3.png',
  //       headers: {
  //         'content-type': 'application/octet-stream',
  //         'X-RapidAPI-Key': '38b9aee242mshaafa531d678e47ap1ec799jsn8ae3ad14fca4',
  //         'X-RapidAPI-Host': 'maptiles.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response);
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   async getStaticMap(    center: string,
  //     zoom: string,
  //     size: string,
  //     maptype: string,
  //     format: string) {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://maptoolkit.p.rapidapi.com/staticmap',
  //     params: {
  //       center: center,
  //       zoom: zoom,
  //       size: size,
  //       maptype: maptype,
  //       format: format
  //     },
  //     headers: {
  //       'content-type': 'application/octet-stream',
  //       'X-RapidAPI-Key': '38b9aee242mshaafa531d678e47ap1ec799jsn8ae3ad14fca4',
  //       'X-RapidAPI-Host': 'maptoolkit.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  //   async getRouteData(points: string, routeType: string) {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://maptoolkit.p.rapidapi.com/route',
  //       params: {
  //         points: points,
  //         routeType: routeType,
  //       },
  //       headers: {
  //         'content-type': 'application/octet-stream',
  //         'X-RapidAPI-Key': '38b9aee242mshaafa531d678e47ap1ec799jsn8ae3ad14fca4',
  //         'X-RapidAPI-Host': 'maptoolkit.p.rapidapi.com'
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
   
  //   }

}