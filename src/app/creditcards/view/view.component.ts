import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
  
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private service: CreditcardsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id") || '')
    this.cardId = id
    
    if (id === 0) {
      return
    }

    this.service.getCreditCardById(this.cardId)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          this.details = data
        })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
