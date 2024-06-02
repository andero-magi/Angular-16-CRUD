import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newCreditCard: CreditCard = {
    id: -1,
    name: "",
    bankName: "",
    description: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: new Date().toString(),
    updatedDate: new Date().toString()
  }

  saveCreditCard() {
    console.log(this.newCreditCard)
  }
}
