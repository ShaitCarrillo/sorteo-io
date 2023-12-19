import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private participantsList = new BehaviorSubject<string[]>([])

  getList = this.participantsList.asObservable()

  constructor() { }

  setParticipantsList(list:string[]){
    this.participantsList.next(list)
  }
  
}
