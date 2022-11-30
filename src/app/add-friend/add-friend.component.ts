import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  constructor(private api: ApiService) { }

  readValues = () => {
    let data = { "name": this.name, 
    "friendName": this.friendName, 
    "friendNickName": this.friendNickName, 
    "DescribeYourFriend": this.DescribeYourFriend 
    }
    this.api.addFriend(data).subscribe(

      (response: any) => {

        console.log(response)

        if (response.status == "success") {
          alert("Friend added successfully")
          this.name = ""
          this.friendName = ""
          this.friendNickName = ""
          this.DescribeYourFriend = ""
          
        } else {
          alert("Something went wrong")
        }
      }
    )
    console.log(data)
  }
}
