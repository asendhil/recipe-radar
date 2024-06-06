import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  restrictions: string[] = ["Dairy", "Peanut", "Soy", "Egg", "Seafood", "Sulfite", "Gluten", "Sesame", "Treenut", "Grain", "Shellfish", "Wheat"];
  selectedRestrictions: string[] = [];
  newRestriction: string = '';

  constructor() {
    this.restrictions.sort((a, b) => a.localeCompare(b));
  }

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

  addOtherRestriction() {
    const trimmedRestriction = this.newRestriction.trim();
    if (trimmedRestriction && !this.selectedRestrictions.includes(trimmedRestriction)) {
      this.selectedRestrictions.push(trimmedRestriction);
      this.newRestriction = ''; // Clear the input
    }
    console.log(this.selectedRestrictions); // For debugging purposes
  }

  removeRestriction(restriction: string) {
    const index = this.selectedRestrictions.indexOf(restriction);
    if (index > -1) {
      this.selectedRestrictions.splice(index, 1);
    }
    console.log(this.selectedRestrictions); // For debugging purposes
  }

  getNewRestrictions(): string[] {
    return this.selectedRestrictions.filter(restriction => !this.restrictions.includes(restriction));
  }
}
