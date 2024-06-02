import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  details: CreditCard | undefined

  constructor(private service: CreditcardsService) {
    this.service.getCreditCardById(3).subscribe((data) => {
      this.details = data
    })
  }
}
