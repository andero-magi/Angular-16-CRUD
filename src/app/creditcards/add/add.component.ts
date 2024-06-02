import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newCreditCard: CreditCard = {
    id: undefined,
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

  constructor(private service: CreditcardsService, private router: Router) {

  }

  saveCreditCard() {
    this.service.createCreditCard(this.newCreditCard).subscribe(data => {
      alert("Credit Card added")
      this.router.navigate(["creditcards"])
    })
  }
}
