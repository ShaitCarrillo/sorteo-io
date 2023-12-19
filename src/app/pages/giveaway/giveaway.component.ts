import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.component.html',
  styleUrl: './giveaway.component.sass'
})
export class GiveawayComponent {

  listOfParticipants: string[] = []
  // listOfParticipantsbk: string[] = []

  current: string = ''
  hidden: boolean = true
  buttonText: 'Revelar' | 'Ocultar' = 'Revelar'
  remainingItems: number = 0

  constructor(
    private router: Router,
    private store: StoreService
  ){}
  
  ngOnInit(): void{    
    this.store.getList.subscribe((value: string[])=> this.listOfParticipants = value)
    // this.listOfParticipantsbk = this.listOfParticipants
    this.remainingItems = this.listOfParticipants.length
    if(this.remainingItems < 3) this.returnToHome()
    this.refreshCurrent()
  }
  
  toggleShow(){
    this.hidden = !this.hidden
    this.buttonText = (this.buttonText == 'Ocultar')? 'Revelar' : 'Ocultar'
  }

  nextParticipant(){ 
    this.listOfParticipants.splice(this.listOfParticipants.indexOf(this.current),1)    
    this.remainingItems-=1
    this.refreshCurrent()    
    this.hidden = true
    this.buttonText = 'Revelar'
  }

  refreshCurrent(){
    let previous = this.current
    this.current = this.listOfParticipants[this.getRandom()]  
    if(previous == this.current) this.refreshCurrent()
  }
   
  getRandom() : number{
    return Math.floor(Math.random() * this.listOfParticipants.length)
  }

  returnToHome(){
    this.router.navigate([''])
  }
}
