import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(public alertCtrl: AlertController) { }

    presentAlert(title: string, message: string) {
        let alert = this.alertCtrl.create(
            {
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'OK'
                    }
                ]
            })

        return alert.present();
    }

    presentErrorAlert(message: string) {
        return this.presentAlert("Erro!", message);
    }

    presentAlertWithCallback(title: string, message: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const confirm = this.alertCtrl.create({
                title,
                message,
                buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        confirm.dismiss().then(() => resolve(false));
                    }
                }, {
                    text: 'Tentar novamente',
                    handler: () => {
                        confirm.dismiss().then(() => resolve(true));
                    }
                }]
            });

            return confirm.present();
        });
    }
}