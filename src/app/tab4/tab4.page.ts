import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  restrictions = ["Dairy", "Peanut", "Soy", "Egg", "Seafood", "Sulfite", "Gluten", "Sesame", "Treenut", "Grain", "Shellfish", "Wheat"];
  selectedRestrictions: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange(event: CustomEvent, restriction: string) {
    const isChecked = event.detail.checked;
    if (isChecked) {
      this.selectedRestrictions.push(restriction);
    } else {
      const index = this.selectedRestrictions.indexOf(restriction);
      if (index > -1) {
        this.selectedRestrictions.splice(index, 1);
      }
    }
    console.log(this.selectedRestrictions); // For debugging purposes
  }
}
