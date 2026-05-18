import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink, MatButtonModule, MatIcon,
  MatExpansionModule, MatNavList, MatSidenav, MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Naziv';
}
