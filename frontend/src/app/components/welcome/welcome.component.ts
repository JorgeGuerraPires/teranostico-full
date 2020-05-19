import { Component, OnInit } from '@angular/core';

import { faDna, faRoad, faPhone, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ter-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  //------------------------------------
  isActive = false;
  //----------------------------------

  //-----------------------------------------------
  //Font Awesome
  faDna = faDna;
  faRoad = faRoad;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faUsers = faUsers;

  //-----------------------------------------------


  //-----------------------------------------------------------------------
  public pageContent = {
    //Page content object for the usual page data
    header: {
      title: "Teranóstico",
      subtitle:
        "A theranostic based platform for supporting medical doctors on patient cancer related diagnosis and treatment decisions",
      institution: "Fundação Oswaldo Cruz"
    },
    address: {
      physical: "Av. Brasil, 4365 - Manguinhos, Rio de Janeiro - RJ, 21040-900",
      phone: "(21) 2598-4242",
      email: " teranostico@gmail.com"
    },
    info: {
      note:
        " After you create your account, we need to activate before you can access our system. It may take a while.",
      contactus: "Should you prefer, contact us on test@test.com"
    }
  };
  //------------------------------------------------------------------------------------- 

  constructor() { }

  ngOnInit() {
  }

}
