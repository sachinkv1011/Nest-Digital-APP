import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-friends',
  templateUrl: './view-all-friends.component.html',
  styleUrls: ['./view-all-friends.component.css']
})
export class ViewAllFriendsComponent {

  constructor(private api:ApiService){
    api.fetchFriend().subscribe(
      (response)=>{
        this.loading=false
        this.friendList=response
      }
    )
  }

  friendList:any=[]
  loading:boolean=true

}
