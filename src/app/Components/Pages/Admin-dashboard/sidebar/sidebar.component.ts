import { LogService } from './../../../../Services/log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor(private login:LogService){}


  ngOnInit(): void {

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }


}
