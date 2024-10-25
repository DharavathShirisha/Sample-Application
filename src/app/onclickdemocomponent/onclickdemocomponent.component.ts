import { Component } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-onclickdemocomponent',
  templateUrl: './onclickdemocomponent.component.html',
  styleUrls: ['./onclickdemocomponent.component.css']
})


export class OnclickdemocomponentComponent {

  user: User={
    Name:'',
    Email:'',
    Id:'',
    Address:''
};
logUser(e:any){
  console.log(this.user);
}
}
