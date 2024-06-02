import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private builder: FormBuilder, 
    private route: ActivatedRoute,
    private service: CreditcardsService
  ) {

    this.cForm = this.builder.group({
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
    const id = parseInt(this.route.snapshot.paramMap.get("id") || '')

    if (id == 0) {
      return
    }

    this.service.getCreditCardById(id).subscribe(data => {
      this.card = data
      this.cForm?.patchValue(this.card)
    })
  }

  onSubmit() {
    if (!this.cForm?.valid) {
      return
    }

    const updatedData: CreditCard = this.cForm.value
    console.log(updatedData)
    
    this.service.updateCreditCard(updatedData)
  }
}
