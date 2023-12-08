import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profilo-pers',
  templateUrl: './profilo-pers.component.html',
  styleUrls: ['./profilo-pers.component.scss'],
})
export class ProfiloPersComponent implements OnInit {
  utente: any;

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.utente = this.userSrv.getCurrentUser();
    console.log(this.utente);
  }
}
