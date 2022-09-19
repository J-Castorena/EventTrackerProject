import { WodService } from './../../services/wod.service';
import { Component, OnInit } from '@angular/core';
import { Wod } from 'src/app/models/wod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  wods: Wod[] = [];
  newWod: Wod = new Wod();
  displayNewWodForm = false;
  selectedWod: Wod | null = null;
  editWod: Wod = new Wod();
  displayUpdateWodForm = false;
  setEditWod: Wod | null = null;
  images = true;


  constructor(private WodService: WodService) {}

  ngOnInit(): void {
    this.displayAllWods();
    console.log(this.selectedWod);
  }

  displayAllWods() {
    this.WodService.getAllWods().subscribe({
      next: (data) => {
        this.wods = data;
      },
      error: (err) => {
        console.error(
          'Home.component.ts displayAllWods(): error retrieving wods ' + err
        );
      },
    });
  }

  createWod(wod: Wod){
    this.WodService.create(wod).subscribe({
      next: (data) => {
        this.newWod = data;
        this.displayAddWodForm();
        this.displayAllWods();
      },
      error: (err) => {
        console.error(
          'Home.component.ts displayAllWods(): error retrieving wods ' + err
        );
      },
    });
  }

  deleteWod(wodId: number){
    this.WodService.delete(wodId).subscribe({
      next: () => {
        this.displayAllWods();
      },
      error: (err: any) => {
        console.error(
          'Home.component.ts displayAllWods(): error retrieving wods ' + err
        );
      },
    });
  }

  updateWod(wod: Wod){
  this.WodService.update(wod).subscribe({
    next: (data) => {
      this.setEditWod = null;
      console.log(wod);
      this.displayTable();
      this.displayAllWods();

    },
    error: (err: any) => {
      console.error(
        'Home.component.ts updateWod(): error updating wods ' + err
      );
    },
  });
  }

  displayTable() {
    this.selectedWod = null;
  }

  showSingleWod(wod: Wod){
  this.selectedWod = wod;
  }

  displayAddWodForm(){
  this.displayNewWodForm = !this.displayNewWodForm;
  }

  showUpdateWodForm(){
    this.displayUpdateWodForm = !this.displayUpdateWodForm;
  }

  setUpdateWod() {
    this.setEditWod = Object.assign({}, this.selectedWod);
  }

  resetAddButton() {

  }

}


