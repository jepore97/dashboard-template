import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isCollapsed:boolean=true;
  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this.sidenavToggle.emit();
    this.isCollapsed=!this.isCollapsed;
  }
}
