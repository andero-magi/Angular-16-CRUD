import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  private destroy$: Subject<void> = new Subject<void>()

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

  constructor(
    private service: CreditcardsService, 
    private router: Router,
    private snackbar: MatSnackBar
  ) {

  }

  saveCreditCard() {
    this.service.createCreditCard(this.newCreditCard)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.snackbar.open("Credit card added successfully!", 'close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          })

          this.router.navigate(["creditcards"])
        })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
