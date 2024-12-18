import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/Hotel';
import {HotelesService} from '../../services/hotel.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hoteles: any =[];
  hotel:Hotel ={
    HotelName:'',
    Precio:0,
    created_at: new Date(),
    CategoriaDescripcion:'',

  }
  constructor(private hotelesService: HotelesService, private router:Router, private activedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const params= this.activedRoute.snapshot.params;
    if (params.id){
      this.hotelesService.getHotel(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.hotel = res;
        

        },
        err => console.log(err)
      )
    }
    
      }
      getHotel(id:number){
        this.hotelesService.getHotel(id).subscribe(
          res=> {
            this.hoteles =res;
          },
          err=>console.error(err)
        
        );
      }
  
}