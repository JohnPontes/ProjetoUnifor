import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-query',
  templateUrl: './register-query.component.html',
  styleUrls: ['./register-query.component.scss']
})
export class RegisterQueryComponent implements OnInit {

  shouldOpenModal: boolean = false;

  genderName:string[] = ["Clínico Geral", "Nutricionista", "Odontologista", "Psicólogo", "Endocrinologista"]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModal(){
    this.shouldOpenModal = true
  }

  closeModal (event: any){
    this.shouldOpenModal = false
    location.reload();
  }

  navigateLogin() {
    this.router.navigate(['/'])
  }
}
