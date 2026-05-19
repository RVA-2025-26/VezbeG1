import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ArtiklService } from '../../../services/artikl.service';
import { Artikl } from '../../../models/artikl';

@Component({
  selector: 'app-artikl-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './artikl-dialog.component.html',
  styleUrl: './artikl-dialog.component.css'
})
export class ArtiklDialogComponent {
  flag!:number;

  constructor(
    private matSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ArtiklDialogComponent>,
    private service: ArtiklService,
    @Inject(MAT_DIALOG_DATA) public data:Artikl
  ){}

  public add(){
    this.service.createArtikl(this.data).subscribe(
      {next: (data)=>{
        this.dialogRef.close(1);
        this.matSnackBar.open(`Artikl with naziv: ${data.naziv} has been successfully created!`,
        'Okay', {duration:2500})
      }, 
        
      error: (err) => {
        this.matSnackBar.open(`There was an error during POST request`, 'Okay',
        {duration:2500});
        console.log(err);
      }}
    )
  };
  public update(){
    this.service.updateArtikl(this.data.id, this.data).subscribe(
      {
        next: (data)=> {
          this.dialogRef.close(1);
          this.matSnackBar.open(`Artikl with an ID: ${data.id} has been updated!`, 'Okay',
          {duration:2500})
        },
        error: (err) => {
          this.matSnackBar.open(`There was an error during POST request`, 'Okay', {duration:2500});
          console.log(err);
        }
      }
    )
  };
  public delete(){
    this.service.deleteArtikl(this.data.id).subscribe(
      {
        next: ()=> {
          this.dialogRef.close(1);
          this.matSnackBar.open(`Artikl with an ID: ${this.data.id} has been deleted!`, 'Okay',
          {duration:2500})
        },
        error: (err) => {
          this.matSnackBar.open(`There was an error during DELETE request`, 'Okay', {duration:2500});
          console.log(err);
        }
      }
    )
  };
  public cancel(){
    this.dialogRef.close();
    this.matSnackBar.open(`Youve given up on changes!`, 'Okay', {duration:2500});
  };
}
