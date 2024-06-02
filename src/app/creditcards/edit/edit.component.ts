import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, interval, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  cForm!: FormGroup
  card: CreditCard | null = null
  cardId: number|string = 0;
  private destroy$: Subject<void> = new Subject<void>()

  constructor(
    private builder: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private service: CreditcardsService,
    private snackbar: MatSnackBar
  ) {

    this.cForm = this.builder.group({
      id: [this.cardId],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', Validators.required],
      bankName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      maxCredit: ['', Validators.required],
      interestRate: ['', Validators.required],
      active: [true, Validators.required],
      recommendedScore: ['', Validators.required],
      annualFee: ['', Validators.required],
      termsAndConditions: ['', Validators.required],
      createdDate: ['', Validators.required],
      updatedDate: ['', Validators.required]
    })
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") || ''
    this.cardId = id

    if (id == null || id == '') {
      return
    }

    this.service.getCreditCardById(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.card = data
          this.cForm?.patchValue(this.card)
        })
  }

  showSuccessMessage() {
    this.snackbar.open("Credit card successfully edited", 'close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  onSubmit() {
    if (!this.cForm?.valid) {
      return
    }

    const updatedData: CreditCard = this.cForm.value
    console.log(updatedData)
    console.log(this.card!)

    this.service.updateCreditCard(updatedData)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.showSuccessMessage()
          this.router.navigate(['creditcards'])
        })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
