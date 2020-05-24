import { Component, OnInit, Input } from '@angular/core';

//---------------------------------------------------------------------------
import { User } from 'src/app/shared/interfaces/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilService } from 'src/app/shared/services/util.service';
//--------------------------------------------------------------------------

import { faCopy } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'ter-users-editor',
  templateUrl: './users-editor.component.html',
  styleUrls: ['./users-editor.component.scss']
})
export class UsersEditorComponent implements OnInit {
  faCopy = faCopy;

  @Input() selectedUser: User;

  constructor(
    private usersService: UsersService,
    private utilService: UtilService // private usersComponent: UsersComponent
  ) { }

  ngOnInit() {
  }

  submitToMongo() {
    // console.log(this.selectedUser);
    this.usersService.editUser(this.selectedUser).subscribe((result) => {
      // console.log(result);
      // this.selectedUser = new User();

      this.utilService.openSnackBar(`${result}`, "x");
    });
  }

  clearAll() {
    this.selectedUser = {
      _id: "",
      email: "",
      name: "",
      level: "",
      lastLogin: "",
      failedLogin: "",
      typeOfAccount: "",
    };
  }

  resetpassword() {

    this.usersService.resetpassword(this.selectedUser._id).subscribe((res) => console.log(res))

  }


}
