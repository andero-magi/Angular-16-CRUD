import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  cardId: number = 0
  private destroy$: Subject<void> = new Subject<void>()

  constructor(
    private service: CreditcardsService, 
    private router: ActivatedRoute,
    private route: Router,
    private snackbar: MatSnackBar
  ) {
    this.cardId = parseInt(this.router.snapshot.paramMap.get("id") || '')

    this.service.deleteCreditCard(this.cardId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.showSuccessMessage("Credit Card Deleted Successfully")
          this.route.navigate(['/creditcards'])
        })
  }

  showSuccessMessage(msg: string) {
    this.snackbar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
