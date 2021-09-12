import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-query',
  templateUrl: './register-query.component.html',
  styleUrls: ['./register-query.component.scss']
})
export class RegisterQueryComponent implements OnInit {

  shouldOpenModal: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal (event: any){
    this.shouldOpenModal = false
    this.router.navigate(['cadastrar-consulta']);
  }
}
