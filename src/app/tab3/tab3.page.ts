import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { recipes } from 'src/assets/data/recipes';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pantryItems: string[] = [];
  newItem: string = '';

  constructor(private alertController: AlertController) {}

  addItem() {
    if (this.newItem.trim().length > 0) {
      this.pantryItems.push(this.newItem);
      this.newItem = '';
    }
    console.log("added to pantryItems:", this.pantryItems);
  }

  async editItem(index: number) {
    const alert = await this.alertController.create({
      header: 'Edit Item',
      inputs: [
        {
          name: 'item',
          type: 'text',
          value: this.pantryItems[index],
          placeholder: 'Item'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.item.trim().length > 0) {
              this.pantryItems[index] = data.item;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem(index: number) {
    this.pantryItems.splice(index, 1);
    console.log("deleted something", this.pantryItems);
  }
}
