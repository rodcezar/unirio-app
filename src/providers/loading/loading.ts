import { Injectable } from '@angular/core';
import { LoadingController  } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  loadingComponent: any;

  constructor(public loadingCtrl: LoadingController) {

    console.log('LoadingController');

  }

  public presentLoading(){
  
    this.loadingComponent = this.loadingCtrl.create({
      showBackdrop: true,
      content: 'Carregando...',
      dismissOnPageChange: true});

    this.loadingComponent.present();
  }

  public dismissLoading(){
    this.loadingComponent.dismissAll();
  }

}