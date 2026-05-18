import { Component, OnInit } from '@angular/core';
import { Artikl } from '../../../models/artikl';
import { ArtiklService } from '../../../services/artikl.service';

@Component({
  selector: 'app-artikl',
  imports: [],
  templateUrl: './artikl.component.html',
  styleUrl: './artikl.component.css'
})
export class ArtiklComponent implements OnInit{
  
  artikli: Artikl[] = [];

  constructor(private service: ArtiklService){}

  ngOnInit(): void {
    this.service.getAllArtikls().subscribe(
      {
        next: (data) => this.artikli = data,
        error: (err) => console.log(err)
      }
    )
  }

}
