import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {getRepository, Repository} from "typeorm"

import {Client} from "../../entities/client"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      
  }

  ionViewDidLoad() {
    this.runDemo();
  }
  async runDemo() {
    let client = new Client();
    client.fullName = "Cédric Kodjovi KOKOU-N'GONOU";
    client.mobilePhone = "+230 5801 1376";
    client.address = "Lomé, Togo";
    
    let clientRepository = getRepository("Client") as Repository<Client>;
    clientRepository.save(client).then(persistedClient => {
          console.log("Client has been saved");
          console.log(persistedClient);
    }, error => {
      console.error(error);
    });
  }
}
