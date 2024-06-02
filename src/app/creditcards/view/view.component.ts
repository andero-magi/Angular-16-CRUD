import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  cardId: number = 0
  details: CreditCard | undefined

  constructor(private service: CreditcardsService, private route: ActivatedRoute) {
    this.cardId = parseInt(route.snapshot.paramMap.get("id") || '')
    this.service.getCreditCardById(this.cardId).subscribe((data) => {
      this.details = data
    })
  }
}
