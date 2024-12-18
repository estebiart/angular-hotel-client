import { HotelClient } from './../../client/hotel.client';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  public hotel: Observable<any> = this.hotelClient.getHotelData();
  
  constructor(
    private authenticationService: AuthenticationService,
    private hotelClient: HotelClient
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }
}
