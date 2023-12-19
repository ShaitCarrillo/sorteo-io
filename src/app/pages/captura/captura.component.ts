import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrl: './captura.component.sass'
})
export class CapturaComponent {
  listOfParticipants: string[] = []

  applyForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router,
    private store: StoreService
  ) {}


  addParticipant(){
    try {
      if(!this.applyForm.valid) throw "Llena el campo de nombre"    
      let name:string = this.applyForm.value.name ?? '' 
      if(this.listOfParticipants.indexOf(name) >= 0) throw "El nombre ya existe"
      this.listOfParticipants.push(name)
      this.applyForm.reset()
    } catch (error) {
      console.log(error);
      
    }       
  }

  startGiveaway(){
    this.store.setParticipantsList(this.listOfParticipants)
    this.router.navigate(['giveaway'])
  }

  removeParticipant(index: number){
    this.listOfParticipants.splice(index,1)
  }
}
