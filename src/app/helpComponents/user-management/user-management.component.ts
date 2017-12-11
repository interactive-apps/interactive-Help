import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
