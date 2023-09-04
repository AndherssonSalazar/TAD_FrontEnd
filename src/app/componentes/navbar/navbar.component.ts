import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = 'Angular';
  public isCollapsed = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irBusqueda():void{
    this.router.navigate(['busqueda']);
  }
}
