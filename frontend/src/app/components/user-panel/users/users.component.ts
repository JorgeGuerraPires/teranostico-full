import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { UtilService } from 'src/app/shared/services/util.service';
import { UsersService } from 'src/app/shared/services/users.service';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'ter-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  //----------------------------------------------
  faEdit = faEdit; faTrashAlt = faTrashAlt
  //---------------------------------------------

  //------------------------------------------
  @Output() output: EventEmitter<User> = new EventEmitter();
  //------------------------------------------
  selectedUser: User;

  displayedColumns: string[] = ["name", "typeOfAccount", "Actions"];
  dataSource: User[];
  constructor(
    private usersService: UsersService,
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }

  editUserProfile(user: User) {
    // console.log(`You clicked to edit ${user}`);
    this.output.emit(user);
  }

  deleteUserProfile(parameter: string) {
    if (confirm("Are you sure you want to delete it?"))
      this.usersService
        .deleteUserById(parameter)
        .subscribe((userDelete) => {
          if (userDelete) {
            this.utilService.openSnackBar(
              `User ${userDelete.name} delete successfully :)`,
              "x"
            );

            this.usersService.getAllUsers().subscribe((users) => {
              // console.log(users);
              this.dataSource = users;
              // console.log(this.dataSource);
            });
          }

          // console.log(`You clicked to delete ${userDelete._id}`);
          else {
          }
        });
    // console.log(`You clicked to delete ${parameter}`);
  }

  refresh() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }


}

