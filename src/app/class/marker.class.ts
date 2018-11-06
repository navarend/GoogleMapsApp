
export class Marker {
  public lat: number;
  public lng: number;
  public title = 'No title';
  public description = 'No description.';

  constructor( pLat: number, pLng: number ) {
    this.lat = pLat;
    this.lng = pLng;
  }
}
