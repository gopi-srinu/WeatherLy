import { Component, OnInit } from '@angular/core';
import {IonToggle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonToggle]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
