import { Component, OnInit } from '@angular/core';
import { Marker } from "../../class/marker.class";
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { MapsEditComponent }  from "./maps-edit.component";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  markers: Marker[] = [];
  lat = 29.088879144392315;
  lng = -110.99418700404334;

  constructor( public snackBar: MatSnackBar, public dialog: MatDialog ) {
    //const newMarker = new Marker(29.088879144392315,-110.99418700404334);
    //this.markers.push( newMarker );
    if( localStorage.getItem('Markers') ){
      this.markers = JSON.parse( localStorage.getItem('Markers') );
    }
  }

  ngOnInit() {
  }

  AddMarker( event ){
    const newMarkerSelected = new Marker(event.coords.lat,event.coords.lng);
    this.markers.push( newMarkerSelected );
    this.SaveStorage();
    this.snackBar.open('Market added', 'Close', { duration: 3000 });
  }

  SaveStorage(){
    localStorage.setItem('Markers', JSON.stringify( this.markers ));
  }

  EditMarker( market: Marker ){
    const dialogRef = this.dialog.open( MapsEditComponent , {
      width: '250px',
      data: {title: market.title, description: market.description }
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     if( !result ){
       return;
     }
     market.title = result.title;
     market.description = result.description;
     this.SaveStorage();
     this.snackBar.open('Market updated', 'Close', { duration: 3000 });
   });
  }

  DeleteMarker( indexMarker: number){
    console.log(indexMarker);
    this.markers.splice(indexMarker, 1);
    this.SaveStorage();
    this.snackBar.open('Market deleted', 'Close', { duration: 3000 });
  }

}
