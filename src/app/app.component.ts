import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import "reflect-metadata";
import {createConnection} from "typeorm";

import {Client} from "../entities/client";
import {TypeArticle} from "../entities/type.article";
import {DepotArticle} from "../entities/depot.article";
import {DepotArticleDetail} from "../entities/depot.article.detail";
import {RetraitArticle} from "../entities/retrait.article";
import {RetraitArticleDetail} from "../entities/retrait.article.detail";
import {Encaissement} from "../entities/encaissement";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp(platform);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp(platform: Platform) {
    this.platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      

      if(platform.is('cordova')) {
        // Running on device or emulator
        await createConnection({
          type: 'cordova',
          database: 'test',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [
            Client, TypeArticle, DepotArticle, DepotArticleDetail, Encaissement, RetraitArticle, RetraitArticleDetail
          ]
        });
      } else {
        // Running app in browser
        await createConnection({
          type: 'websql',
          database: 'test2',
          version: "1.0",
          description: "cool",
          size:  10,
          logging: ['error', 'query', 'schema'],
          //synchronize: true,
          entities: [
            Client, TypeArticle, DepotArticle, DepotArticleDetail, Encaissement, RetraitArticle, RetraitArticleDetail
          ]
        }).then(connection => {
          /*let client = new Client();
            client.fullName = "Cédric Kodjo KOKOU-N'GONOU";
            client.mobilePhone = "+230 5801 1376";
            client.address = "Lomé, Togo";
            
            let clientRepository = connection.getRepository(Client);
            clientRepository.save(client).then(persistedClient => {
                  console.log("Client has been saved");
                  console.log(persistedClient);
            }, error => {
              console.error(error);
            });
          
          console.log(client);
          this.nav.setRoot(HomePage);*/
        }, error => {
          console.error(error);
        });
        
      }
      this.rootPage = HomePage;
      /*createConnection({
          driver: {
              type: "websql",
              database: "test"
          },
          entities: [
              Client, TypeArticle, DepotArticle
          ],
          logging: {
            logFailedQueryError: true,
            logQueries: true,
            logSchemaCreation: true,
            logOnlyFailedQueries: true
          },
          autoSchemaSync: true,
      }).then(connection => {
          let client = new Client();
          client.fullName = "Cédric Kodjo KOKOU-N'GONOU";
          client.mobilePhone = "+230 5801 1376";
          client.address = "Lomé, Togo";
          
          let clientRepository = connection.getRepository(Client);
          clientRepository.persist(client).then(persistedClient => {
                console.log("Client has been saved");
                console.log(persistedClient);
          }, error => {
            console.error(error);
          });
          
          console.log(client);
      }, error => {
        console.error(error);
      });*/
    });
    this.statusBar.styleDefault();
      this.splashScreen.hide();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
